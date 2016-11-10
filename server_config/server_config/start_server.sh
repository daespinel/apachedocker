#!/bin/bash
# Author: Enrico Bocchi (Telecom ParisTech, Paris, 2015)

: '
Usage:
1.	start_server start		--> Starts all the nine apache2 instances
2.  start_server stop		--> Stops all the nine apache2 instances
3.  start_server restart	--> Stops, (waits), and restarts the apache2 instances
2.  start_server clean		--> Stops the server instances and deletes the workload
'


### Parameters
SERVER_ROOT="/home/server/apache-00"


### Apache start/stop
start_apache(){
	for i in {001..009}
	do
		service apache2-$i start
	done
}

stop_apache(){
	for i in {001..009}
	do
		service apache2-$i stop
	done
}


### Clean up server workload
clean_up(){
	stop_apache
	for i in {1..9}
	do
		rm -rf $SERVER_ROOT$i 2>/dev/null
	done
}


### Main (make you own choice)
case "$1" in
  start)
    echo "Starting server..."
    start_apache
    ;;

  stop)
    echo "Stopping server..."
    stop_apache
    ;;

  restart)
    echo "Restarting server..."
    stop_apache
    sleep 2
    start_apache
    ;;
  
  clean)
    echo "Cleaning up..."
    clean_up
    ;;

  *)
    echo -e "Usage: ./script_name.sh {start|restart|stop|clean}"
    ;;
esac


