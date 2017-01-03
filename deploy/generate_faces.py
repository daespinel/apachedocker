#!/usr/bin/python
# -*- coding: iso-8859-1 -*-

# Author: David Espinel


import os
import sys

from argparse import ArgumentParser

sys.path.append("../")
from shared_params import *

address = "192.168."
countSites=4
count=0
sites=1

#-------------------------------------------------------------------------------
# Argument parser
#-------------------------------------------------------------------------------
def process_opt():
	usage = """generate_faces.py [options]\nType "generate_faces.py --help" for more info"""
	parser = ArgumentParser(usage=usage)
	parser.add_argument("--input", dest="input", required=True, type=str, \
							help="Input latency file")

	opt = parser.parse_args()
	return opt

# ------------------------------------------------------------------------------
# LOCAL FUNCTIONS
# ------------------------------------------------------------------------------
# Produce the textual output for Apache configuration
def hname2faces(hname, proto):
	global address
	global countSites
	global count
	global sites
	output = ""
#	for loss in [0, 1, 2]:
	for loss in [0]:
		words= hname.split()
		address = "192.168."
		if (proto == 0):
			x= (0 * 128) + loss + (count * 3)
		else:
			x= (1 * 128) +  loss + (count * 3)
		address = address + str(x)+"."
		address = address + str(countSites)
		output = output + "\n".join([str(sites) + " " + address + " "+ words[2] + "ms" + " " + str(loss) + "%" ])
		output = output + "\n"
		sites +=1
	return output


# ------------------------------------------------------------------------------
#** MAIN **#
if __name__ == '__main__':


	# Get parameters from keyboard
	params = process_opt()

	# Initializing output files
	class OutputFile():
		def __init__(self):
			self.faces = open('server_ifaces'+'.settings', 'w')

		def close(self):
			self.faces.close()


	output = {}
	output["server_ifaces"] = OutputFile()
	

	# Read the hostnames file and generate configuration files
	for hname in open(params.input, 'r').read().splitlines():
		if hname.startswith('#'):
			print "header"
		else:
			output["server_ifaces"].faces.write(hname2faces(hname,0))
#			output["server_ifaces"].faces.write(hname2faces(hname,1))
			if(countSites<255):
#				address = address + str(countSites)
				countSites +=1
#				print "count sites", countSites
			if(countSites == 255):
				count +=1
				countSites = 1
			
	for i in output.values():
		i.faces.close()
	
