#!/bin/bash
# Author: Enrico Bocchi (Telecom ParisTech, Paris, 2015)


: '
Usage:
1.  start_testbed start		--> Deploys the desidered web page, starts the interfaces, and the apache2 instances
								* It requires 2 additional parameters:
									# path to the .tar.bz2 package containing the workload and the configuration files
									# protocol to be used. Possible choices are http, https, spdy
								* A fourth (optional) parameter is used to tune the loss probability on the interfaces.
								  All the interfaces will have the same loss probability unless the configuration file
								  is manually modified. In case, take a look at /home/server/ifaces_config/server_ifaces.settings
								  (or, generally, IF_SETT_DST/IF_SETT_FNAME)

2.  start_testbed restart	--> Stops apache2 instances and virtual interfaces, (waints), and restarts the testbed with the last configuration

3.  start_testbed stop		--> Stops the testbed and deletes workload and interface setting files.
								The apache2 configuration files (/etc/apache2-00N/sites-available/000-default.conf) are left there.
'


### Parameters
IFACES="ifaces_config/start_ifaces.sh"
SERVER="server_config/start_server.sh"

TMP_FOLDER="/home/server/tmp_folder/"
IF_SETT_FNAME="server_ifaces.settings"
IF_SETT_DST="/home/server/ifaces_config/"
SERVER_HOSTFILES="virtual_hosts"
SERVER_ROOT="/home/server/apache2-00"
SERVER_CONF="/etc/apache2-00"
SERVER_000="000-default.conf"

LOGS="/home/server/deploy_logs/"


### Deployment utils
extract_data(){
	mkdir $TMP_FOLDER
	tar -xf $1 -C $TMP_FOLDER
}

clean_tmp_files(){
	rm -rf $TMP_FOLDER 2>/dev/null
}

clean_ifaces(){
	rm $IF_SETT_DST$IF_SETT_FNAME 2>/dev/null
}

clean_workload(){
	for i in {1..9}
	do
		if [ -d $SERVER_ROOT$i ]; then
			rm -rf $SERVER_ROOT$i 2>/dev/null
		fi
	done
}

deploy_ifaces_config(){
	rm $IF_SETT_DST$IF_SETT_FNAME 2>/dev/null

	# Handle new latency
	if [ $1 ]; then
		echo -e "\t** Updating loss: "$1
		while read l
		do
			if [[ $l =~ ^#  ||  `echo $l | awk '{print NF}'` -ne 4 ]]; then
				echo $l >> $IF_SETT_DST$IF_SETT_FNAME
			else
				values=($l)
				echo -e ${values[0]}"\t"${values[1]}"\t"${values[2]}"\t"$1 >> $IF_SETT_DST$IF_SETT_FNAME
			fi
		done < $TMP_FOLDER$IF_SETT_FNAME
		
	# If no new latency specified, just copy the config file
	else
		cp $TMP_FOLDER$IF_SETT_FNAME $IF_SETT_DST$IF_SETT_FNAME
	fi
}

config_server(){
	# Virtual host files are dependent on the protocol used (HTTP-->80, HTTPS/H2-->443)
	for i in {1..9}
	do
		cp $TMP_FOLDER$SERVER_HOSTFILES"/"$1"_"$i $SERVER_CONF$i"/sites-available/"$SERVER_000 2>/dev/null
		# Start the server instance only if you have the config file (not said all the servers are needed)
		if [ $? -eq 0 ]; then
			service apache2-00$i start
		fi
	done
}

deploy_workload(){
	# Workload is dependent on the protocol used (HTTP-->clear-text, HTTPS/H2-->enctypted)
	WL_FOLDER="clear/"
	if [[ $1 == "https" || $1 == "h2" ]]; then
		WL_FOLDER="encrypted/"
	fi

	clean_workload
	for i in {1..9}
	do
		cp -r $TMP_FOLDER$WL_FOLDER$i $SERVER_ROOT$i
	done
}

logger(){
	FOUT=$LOGS`date +%Y%m%d_%H%M%S`_`echo $1 | rev | cut -d '/' -f 1 | rev`.log
	mkdir $LOGS 2>/dev/null

	echo "---LOGGER---" >> $FOUT
	echo -e "\n\nDeployment of:\t"$1 >> $FOUT
	echo -e "\n\n---ifconfig---" >> $FOUT
	ifconfig >> $FOUT
	echo -e "\n\n--tc qdisc--" >> $FOUT
	tc qdisc >> $FOUT
	echo -e "\n\n--netstat--" >> $FOUT
	netstat -lt >> $FOUT
	echo -e "\n\n--apache--" >> $FOUT
	for i in {1..9}
	do
		service apache2-00$i status >> $FOUT
	done
}


### Main (make you own choice)
case "$1" in
  start)
    if [[ $2 == "" || $3 == "" ]]; then
        echo -e "Usage: ./script_name.sh start PACKAGE_NAME PROTOCOL{http|https|h2}"
        exit	
    fi

    echo -e "--> Starting testbed <--\n\t** Package: "$2"\n\t** Protocol: "$3
    echo -e "Extracting package..."
    extract_data $2

    echo -e "Starting virtual interfaces..."
    deploy_ifaces_config $4
    $IFACES start

    echo -e "Starting apahce2 instances..."
    deploy_workload $3
    config_server $3
    clean_tmp_files
    
    logger $2
    ;;

  stop)
    echo -e "--> Stopping testbed <--"
    $SERVER stop
    $IFACES stop
    echo -e "Cleaning files..."
    clean_ifaces
    clean_workload
    clean_tmp_files
    ;;

  restart)
    $SERVER stop
    $IFACES stop
    sleep 2
    $IFACES start
    $SERVER start
    ;;

  *)
    echo -e "Usage: ./script_name.sh {start|restart|stop}"
    echo -e "\t** start TAR_PACKAGE PROTOCOL [LOSS %]"
    ;;
esac

