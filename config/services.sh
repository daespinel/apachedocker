#!/bin/bash

service ssh start
/home/server/ifaces_config/./start_ifaces.sh start
service apache2 start
service apache2-001 start
service apache2-002 start
/bin/bash