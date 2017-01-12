#!/bin/bash
echo "Protocol: "$1" and  loss: "$2""
python /home/deploy/plain_deploy.py --input /home/deploy/latency.DATA --protocol $1 --loss $2
cp /home/deploy/h1.apache /etc/apache2-001/sites-available/000-default.conf
cp /home/deploy/h2.apache /etc/apache2-002/sites-available/000-default.conf
python /home/deploy/generate_faces.py --input /home/deploy/latency.DATA --protocol $1 --loss $2
cp /home/deploy/server_ifaces.settings /home/server/ifaces_config/server_ifaces.settings
/home/server/ifaces_config/./start_ifaces.sh reload