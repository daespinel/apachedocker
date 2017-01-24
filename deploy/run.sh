#!/bin/bash
case "$1" in
	1)
	protocolo='HTTP'
	losss='0'
	;;
	2)
	protocolo='HTTP'
	losss='1'
	;;
	3)
	protocolo='HTTP'
	losss='2'
	;;
	4)
	protocolo='HTTP2'
	losss='0'
	;;
	5)
	protocolo='HTTP2'
	losss='1'
	;;
	6)
	protocolo='HTTP2'
	losss='2'
	;;
	*)
	echo "Experiment from 1 to 6"
	;;
esac
echo "Protocol: "$protocolo" and  loss: "$losss""
python /home/deploy/plain_deploy.py --input /home/deploy/latency.DATA --protocol $protocolo --loss $losss
cp /home/h1.apache /etc/apache2-001/sites-available/000-default.conf
cp /home/h2.apache /etc/apache2-002/sites-available/000-default.conf
service apache2-001 restart
service apache2-002 restart
#python /home/deploy/generate_faces.py --input /home/deploy/latency.DATA --protocol $protocolo --loss $losss
#cp /home/server_ifaces.settings /home/server/ifaces_config/server_ifaces.settings
#/home/server/ifaces_config/./start_ifaces.sh reload