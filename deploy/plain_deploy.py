#!/usr/bin/python
# -*- coding: iso-8859-1 -*-

# Author: Enrico Bocchi (Telecom ParisTech, Paris, 2016)

#
# This is the easy version due to PhD candidate incompetence.
#

import os
import sys

from argparse import ArgumentParser

sys.path.append("../")
from shared_params import *

address = "192.168."
limit = False
countSites=1
count=0

#-------------------------------------------------------------------------------
# Argument parser
#-------------------------------------------------------------------------------
def process_opt():
	usage = """generate_package.py [options]\nType "generate_package.py --help" for more info"""
	parser = ArgumentParser(usage=usage)
	parser.add_argument("--input", dest="input", required=True, type=str, \
							help="Input latency file")

	opt = parser.parse_args()
	return opt



# ------------------------------------------------------------------------------
# LOCAL FUNCTIONS
# ------------------------------------------------------------------------------
# Produce the textual output for Apache configuration
def hname2apache(hname, proto):
	global address
	global countSites
	global count
	print hname
	if (proto == HTTP1):	# Serving HTTP1
		ssl_cert = "/etc/apache2-001/ssl/apache-001.crt"
		ssl_key  = "/etc/apache2-001/ssl/apache-001.key"
	else:						# Serving H2
		ssl_cert = "/etc/apache2-002/ssl/apache-002.crt"
		ssl_key  = "/etc/apache2-002/ssl/apache-002.key"
		
	# for Containerization
	# for loss in 0 1 2
	#	x = (h1|h2)*128 + loss
	#	y = domain2latency(hname)
	#	address = 192.168.x.y 
	#
	output = ""   
	for loss in [0, 1, 2]:
		words= hname.split()
		# print words[2]
		address = "192.168."
#		print "count equals to ", count
		if (proto == HTTP1):
			x= (0 * 128) + loss + (count * 3)
#			if(countSites < 255):
#				x= 0 * 128 + loss
#			else:
#				if(countSites >= 255):
#					if(loss == 0):
#						x= 0 * 128 + 3
#					if(loss == 1):
#						x= 0 * 128 + 4
#					if(loss == 2):
#						x= 0 * 128 + 5
		
		else:
			x= (1 * 128) +  loss + (count * 3)
#			if(countSites < 255):
#				x= 1 * 128 + loss
#			else:
#				if(countSites >= 255):
#					if(loss == 0):
#						x= 1 * 128 + 3
#					if(loss == 1):
#						x= 1 * 128 + 4
#					if(loss == 2):
#						x= 1 * 128 + 5
		address = address + str(x)+"."
		address = address + str(countSites)
		


#		if(countSites>=255):
#			address = address + str(countSites2)
#			countSites2 +=1

		print address
		output = output + "\n".join(["<VirtualHost %s:%s>" % (address,APACHE_PORT_secondary), \
						"\tServerName "+ words[0], \
						"\tDocumentRoot "+os.path.join("/var/www/", words[0]), \
						"", \
						"\tErrorLog ${APACHE_LOG_DIR}/error.log", \
						"\tCustomLog ${APACHE_LOG_DIR}/access.log combined", \
						"", \
						"\tProtocols "+proto, \
						"", \
						"\tSSLEngine on", \
						"\tSSLCertificateFile "+ssl_cert, \
						"\tSSLCertificateKeyFile "+ssl_key, \
						"</VirtualHost>", "", "", ""])
	

	return output


# Produce the hosts file to be replace /etc/hosts of the clients
# NOTE: only the first IP address of the pool is used
# Load balancing and other tricks have to be performed manually
def hname2hosts(hname, proto):
	if (proto == HTTP1):	# Serving HTTP1	
		return IPv6_POOL+"1"+" "+hname+"\n"
	else:					# Serving H2
		return IPv6_POOL+"2"+" "+hname+"\n"


# ------------------------------------------------------------------------------
#** MAIN **#
if __name__ == '__main__':
	global address
	global countSites
	global countSites2

	# Get parameters from keyboard
	params = process_opt()

	# Initializing output files
	class OutputFile():
		def __init__(self, proto):
			self.apache = open(proto+'.apache', 'w')
			self.hosts = open(proto+'.hosts', 'w')
			self.write_hosts_header()

		def close(self):
			self.apache.close()
			self.hosts.close()

		def write_hosts_header(self):
			self.hosts.write(LOCAL_HOST)
			self.hosts.write("\n")
			self.hosts.write(LOCAL_HOSTv6)
			self.hosts.write("\n")
			self.hosts.write("\n")


	output = {}
	output[HTTP1] = OutputFile("h1")
	output[H2] = OutputFile("h2")

	# Read the hostnames file and generate configuration files
	for hname in open(params.input, 'r').read().splitlines():
		if hname.startswith('#'):
			print "header"
		else:
			output[HTTP1].apache.write(hname2apache(hname, HTTP1))
			output[HTTP1].hosts.write(hname2hosts(hname, HTTP1))
			output[H2].apache.write(hname2apache(hname, H2))
			output[H2].hosts.write(hname2hosts(hname, H2))

			if(countSites<255):
#				address = address + str(countSites)
				countSites +=1
#				print "count sites", countSites
			if(countSites == 255):
				count +=1
				countSites = 1

	for i in output.values():
		i.apache.close()
		i.hosts.close()
	
