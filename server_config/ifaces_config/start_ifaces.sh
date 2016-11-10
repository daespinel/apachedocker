#!/bin/bash
# Author: Enrico Bocchi (Telecom ParisTech, Paris, 2015)

: '
Usage:
1.	start_ifaces boot	-->	set up virtual interfaces without latency/loss constraints
					** It deletes eventual rules previously defined with 'tc qdisc' **
2.	start_ifaces start	-->	set up virtual interfaces with defined latency/loss constraints
					** It deletes eventual rules previously defined with 'tc qdisc' **
3.	start_ifaces stop	-->	stop virtual interfaces and delete eventual rules defined with 'tc qdisc'

Switching:
boot --> start		Latency and loss parameters are LOADED WITHOUT losing connectivity on the virtual interfaces
boot --> reload		-same as before but connectivity is LOST as interfaces are torn down and restarted-

start --> start		Reload latency and loss parameters without losing connectivity on the virtual interfaces
			** This allows to change latency/loss by providing a new 'IFACES_SETTINGS' file ** 
start --> reload	-same as before but connectivity is LOST as interfaces are torn down and restarted-

start --> boot		Latency and loss parameters are DISCARDED without losing connectivity on the virtual interfaces
start --> reload	-same as before but connectivity is LOST as interfaces are torn down and restarted-

Other methods:
reboot	stop and start virtual interfaces w/o latency/loss constraints
reload	stop and start virtual interfaces with defined latency/loss constraints
'

### Parameters
IFACES_SETTINGS="/home/server/ifaces_config/server_ifaces.settings"			# Expected format: iface ip_addr rtt loss
DEFAULTSETTINGS="/home/server/ifaces_config/server_ifaces.settings.defaults"		# Expected format: iface ip_addr rtt loss

DEV=eth0
MASTER_IP="192.168.0.10"
DEFAULT_GW="192.168.0.12"
DNS_PRI="137.194.2.16"
DNS_SEC="137.194.2.17"
DNS_TER="137.194.2.34"
NET="192.168.0."
MASK="255.255.255.0"

SLEEP_TIME=2


### Start virtual interfaces using settings loaded from file.
start(){
	tc qdisc add dev $DEV root handle 1: prio bands 16
	while read l
	do
		if [[ $l =~ ^#  ||  `echo $l | awk '{print NF}'` -ne 4 ]]; then
			continue
		else
			values=($l)
			if [ ${values[1]} == $MASTER_IP ]; then
				:
			else
				ifconfig $DEV:${values[0]} ${values[1]} netmask $MASK up
			fi
			prio=$((${values[0]}+1))
			tc qdisc add dev $DEV parent 1:$prio handle $((10+$prio)): netem delay ${values[2]} loss ${values[3]}
			tc filter add dev $DEV protocol ip parent 1:0 prio $prio u32 match ip src ${values[1]}/32 flowid 10:$prio
		fi
	done < $IFACES_SETTINGS
}

reload(){
	stop
	sleep $SLEEP_TIME
	start
}


### Start virtual interfaces at boot time (no latency/loss)
boot(){
	while read l
	do
		if [[ $l =~ ^#  ||  `echo $l | awk '{print NF}'` -ne 4 ]]; then
			continue
		else
			values=($l)
			if [ ${values[1]} == $MASTER_IP ]; then
				:
			else
				ifconfig $DEV:${values[0]} ${values[1]} netmask $MASK up
			fi
		fi
	done < $DEFAULTSETTINGS
}

reboot(){
	stop
	sleep $SLEEP_TIME
	boot
}


### Stop virtual interfaces
stop(){
	for i in {1..9}
	do	
		ifconfig $DEV:$i down 2>/dev/null
	done
	discard_old_tc
}


### Discard old tc qdisc rules
discard_old_tc(){
	tc qdisc del dev $DEV root 2>/dev/null
}


### Main (make you own choice)
case "$1" in
  start)
    echo -e "Enforcing latency/loss constraints... \n\t** Settings_file: "$IFACES_SETTINGS
    discard_old_tc
    start
    ;;

  reload)
    echo -e "Reloading latency/loss constraints... \n\t** Settings_file: "$IFACES_SETTINGS
    reload
    ;;

  boot)
    echo -e "Booting virtual interfaces w/o latency/loss"
    discard_old_tc
    boot
    ;;

  reboot)
    echo -e "Rebooting..."
    reboot
    ;;

  stop)
    echo -e "Stopping virtual interfaces..."
    stop
    ;;

  *)
    echo "Usage: ./script_name.sh {start|reload|boot|reboot|stop}"
    ;;
esac

