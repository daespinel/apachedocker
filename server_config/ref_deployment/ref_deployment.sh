#!/bin/bash
# Author: Enrico Bocchi (Telecom ParisTech, Paris, 2015)


: '
Usage:
1.	ref_deployment default	--> Loads default landing page for all the 9 apache2 instances. Plain HTTP/1.1 is used

2.  ref_deployment flags	--> Loads the check-mark web page. Three instances are started
																#1 -- Plain HTTP/1.1
																#2 -- HTTP/1.1 over SSL
																#3 -- H2 over SSL

3.  ref_deployment stop		--> Stops the apache instances, stops the virtual interfaces, deletes the workload
'


### Parameters
IFACES="/home/server/ifaces_config/start_ifaces.sh"
SERVER="/home/server/server_config/start_server.sh"

SERVER_ROOT="/home/server/"
SERVER_CONF="/etc/apache2-00"
SERVER_000="000-default.conf"


### Main (make you own choice)
case "$1" in
  default)
    for i in {1..9}
    do
      if [ -d "default/apache2-00"$i ]; then
        cp -r "default/apache2-00"$i $SERVER_ROOT"apache2-00"$i
      fi

      if [ -f "default/config_"$i ]; then
        cp "default/config_"$i $SERVER_CONF$i"/sites-available/"$SERVER_000
      fi
    done

    $IFACES boot
    $SERVER start
    ;;

  flags)
    for i in {1..3}
    do
      if [ -d "flags/apache2-00"$i ]; then
        cp -r "flags/apache2-00"$i $SERVER_ROOT"apache2-00"$i
      fi

      if [ -f "flags/config_"$i ]; then
        cp "flags/config_"$i $SERVER_CONF$i"/sites-available/"$SERVER_000
      fi
    done

    $IFACES boot
    for i in {1..3}
    do
      service apache2-00$i start
    done
    ;;

  stop)
    $SERVER stop
    $IFACES stop

    for i in {1..9}
    do
      rm -rf $SERVER_ROOT"apache2-00"$i
    done
    ;;

  *)
    echo -e "Usage: ./script_name.sh {default|flags|stop}"
    ;;
esac

