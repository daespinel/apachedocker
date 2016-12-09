var priceList = {
'0':['0' , '250' , '500' , '750' , '1 000' , '1 500' , '2 000' , '2 500' , '3 000' , '3 500' , '4 000' , '4 500' , '5 000' , '5 500' , '6 000' , '6 500' , '7 000' , '7 500' , '8 000' , '8 500' , '9 000' , '9 500' , '10 000' , '11 000' , '12 000' , '13 000' , '14 000' , '15 000' , '17 500' , '20 000' , '22 500' , '25 000' , '27 500' , '30 000' , '32 500' , '35 000' , '37 500' , '40 000' , '42 500' , '45 000' , '47 500' , '50 000' , 'Plus de 50 000'  ],
'1':['0' , '250' , '500' , '750' , '1 000' , '1 250' , '1 500' , '2 000' , '2 500' , '3 000' , '3 500' , '4 000' , '5 000' , '7 500' , '10 000' , '12 500' , '15 000' , '17 500' , '20 000' , 'Plus de 20 000'  ],
'2':['0' , '25 000' , '50 000' , '75 000' , '100 000' , '125 000' , '150 000' , '175 000' , '200 000' , '225 000' , '250 000' , '275 000' , '300 000' , '325 000' , '350 000' , '400 000' , '450 000' , '500 000' , '550 000' , '600 000' , '650 000' , '700 000' , '800 000' , '900 000' , '1 000 000' , '1 100 000' , '1 200 000' , '1 300 000' , '1 400 000' , '1 500 000' , '2 000 000' , 'Plus de 2 000 000'  ],
'3':['0' , '500' , '1 000' , '2 000' , '3 000' , '4 000' , '5 000' , '6 000' , '7 000' , '8 000' , '9 000' , '10 000' , '15 000' , '20 000' , '30 000' , 'Plus de 30 000'  ],
'4':['0' , '5' , '10' , '20' , '30' , '40' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , '1 000' , 'Plus de 1 000'  ],
'5':['0' , '100' , '500' , '1 000' , '2 500' , '5 000' , '7 500' , '10 000' , '30 000' , '50 000' , '60 000' , '70 000' , '80 000' , '90 000' , '100 000' , 'Plus de 100 000'  ],
'7':['0' , '500' , '1 000' , '5 000' , '10 000' , '30 000' , '50 000' , '100 000' , '250 000' , '500 000' , 'Plus de 500 000'  ],
'8':['0' , '10' , '20' , '30' , '40' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , '1 000' , 'Plus de 1 000'  ],
'9':['0' , '5' , '10' , '20' , '30' , '40' , '50' , '75' , '100' , '150' , '200' , '250' , '300' , '350' , '400' , '500' , 'Plus de 500'  ],
'10':['0' , '10' , '20' , '30' , '40' , '50' , '60' , '70' , '80' , '90' , '100' , '125' , '150' , '175' , '200' , '300' , '400' , '500' , '1 000' , 'Plus de 1 000'  ],
'11':['0' , '5' , '10' , '20' , '30' , '40' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , 'Plus de 500'  ],
'12':['0' , '5' , '10' , '15' , '20' , '25' , '30' , '50' , '75' , '100' , '150' , '200' , '300' , '500' , '1 000' , '2 500' , 'Plus de 2 500'  ],
'13':['0' , '3' , '5' , '8' , '10' , '15' , '20' , '25' , '30' , '40' , '50' , '100' , '250' , 'Plus de 250'  ],
'14':['0' , '5' , '10' , '15' , '30' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , 'Plus de 500'  ],
'15':['0' , '3' , '5' , '8' , '10' , '15' , '20' , '30' , '50' , '75' , '100' , 'Plus de 100'  ],
'16':['0' , '5' , '10' , '15' , '20' , '30' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , '1 000' , '2 500' , 'Plus de 2 500'  ],
'17':['0' , '15' , '50' , '100' , '200' , '300' , '400' , '500' , '750' , '1 000' , 'Plus de 1 000'  ],
'19':['0' , '15' , '30' , '50' , '75' , '100' , '250' , '500' , 'Plus de 500'  ],
'20':['0' , '5' , '10' , '15' , '20' , '25' , '30' , '50' , '75' , '100' , 'Plus de 100'  ],
'21':['0' , '10' , '25' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , '750' , '1 000' , 'Plus de 1 000'  ],
'22':['0' , '250' , '500' , '750' , '1 000' , '1 500' , '2 000' , '2 500' , '3 000' , '4 000' , '5 000' , '6 000' , '7 000' , '8 000' , '9 000' , '10 000' , '11 000' , '12 000' , '13 000' , '14 000' , '15 000' , '17 500' , '20 000' , '22 500' , '25 000' , '27 500' , '30 000' , '35 000' , '40 000' , '45 000' , '50 000' , 'Plus de 50 000'  ],
'23':['0' , '100' , '200' , '250' , '300' , '350' , '400' , '450' , '500' , '600' , '700' , '800' , '900' , '1 000' , '1 200' , 'Plus de 1 200'  ],
'24':['0' , '100' , '150' , '200' , '250' , '300' , '350' , '400' , '450' , '500' , '550' , '600' , '700' , '800' , '900' , '1 000' , '1 200' , '1 400' , '1 600' , '1 800' , '2 000' , '2 500' , '3 000' , '4 000' , 'Plus de 4 000'  ],
'25':['0' , '5' , '10' , '20' , '30' , '40' , '50' , '75' , '100' , '150' , '200' , '250' , '500' , '1 000' , 'Plus de 1 000'  ],
'26':['0' , '5' , '10' , '20' , '30' , '40' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , 'Plus de 500'  ],
'27':['0' , '5' , '10' , '15' , '20' , '30' , '40' , '50' , '75' , '100' , '250' , 'Plus de 250'  ],
'28':['0' , '5' , '10' , '15' , '20' , '30' , '50' , '75' , '100' , '250' , 'Plus de 250'  ],
'29':['0' , '5' , '10' , '15' , '20' , '25' , '30' , '40' , '50' , '75' , '100' , '250' , '500' , 'Plus de 500'  ],
'30':['0' , '5' , '10' , '15' , '20' , '30' , '40' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , '1 000' , 'Plus de 1 000'  ],
'31':['0' , '3' , '5' , '8' , '10' , '15' , '20' , '30' , '50' , '75' , '100' , '250' , 'Plus de 250'  ],
'32':['0' , '3' , '5' , '8' , '10' , '15' , '20' , '30' , '50' , '75' , '100' , '250' , 'Plus de 250'  ],
'33':['0' , '15' , '30' , '50' , '75' , '100' , '150' , '200' , '300' , '400' , '500' , '750' , '1 000' , '2 500' , '5 000' , '10 000' , '15 000' , 'Plus de 15 000'  ],
'34':['0' , '5' , '10' , '15' , '20' , '30' , '40' , '50' , '75' , '100' , '250' , 'Plus de 250'  ],
'35':['0' , '5' , '10' , '15' , '20' , '30' , '40' , '50' , '75' , '100' , '250' , '500' , '1 000' , 'Plus de 1 000'  ],
'36':['0' , '100' , '500' , '1 000' , '2 500' , '5 000' , 'Plus de 5 000'  ],
'38':['0' , '5' , '10' , '15' , '20' , '30' , '40' , '50' , '75' , '100' , '200' , '250' , '500' , '750' , '1 000' , '1 250' , '1 500' , 'Plus de 1 500'  ],
'39':['0' , '35' , '50' , '100' , '150' , '200' , '300' , '400' , '500' , '750' , '1 000' , '2 500' , '3 500' , '5 000' , '10 000' , '25 000' , '35 000' , '50 000' , 'Plus de 50 000'  ],
'40':['0' , '5' , '10' , '15' , '20' , '25' , '30' , '50' , '75' , '100' , 'Plus de 100'  ],
'41':['0' , '20' , '40' , '60' , '80' , '100' , '120' , '140' , '160' , '180' , '200' , '250' , '300' , '350' , '400' , '500' , '750' , '1 000' , '1 500' , '2 000' , 'Plus de 2 000'  ]
};

var squareList = {
'0':['0' , '20' , '25' , '30' , '35' , '40' , '50' , '60' , '70' , '80' , '90' , '100' , '110' , '120' , '130' , '140' , '150' , '200' , '300' , '500' , 'Plus de 500'  ],
'1':['0' , '20' , '25' , '30' , '35' , '40' , '50' , '60' , '70' , '80' , '90' , '100' , '110' , '120' , '150' , '300' , 'Plus de 300'  ]
};

var regdateList = {
	'2':['1960' , '1961' , '1962' , '1963' , '1964' , '1965' , '1966' , '1967' , '1968' , '1969' , '1970' , '1971' , '1972' , '1973' , '1974' , '1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012' , '2013' , '2014' , '2015'  ],
'3':['1960' , '1961' , '1962' , '1963' , '1964' , '1965' , '1966' , '1967' , '1968' , '1969' , '1970' , '1971' , '1972' , '1973' , '1974' , '1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012' , '2013' , '2014' , '2015'  ],
'4':['1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012' , '2013' , '2014' , '2015'  ],
'5':['1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012' , '2013' , '2014' , '2015'  ]
};

var regdateListKey = {
	    '2':['1960' , '1961' , '1962' , '1963' , '1964' , '1965' , '1966' , '1967' , '1968' , '1969' , '1970' , '1971' , '1972' , '1973' , '1974' , '1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012' , '2013' , '2014' , '2015'  ],
'3':['1960' , '1961' , '1962' , '1963' , '1964' , '1965' , '1966' , '1967' , '1968' , '1969' , '1970' , '1971' , '1972' , '1973' , '1974' , '1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012' , '2013' , '2014' , '2015'  ],
'4':['1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012' , '2013' , '2014' , '2015'  ],
'5':['1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012' , '2013' , '2014' , '2015'  ]
};

var mileageList = {
	'0':['0' , '10 000' , '20 000' , '30 000' , '40 000' , '50 000' , '60 000' , '70 000' , '80 000' , '90 000' , '100 000' , '125 000' , '150 000' , '175 000' , '200 000' , '225 000' , '250 000' , 'Plus de 250 000'  ],
'1':['0' , '5 000' , '10 000' , '20 000' , '30 000' , '40 000' , '50 000' , '60 000' , '70 000' , '80 000' , '90 000' , '100 000' , '125 000' , '150 000' , '175 000' , '200 000' , '250 000' , 'Plus de 250 000'  ]
};


var mileageListKey = {
	    '0':['0' , '10000' , '20000' , '30000' , '40000' , '50000' , '60000' , '70000' , '80000' , '90000' , '100000' , '125000' , '150000' , '175000' , '200000' , '225000' , '250000' , '999999'  ],
'1':['0' , '5000' , '10000' , '20000' , '30000' , '40000' , '50000' , '60000' , '70000' , '80000' , '90000' , '100000' , '125000' , '150000' , '175000' , '200000' , '250000' , '999999'  ]
};

var typeList = {
'a':'Tous' ,
'b':'Echanges' ,
'h':'A louer' ,
'k':'Demandes' ,
's':'Offres' ,
'u':'Locations' 
};

var typeCpanel = {
'b':'Echanges' ,
'h':'Demandes' ,
'k':'Demandes' ,
's':'Offres' ,
'u':'Offres' 
};

var defaultTypes = {
'0':'s' ,
'1':'k' 
};

var default_max_extra_images = 2;
var default_price_extra_images = 0;

var categoryList = {
'71':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'33':{
	features:'jobcontract,jobduty,jobexp,jobfield,jobstudy,jobtime',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"Pour &eacute;viter toute discrimination, merci de bien r&eacute;diger vos offres d&apos;emploi au masculin et au f&eacute;minin ou indiquer que l&apos;emploi est propos&eacute; aux candidats des deux sexes (H/F).",
			'private':"Pour &eacute;viter toute discrimination, merci de bien r&eacute;diger vos offres d&apos;emploi au masculin et au f&eacute;minin ou indiquer que l&apos;emploi est propos&eacute; aux candidats des deux sexes (H/F).",
			'title':"Votre annonce sera refus&eacute;e si le titre ne d&eacute;crit pas pr&eacute;cis&eacute;ment le type de poste que vous recherchez.<br />",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'1':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'2':{
	features:'brand,mileagelist:0,model,pricelist:0,regdatelist:2',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Pensez &agrave; pr&eacute;ciser la marque, le mod&egrave;le et le type (berline, coup&eacute;,...) du v&eacute;hicule."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'3':{
	features:'mileagelist:1,pricelist:1,regdatelist:3',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Pensez &agrave; pr&eacute;ciser la marque et le mod&egrave;le de votre moto."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'4':{
	features:'pricelist:22,regdatelist:4',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Pensez &agrave; pr&eacute;ciser la marque et le mod&egrave;le du v&eacute;hicule."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'5':{
	features:'pricelist:3,regdatelist:5',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Pensez &agrave; pr&eacute;ciser la marque et le mod&egrave;le du v&eacute;hicule."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'6':{
	features:'pricelist:4',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'44':{
	features:'pricelist:4',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'50':{
	features:'pricelist:21',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'7':{
	features:'pricelist:5',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'51':{
	features:'pricelist:36',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'8':{
	features:'',
	show_choices:'',
	def_type:'a',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,u,k,h',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'9':{
	features:'dpe_warn,energy_rate,fai_included,ges,pricelist:2,real_estate_type,rooms,squarelist:0',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"Le DPE est obligatoire pour toute transaction immobili&egrave;re. Ne pas renseigner ces champs (classe &eacute;nergie, GES) vous expose &agrave; des sanctions.<br /> Pensez &agrave; indiquer le montant de votre r&eacute;mun&eacute;ration TTC. Si celle-ci est comprise dans le prix affich&eacute;, indiquez &laquo; frais d&apos;agence inclus &raquo;.",
			'private':"Le DPE est obligatoire pour toute transaction immobili&egrave;re. Ne pas renseigner ces champs (classe &eacute;nergie, GES) vous expose &agrave; des sanctions.",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'10':{
	features:'charges_included,dpe_warn,energy_rate,furnished,ges,mr,real_estate_type,rooms,squarelist:1',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'u,h',
	tips:{company:"Le DPE est obligatoire pour toute transaction immobili&egrave;re. Ne pas renseigner ces champs (classe &eacute;nergie, GES) vous expose &agrave; des sanctions.<br /> Pensez &agrave; indiquer le montant de votre r&eacute;mun&eacute;ration (ex: frais d&apos;agence = 5% du loyer hors charges).",
			'private':"Le DPE est obligatoire pour toute transaction immobili&egrave;re. Ne pas renseigner ces champs (classe &eacute;nergie, GES) vous expose &agrave; des sanctions.",
			'title':"Votre annonce sera refus&eacute;e si le titre ne d&eacute;crit pas pr&eacute;cis&eacute;ment le type de bien que vous proposez &agrave; la location.<br /><br />Ne pas mentionner &laquo; Loue &raquo; ou &laquo; Location &raquo; dans le titre.",
			'price': "",
			'all':""},
	caption: {price: "&euro;&nbsp;charges&nbsp;comprises",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'11':{
	features:'dpe_warn,energy_rate,ges,pricelist:23',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'u,h',
	tips:{company:"Le DPE est obligatoire pour toute transaction immobili&egrave;re. Ne pas renseigner ces champs (classe &eacute;nergie, GES) vous expose &agrave; des sanctions.<br /> Pensez &agrave; indiquer le montant de votre r&eacute;mun&eacute;ration (ex: frais d&apos;agence = 5% du loyer hors charges).",
			'private':"Le DPE est obligatoire pour toute transaction immobili&egrave;re. Ne pas renseigner ces champs (classe &eacute;nergie, GES) vous expose &agrave; des sanctions.",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'13':{
	features:'charges_included,fai_included,pricelist:7',
	show_choices:'1',
	def_type:'a',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,u,k',
	tips:{company:"Le DPE est obligatoire pour toute transaction immobili&egrave;re. Ne pas renseigner ces champs (classe &eacute;nergie, GES) vous expose &agrave; des sanctions.<br /> Pensez &agrave; indiquer le montant de votre r&eacute;mun&eacute;ration TTC. Si celle-ci est comprise dans le prix affich&eacute;, indiquez &laquo; frais d&apos;agence inclus &raquo;.",
			'private':"Le DPE est obligatoire pour toute transaction immobili&egrave;re. Ne pas renseigner ces champs (classe &eacute;nergie, GES) vous expose &agrave; des sanctions.",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'66':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'12':{
	features:'capacity,dpe_warn,energy_rate,ges,ldv,pricelist:24',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'u,h',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'67':{
	features:'capacity,dpe_warn,energy_rate,ges,ldv,pricelist:41',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'u,h',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'68':{
	features:'capacity,dpe_warn,energy_rate,ges,ldv,pricelist:24',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'u,h',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'69':{
	features:'dpe_warn,energy_rate,ges,ldv,pricelist:41',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'u,h',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'70':{
	features:'dpe_warn,energy_rate,ges,ldv,pricelist:41',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'u,h',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'14':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'15':{
	features:'org_warning:0,pricelist:8',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'43':{
	features:'org_warning:0,pricelist:9',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'16':{
	features:'org_warning:0,pricelist:25',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'17':{
	features:'org_warning:0,pricelist:26',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'18':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'19':{
	features:'pricelist:10',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Pensez &agrave; renseigner les dimensions de votre meuble: hauteur, longueur, profondeur."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'20':{
	features:'pricelist:11',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'45':{
	features:'pricelist:27',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'39':{
	features:'pricelist:28',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'46':{
	features:'pricelist:28',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'21':{
	features:'pricelist:12',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'52':{
	features:'pricelist:12',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'22':{
	features:'clothing_st,clothing_type,only_private,pricelist:13',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original.<br /><br />Pensez &agrave; renseigner les tailles de vos v&ecirc;tements dans le titre et dans le texte.<br /><br />"},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'53':{
	features:'only_private,pricelist:13,shoe_size,shoe_type',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'47':{
	features:'pricelist:13',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'42':{
	features:'pricelist:14',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'23':{
	features:'pricelist:29',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'54':{
	features:'baby_age,pricelist:13',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original.<br /><br />Pensez &agrave; renseigner les tailles de vos v&ecirc;tements dans le titre et dans le texte.<br /><br />"},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'24':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'25':{
	features:'org_warning:0,pricelist:15',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'26':{
	features:'org_warning:0,pricelist:15',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'27':{
	features:'pricelist:15',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'28':{
	features:'pricelist:16',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"Veuillez pr&eacute;ciser l&apos;esp&egrave;ce de l&apos;animal dans votre titre<br /> <br /> Votre annonce sera refus&eacute;e si le titre ne d&eacute;crit pas pr&eacute;cis&eacute;ment ce que vous proposez.",
			'price': "",
			'all':"Nous vous rappelons que le commerce des esp&egrave;ces, sauvages et/ou prot&eacute;g&eacute;es, list&eacute;es par :<br /> - la CITES<br /> - l&apos;arr&ecirc;t&eacute; du 30 juillet 2010<br /> est strictement r&eacute;glement&eacute;.<br /> <br /> Pour les esp&egrave;ces concern&eacute;es, vous vous engagez &agrave; d&eacute;tenir les documents requis pour la vente.<br /> <br />"},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'55':{
	features:'pricelist:38',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'29':{
	features:'pricelist:30',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'30':{
	features:'pricelist:17',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'40':{
	features:'pricelist:31',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'41':{
	features:'pricelist:32',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'48':{
	features:'org_warning:0,pricelist:19',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'56':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'57':{
	features:'pricelist:39',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'58':{
	features:'pricelist:39',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'59':{
	features:'pricelist:39',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'60':{
	features:'pricelist:33',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'32':{
	features:'pricelist:33',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'61':{
	features:'pricelist:33',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'62':{
	features:'pricelist:33',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'63':{
	features:'pricelist:33',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"Si votre annonce concerne la vente d&apos;un fonds de commerce ou d&apos;un bail commercial, choisissez la cat&eacute;gorie &laquo;Bureaux&nbsp;&amp;&nbsp;Commerces&raquo;.<br /><br />",
			'private':"Si votre annonce concerne la vente d&apos;un fonds de commerce ou d&apos;un bail commercial, choisissez la cat&eacute;gorie &laquo;Bureaux&nbsp;&amp;&nbsp;Commerces&raquo;.<br /><br />",
			'title':"Si votre annonce concerne la vente d&apos;un fonds de commerce ou d&apos;un bail commercial, choisissez la cat&eacute;gorie &laquo;Bureaux&nbsp;&amp;&nbsp;Commerces&raquo;.<br /><br />Votre annonce sera refus&eacute;e si le titre ne d&eacute;crit pas pr&eacute;cis&eacute;ment le produit que vous proposez.<br /><br />Ne pas mentionner &laquo; Vente &raquo; ou &laquo; Achat &raquo; dans le titre.",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'64':{
	features:'pricelist:33',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'31':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'34':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"Pensez &agrave; indiquer les mentions l&eacute;gales (raison sociale, adresse, taux horaires, frais de d&eacute;placement,...)",
			'private':"Pensez &agrave; indiquer le mode de r&egrave;glement : ch&egrave;que emploi service universel ou d&eacute;claration URSSAF.",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'35':{
	features:'pricelist:34',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "La revente d&apos;un billet plus cher que sa valeur faciale est ill&eacute;gale en France.",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'49':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'36':{
	features:'pricelist:20',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"Pensez &agrave; indiquer le mode de r&egrave;glement par ch&egrave;que emploi service universel.",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'65':{
	features:'pricelist:40',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"Nous vous invitons &agrave; renseigner un maximum d&apos;information dans le texte de votre annonce:<br /> un point de d&eacute;part pr&eacute;cis, les &eacute;tapes de votre parcours, pr&eacute;cisez si vous &ecirc;tes fumeur ou non-fumeur. Pr&eacute;cisez le volume des bagages que vous pouvez transporter.<br /><br /> Enfin, indiquez le nombre de place disponible.<br /><br />",
			'title':"Veuillez pr&eacute;ciser votre ville de d&eacute;part et votre ville d&apos;arriv&eacute;e suivie de la date du voyage.",
			'price': "",
			'all':""},
	caption: {price: "",
				title: "Exemple: Rennes / Paris le 9 juillet"},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'37':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'38':{
	features:'pricelist:35',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"",
			'private':"",
			'title':"",
			'price': "",
			'all':""},
	caption: {price: "",
				title: ""},
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
}

};

var org_warning = {

};

var region_warning = {

};

var address_warning = {

};

var zipcode_warning = {

};

var region_departments = Array();
region_departments[1] = Array(); 

        region_departments[1][67] = "Bas-Rhin"; 
region_departments[1][68] = "Haut-Rhin"; 

region_departments[2] = Array(); 

        region_departments[2][24] = "Dordogne"; 
region_departments[2][33] = "Gironde"; 
region_departments[2][40] = "Landes"; 
region_departments[2][47] = "Lot-et-Garonne"; 
region_departments[2][64] = "Pyrénées-Atlantiques"; 

region_departments[3] = Array(); 

        region_departments[3][3] = "Allier"; 
region_departments[3][15] = "Cantal"; 
region_departments[3][43] = "Haute-Loire"; 
region_departments[3][63] = "Puy-de-Dôme"; 

region_departments[4] = Array(); 

        region_departments[4][14] = "Calvados"; 
region_departments[4][50] = "Manche"; 
region_departments[4][61] = "Orne"; 

region_departments[5] = Array(); 

        region_departments[5][21] = "Côte-d'Or"; 
region_departments[5][58] = "Nièvre"; 
region_departments[5][71] = "Saône-et-Loire"; 
region_departments[5][89] = "Yonne"; 

region_departments[6] = Array(); 

        region_departments[6][22] = "Côtes-d'Armor"; 
region_departments[6][29] = "Finistère"; 
region_departments[6][35] = "Ille-et-Vilaine"; 
region_departments[6][56] = "Morbihan"; 

region_departments[7] = Array(); 

        region_departments[7][18] = "Cher"; 
region_departments[7][28] = "Eure-et-Loir"; 
region_departments[7][36] = "Indre"; 
region_departments[7][37] = "Indre-et-Loire"; 
region_departments[7][41] = "Loir-et-Cher"; 
region_departments[7][45] = "Loiret"; 

region_departments[8] = Array(); 

        region_departments[8][8] = "Ardennes"; 
region_departments[8][10] = "Aube"; 
region_departments[8][51] = "Marne"; 
region_departments[8][52] = "Haute-Marne"; 

region_departments[10] = Array(); 

        region_departments[10][25] = "Doubs"; 
region_departments[10][39] = "Jura"; 
region_departments[10][70] = "Haute-Saône"; 
region_departments[10][90] = "Territoire de Belfort"; 

region_departments[11] = Array(); 

        region_departments[11][27] = "Eure"; 
region_departments[11][76] = "Seine-Maritime"; 

region_departments[12] = Array(); 

        region_departments[12][75] = "Paris"; 
region_departments[12][77] = "Seine-et-Marne"; 
region_departments[12][78] = "Yvelines"; 
region_departments[12][91] = "Essonne"; 
region_departments[12][92] = "Hauts-de-Seine"; 
region_departments[12][93] = "Seine-Saint-Denis"; 
region_departments[12][94] = "Val-de-Marne"; 
region_departments[12][95] = "Val-d'Oise"; 

region_departments[13] = Array(); 

        region_departments[13][11] = "Aude"; 
region_departments[13][30] = "Gard"; 
region_departments[13][34] = "Hérault"; 
region_departments[13][48] = "Lozère"; 
region_departments[13][66] = "Pyrénées-Orientales"; 

region_departments[14] = Array(); 

        region_departments[14][19] = "Corrèze"; 
region_departments[14][23] = "Creuse"; 
region_departments[14][87] = "Haute-Vienne"; 

region_departments[15] = Array(); 

        region_departments[15][54] = "Meurthe-et-Moselle"; 
region_departments[15][55] = "Meuse"; 
region_departments[15][57] = "Moselle"; 
region_departments[15][88] = "Vosges"; 

region_departments[16] = Array(); 

        region_departments[16][9] = "Ariège"; 
region_departments[16][12] = "Aveyron"; 
region_departments[16][31] = "Haute-Garonne"; 
region_departments[16][32] = "Gers"; 
region_departments[16][46] = "Lot"; 
region_departments[16][65] = "Hautes-Pyrénées"; 
region_departments[16][81] = "Tarn"; 
region_departments[16][82] = "Tarn-et-Garonne"; 

region_departments[17] = Array(); 

        region_departments[17][59] = "Nord"; 
region_departments[17][62] = "Pas-de-Calais"; 

region_departments[18] = Array(); 

        region_departments[18][44] = "Loire-Atlantique"; 
region_departments[18][49] = "Maine-et-Loire"; 
region_departments[18][53] = "Mayenne"; 
region_departments[18][72] = "Sarthe"; 
region_departments[18][85] = "Vendée"; 

region_departments[19] = Array(); 

        region_departments[19][2] = "Aisne"; 
region_departments[19][60] = "Oise"; 
region_departments[19][80] = "Somme"; 

region_departments[20] = Array(); 

        region_departments[20][16] = "Charente"; 
region_departments[20][17] = "Charente-Maritime"; 
region_departments[20][79] = "Deux-Sèvres"; 
region_departments[20][86] = "Vienne"; 

region_departments[21] = Array(); 

        region_departments[21][4] = "Alpes-de-Haute-Provence"; 
region_departments[21][5] = "Hautes-Alpes"; 
region_departments[21][6] = "Alpes-Maritimes"; 
region_departments[21][13] = "Bouches-du-Rhône"; 
region_departments[21][83] = "Var"; 
region_departments[21][84] = "Vaucluse"; 

region_departments[22] = Array(); 

        region_departments[22][1] = "Ain"; 
region_departments[22][7] = "Ardèche"; 
region_departments[22][26] = "Drôme"; 
region_departments[22][38] = "Isère"; 
region_departments[22][42] = "Loire"; 
region_departments[22][69] = "Rhône"; 
region_departments[22][73] = "Savoie"; 
region_departments[22][74] = "Haute-Savoie"; 



var clothing_size_type = Array();
clothing_size_type[1] = Array(); 

	clothing_size_type[1][1] = "32"; 
clothing_size_type[1][2] = "34"; 
clothing_size_type[1][3] = "36"; 
clothing_size_type[1][4] = "38"; 
clothing_size_type[1][5] = "40"; 
clothing_size_type[1][6] = "42"; 
clothing_size_type[1][7] = "44"; 
clothing_size_type[1][8] = "46"; 
clothing_size_type[1][9] = "48"; 
clothing_size_type[1][10] = "50 et plus"; 

clothing_size_type[2] = Array(); 

	clothing_size_type[2][1] = "32"; 
clothing_size_type[2][2] = "34"; 
clothing_size_type[2][3] = "36"; 
clothing_size_type[2][4] = "38"; 
clothing_size_type[2][5] = "40"; 
clothing_size_type[2][6] = "42"; 
clothing_size_type[2][7] = "44"; 
clothing_size_type[2][8] = "46"; 
clothing_size_type[2][9] = "48"; 
clothing_size_type[2][10] = "50 et plus"; 

clothing_size_type[3] = Array(); 

	clothing_size_type[3][1] = "XS"; 
clothing_size_type[3][2] = "S"; 
clothing_size_type[3][3] = "M"; 
clothing_size_type[3][4] = "L"; 
clothing_size_type[3][5] = "XL"; 
clothing_size_type[3][6] = "XXL"; 
clothing_size_type[3][7] = "XXXL et plus"; 

clothing_size_type[4] = Array(); 

	clothing_size_type[4][1] = "3 ans"; 
clothing_size_type[4][2] = "4 ans"; 
clothing_size_type[4][3] = "5 ans"; 
clothing_size_type[4][4] = "6 ans"; 
clothing_size_type[4][5] = "8 ans"; 
clothing_size_type[4][6] = "10 ans"; 
clothing_size_type[4][7] = "12 ans"; 
clothing_size_type[4][8] = "14 ans"; 
clothing_size_type[4][9] = "16 ans"; 
clothing_size_type[4][10] = "18 ans"; 



var language_numbers = Array();
language_numbers[1] = 'un';
language_numbers[2] = 'deux';
language_numbers[3] = 'trois';
language_numbers[4] = 'quatre';
language_numbers[5] = 'cinq';


var features = {

'address':"Ville",
'animal_age':"Age",
'animal_chips':"Pucé",
'animal_id':"Identification",
'animal_identification':"Identification",
'animal_litter':"Animaux dans la portée",
'animal_race':"Appartenance à une race",
'animal_type':"Type d'animal",
'availability':"Tarifs et disponibilités",
'baby_age':"Taille",
'bedrooms':"Nb de chambres",
'boat_type':"Type de bateau.",
'brand':"Marque",
'capacity':"Capacité",
'charges_included':"Charges comprises",
'city':"Ville",
'clothing_st':"Taille",
'clothing_type':"Type",
'cubic_capacity':"Cylindrée",
'custom_ref':"Référence",
'dpe_warn':"",
'energy_rate':"Classe énergie",
'fai_included':"Frais d'agence inclus",
'fuel':"Carburant",
'furnished':"Meublé / Non meublé",
'gearbox':"Boîte de vitesse",
'ges':"GES",
'jobcontract':"Type de contrat",
'jobduty':"Fonction",
'jobexp':"Expérience",
'jobfield':"Secteur d'activité",
'jobstudy':"Niveau d'études",
'jobtime':"Travail à",
'ldv':"ldv",
'meeting_point':"Point de Rencontre",
'mileage':"Kilométrage",
'model':"Modèle",
'monthly_rate':"Loyer mensuel",
'monthly_rent':"Loyer mensuel",
'periodic_fee':"Frais mensuels",
'price_max':"Prix Max",
'price_min':"Prix / semaine",
'profession':"Profession",
'real_estate_type':"Type de bien",
'refund':"",
'regdate':"Année-modèle",
'rooms':"Pièces",
'shoe_size':"Pointure",
'shoe_type':"Type",
'siren':"Siren",
'size':"Surface",
'square':"Surface",
'swimming_pool':"Piscine",
'tattooed_animal':"Tatoué",
'title':"Titre",
'vacation_rental':"Infos locations de vacances",
'vaccinated_animal':"Vacciné",
'vehicle_type':"Type de véhicule",
'weekly_rate':"Prix / semaine",
'zipcode':"Code postal"
};

var category_params = {
'1': {
	
},
'2': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez une voiture)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez une voiture)"
		}
	}
},
'3': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez une moto)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez une moto)"
		}
	}
},
'4': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez une caravane)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez une caravane)"
		}
	}
},
'5': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un utilitaire)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un utilitaire)"
		}
	}
},
'6': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un équipement auto)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un équipement auto)"
		}
	}
},
'7': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien nautique)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien nautique)"
		}
	}
},
'8': {
	
},
'9': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien immobilier)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien immobilier)"
		}
	}
},
'10': {
	'h': {
		'include':[''],
		'labels': {
			'cpanel':"Demandes",
			'newad':"Demande (vous recherchez un bien à louer)"
		}
	},
	'u': {
		'include':[''],
		'labels': {
			'cpanel':"Offres",
			'newad':"Offre (vous proposez un bien en location)"
		}
	}
},
'11': {
	'h': {
		'include':[''],
		'labels': {
			'cpanel':"Demandes",
			'newad':"Demande (vous cherchez une colocation)"
		}
	},
	'u': {
		'include':[''],
		'labels': {
			'cpanel':"Offres",
			'newad':"Offre (vous proposez un appartement en colocation)"
		}
	}
},
'12': {
	'h': {
		'include':[''],
		'labels': {
			'cpanel':"Demandes",
			'newad':"Demande (vous recherchez une location de vacances ou un gîte)",
			'price_min':"Prix / semaine"
		}
	},
	'u': {
		'include':[''],
		'labels': {
			'cpanel':"Offres",
			'newad':"Offre (vous proposez une location de vacances ou un gîte)",
			'price_min':"Prix / semaine"
		}
	}
},
'13': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien à vendre ou à louer)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'cpanel':"Ventes",
			'iphone_search':"Ventes",
			'newad':"Vente (vous proposez un bien à vendre)",
			'type':"Ventes"
		}
	},
	'u': {
		'include':[''],
		'labels': {
			'cpanel':"Locations",
			'iphone_search':"Locations",
			'newad':"Location (vous proposez un bien à louer)"
		}
	}
},
'14': {
	
},
'15': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien informatique)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien informatique)"
		}
	}
},
'16': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'17': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'18': {
	
},
'19': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un meuble)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un meuble)"
		}
	}
},
'20': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez de l'électroménager)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez de l'électroménager)"
		}
	}
},
'21': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'22': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un vêtement)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un vêtement)"
		}
	}
},
'23': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez des objets pour bébé)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez des objets pour bébé)"
		}
	}
},
'24': {
	
},
'25': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'26': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'27': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un livre)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un livre)"
		}
	}
},
'28': {
	'k': {
		'include':[''],
		'labels': {
			'animal_litter':"Animaux dans<br/> la portée",
			'animal_race':"Appartenance<br/> à une race",
			'newad':"Demande (vous cherchez à acheter un animal)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'animal_litter':"Animaux dans<br/> la portée",
			'animal_race':"Appartenance<br/> à une race",
			'newad':"Offre (vous vendez un animal)"
		}
	}
},
'29': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'30': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'31': {
	
},
'32': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez des équipements industriels)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez des équipements industriels)"
		}
	}
},
'33': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (Offres de compétences : vous recherchez un emploi)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous proposez un poste à pourvoir)"
		}
	}
},
'34': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez une aide)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous proposez vos services)"
		}
	}
},
'35': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un billet)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous proposez un billet)"
		}
	}
},
'36': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un professeur de cours particuliers)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous proposez de donner des cours particuliers)"
		}
	}
},
'37': {
	'k': {
		'include':['']
	},
	's': {
		'include':['']
	}
},
'38': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un objet)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous proposez un objet)"
		}
	}
},
'39': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un objet de décoration)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un objet de décoration)"
		}
	}
},
'40': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'41': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'42': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'43': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez une console ou un jeu vidéo)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez une console ou un jeu vidéo)"
		}
	}
},
'44': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un équipement moto)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un équipement moto)"
		}
	}
},
'45': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un objet d'art de la table)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un objet d'art de la table)"
		}
	}
},
'46': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez du linge de maison)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez du linge de maison)"
		}
	}
},
'47': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un accessoire ou un bagage)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un accessoire ou un bagage)"
		}
	}
},
'48': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'49': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un événement)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous proposez un événement)"
		}
	}
},
'50': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un équipement caravaning)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un équipement caravaning)"
		}
	}
},
'51': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un équipement nautisme)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un équipement nautisme)"
		}
	}
},
'52': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'53': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez des chaussures)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez des chaussures)"
		}
	}
},
'54': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un vêtement pour bébé)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un vêtement pour bébé)"
		}
	}
},
'55': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un vélo)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un vélo)"
		}
	}
},
'56': {
	
},
'57': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez du matériel agricole)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez du matériel agricole)"
		}
	}
},
'58': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez du matériel de transport ou de manutention)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez du matériel de transport ou de manutention)"
		}
	}
},
'59': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez du matériel de BTP)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez du matériel de BTP)"
		}
	}
},
'60': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez de l'outillage ou du matériel 2nd-oeuvre)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez de l'outillage ou du matériel 2nd-oeuvre)"
		}
	}
},
'61': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez du matériel de restauration - hôtellerie)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez du matériel de restauration - hôtellerie)"
		}
	}
},
'62': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez des fournitures de bureau)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez des fournitures de bureau)"
		}
	}
},
'63': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez du matériel de commerces & marchés)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez du matériel de commerces & marchés)"
		}
	}
},
'64': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez du matériel médical)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez du matériel médical)"
		}
	}
},
'65': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un covoiturage)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous proposez un covoiturage)"
		}
	}
},
'66': {
	
},
'67': {
	'h': {
		'include':[''],
		'labels': {
			'cpanel':"Demandes",
			'newad':"Demande (vous recherchez une chambre d'hôtes)",
			'price_min':"Prix / nuit"
		}
	},
	'u': {
		'include':[''],
		'labels': {
			'cpanel':"Offres",
			'newad':"Offre (vous proposez une chambre d'hôtes)",
			'price_min':"Prix / nuit"
		}
	}
},
'68': {
	'h': {
		'include':[''],
		'labels': {
			'cpanel':"Demandes",
			'newad':"Demande (vous recherchez un bien à louer)",
			'price_min':"Prix / semaine"
		}
	},
	'u': {
		'include':[''],
		'labels': {
			'cpanel':"Offres",
			'newad':"Offre (vous proposez un bien en location)",
			'price_min':"Prix / semaine"
		}
	}
},
'69': {
	'h': {
		'include':[''],
		'labels': {
			'cpanel':"Demandes",
			'newad':"Demande (vous recherchez une chambre d'hôtel)",
			'price_min':"Prix / nuit"
		}
	},
	'u': {
		'include':[''],
		'labels': {
			'cpanel':"Offres",
			'newad':"Offre (vous proposez des chambres d'hôtel)",
			'price_min':"Prix / nuit"
		}
	}
},
'70': {
	'h': {
		'include':[''],
		'labels': {
			'cpanel':"Demandes",
			'newad':"Demande (vous recherchez un hébergement insolite)",
			'price_min':"Prix / nuit"
		}
	},
	'u': {
		'include':[''],
		'labels': {
			'cpanel':"Offres",
			'newad':"Offre (vous proposez un hébergement insolite)",
			'price_min':"Prix / nuit"
		}
	}
},
'71': {
	
}
};

var colors = {
'1':'#0000ff' ,
'2':'#ff0000' ,
'3':'#00ff00' ,
'4':'#ffff00' ,
'5':'#9900FF' ,
'6':'#FF00CC' ,
'7':'#FFA300' ,
'8':'#00FFFF' ,
'9':'#A3A3A3' ,
'10':'#FFFFFF' ,
'11':'#FFA5A5' ,
'12':'#000000' 
};

var settings = { 'features' : {"1": {"1": {"k": {"0": {"value": "no_price,city"},"1": {"value": "siren,no_price,city"}},"s": {"0": {"value": "city"},"1": {"value": "siren,city"}}},"2": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,custom_ref,city,address"}},"s": {"0": {"value": "regdate:2,model,mileage:0,gearbox,fuel,city,brand,address"},"1": {"value": "siren,regdate:2,model,mileage:0,gearbox,fuel,custom_ref,city,brand,address"}}},"3": {"k": {"0": {"value": "no_price,cubic_capacity,city,address"},"1": {"value": "siren,no_price,custom_ref,cubic_capacity,city,address"}},"s": {"0": {"value": "regdate:3,mileage:1,cubic_capacity,city,address"},"1": {"value": "siren,regdate:3,mileage:1,custom_ref,cubic_capacity,city,address"}}},"4": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,custom_ref,city,address"}},"s": {"0": {"value": "regdate:4,mileage:0,city,address"},"1": {"value": "siren,regdate:4,mileage:0,custom_ref,city,address"}}},"5": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,custom_ref,city,address"}},"s": {"0": {"value": "regdate:5,mileage:0,fuel,city,address"},"1": {"value": "siren,regdate:5,mileage:0,fuel,custom_ref,city,address"}}},"6": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"7": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,custom_ref,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,custom_ref,city,address"}}},"8": {"k": {"0": {"value": "no_price,city"},"1": {"value": "siren,no_price,city"}},"s": {"0": {"value": "city"},"1": {"value": "siren,city"}}},"9": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,custom_ref,city,address"}},"s": {"0": {"value": "square,rooms,real_estate_type,ges,energy_rate,dpe_warn,city,address"},"1": {"value": "square,siren,rooms,real_estate_type,ges,fai_included,energy_rate,dpe_warn,custom_ref,city,address"}}},"10": {"h": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,custom_ref,city,address"}},"u": {"0": {"value": "square,rooms,real_estate_type,monthly_rate,ges,furnished,energy_rate,dpe_warn,city,address"},"1": {"value": "square,siren,rooms,real_estate_type,monthly_rate,ges,furnished,energy_rate,dpe_warn,custom_ref,city,charges_included,address"}}},"11": {"h": {"0": {"value": "only_private,only_part_company,no_price,city,address"},"1": {"value": "only_private,only_part_company,no_price,city,address"}},"u": {"0": {"value": "square,rooms,only_private,only_part_company,monthly_rate,ges,energy_rate,dpe_warn,city,address"},"1": {"value": "square,rooms,only_private,only_part_company,monthly_rate,ges,energy_rate,dpe_warn,city,address"}}},"12": {"h": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,custom_ref,city,address"}},"u": {"0": {"value": "weekly_rate,vacation_rental,swimming_pool,price_min,price_max,no_price,ldv,city,capacity,bedrooms,availability,address"},"1": {"value": "weekly_rate,vacation_rental,swimming_pool,siren,price_min,price_max,no_price,ldv,custom_ref,city,capacity,bedrooms,availability,address"}}},"13": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,custom_ref,city,address"}},"s": {"0": {"value": "square,ges,energy_rate,dpe_warn,city,address"},"1": {"value": "square,siren,ges,fai_included,energy_rate,dpe_warn,custom_ref,city,address"}},"u": {"0": {"value": "square,ges,energy_rate,dpe_warn,city,address"},"1": {"value": "square,siren,ges,energy_rate,dpe_warn,custom_ref,city,charges_included,address"}}},"14": {"k": {"0": {"value": "no_price,city"},"1": {"value": "siren,no_price,city"}},"s": {"0": {"value": "city"},"1": {"value": "siren,city"}}},"15": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"16": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"17": {"k": {"0": {"value": "only_private,only_part_company,no_price,city,address"},"1": {"value": "only_private,only_part_company,no_price,city,address"}},"s": {"0": {"value": "only_private,only_part_company,city,address"},"1": {"value": "only_private,only_part_company,city,address"}}},"18": {"k": {"0": {"value": "only_private,only_part_company,no_price,city"},"1": {"value": "only_private,only_part_company,no_price,city"}},"s": {"0": {"value": "only_private,only_part_company,city"},"1": {"value": "only_private,only_part_company,city"}}},"19": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"20": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"21": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"22": {"k": {"0": {"value": "only_private,only_part_company,no_price,city,address"},"1": {"value": "only_private,only_part_company,no_price,city,address"}},"s": {"0": {"value": "only_private,only_part_company,clothing_type,clothing_st,city,address"},"1": {"value": "only_private,only_part_company,clothing_type,clothing_st,city,address"}}},"23": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"24": {"k": {"0": {"value": "only_private,only_part_company,no_price,city"},"1": {"value": "only_private,only_part_company,no_price,city"}},"s": {"0": {"value": "only_private,only_part_company,city"},"1": {"value": "only_private,only_part_company,city"}}},"25": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"26": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"27": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"28": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "vaccinated_animal,tattooed_animal,city,animal_type,animal_race,animal_litter,animal_identification,animal_chips,animal_age,address"},"1": {"value": "vaccinated_animal,tattooed_animal,siren,city,animal_type,animal_race,animal_litter,animal_identification,animal_chips,animal_age,address"}}},"29": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"30": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"31": {"k": {"0": {"value": "no_price,city"},"1": {"value": "siren,no_price,city"}},"s": {"0": {"value": "city"},"1": {"value": "siren,city"}}},"32": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"33": {"k": {"0": {"value": "part_and_pro,only_private,only_part_company,no_price,city,address"},"1": {"value": "part_and_pro,only_private,only_part_company,no_price,city,address"}},"s": {"0": {"value": "part_and_pro,only_company,jobtime,jobstudy,jobfield,jobexp,jobduty,jobcontract,city,address"},"1": {"value": "siren,part_and_pro,jobtime,jobstudy,jobfield,jobexp,jobduty,jobcontract,city,address"}}},"34": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"35": {"k": {"0": {"value": "only_private,only_part_company,no_price,city,address"},"1": {"value": "only_private,only_part_company,no_price,city,address"}},"s": {"0": {"value": "only_private,only_part_company,city,address"},"1": {"value": "only_private,only_part_company,city,address"}}},"36": {"k": {"0": {"value": "only_private,only_part_company,no_price,city,address"},"1": {"value": "only_private,only_part_company,no_price,city,address"}},"s": {"0": {"value": "only_private,only_part_company,city,address"},"1": {"value": "only_private,only_part_company,city,address"}}},"37": {"k": {"0": {"value": "only_private,only_part_company,no_price,city,address"},"1": {"value": "only_private,only_part_company,no_price,city,address"}},"s": {"0": {"value": "only_private,only_part_company,city,address"},"1": {"value": "only_private,only_part_company,city,address"}}},"38": {"k": {"0": {"value": "only_private,only_part_company,no_price,city,address"},"1": {"value": "only_private,only_part_company,no_price,city,address"}},"s": {"0": {"value": "only_private,only_part_company,city,address"},"1": {"value": "only_private,only_part_company,city,address"}}},"39": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"40": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"41": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"42": {"k": {"0": {"value": "only_private,only_part_company,no_price,city,address"},"1": {"value": "only_private,only_part_company,no_price,city,address"}},"s": {"0": {"value": "only_private,only_part_company,city,address"},"1": {"value": "only_private,only_part_company,city,address"}}},"43": {"k": {"0": {"value": "only_private,only_part_company,no_price,city,address"},"1": {"value": "only_private,only_part_company,no_price,city,address"}},"s": {"0": {"value": "only_private,only_part_company,city,address"},"1": {"value": "only_private,only_part_company,city,address"}}},"44": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"45": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"46": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"47": {"k": {"0": {"value": "only_private,only_part_company,no_price,city"},"1": {"value": "only_private,only_part_company,no_price,city"}},"s": {"0": {"value": "only_private,only_part_company,city,address"},"1": {"value": "only_private,only_part_company,city,address"}}},"48": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"49": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"50": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"51": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"52": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"53": {"k": {"0": {"value": "only_private,only_part_company,no_price,city,address"},"1": {"value": "siren,only_private,only_part_company,no_price,city,address"}},"s": {"0": {"value": "shoe_type,shoe_size,only_private,only_part_company,city,address"},"1": {"value": "siren,shoe_type,shoe_size,only_private,only_part_company,city,address"}}},"54": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,baby_age,address"},"1": {"value": "siren,city,baby_age,address"}}},"55": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"56": {"k": {"0": {"value": "no_price,city"},"1": {"value": "siren,no_price,city"}},"s": {"0": {"value": "city"},"1": {"value": "siren,city"}}},"57": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"58": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"59": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"60": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"61": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"62": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"63": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"64": {"k": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,city,address"}},"s": {"0": {"value": "city,address"},"1": {"value": "siren,city,address"}}},"65": {"k": {"0": {"value": "only_private,no_price,city,address"},"1": {"value": "only_private,no_price,city,address"}},"s": {"0": {"value": "only_private,city,address"},"1": {"value": "only_private,city,address"}}},"66": {"k": {"0": {"value": "no_price,city"},"1": {"value": "siren,no_price,city"}},"s": {"0": {"value": "city"},"1": {"value": "siren,city"}}},"67": {"h": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,custom_ref,city,address"}},"u": {"0": {"value": "weekly_rate,vacation_rental,swimming_pool,price_min,price_max,no_price,ldv,city,capacity,bedrooms,availability,address"},"1": {"value": "weekly_rate,vacation_rental,swimming_pool,siren,price_min,price_max,no_price,ldv,custom_ref,city,capacity,bedrooms,availability,address"}}},"68": {"h": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,custom_ref,city,address"}},"u": {"0": {"value": "weekly_rate,vacation_rental,swimming_pool,price_min,price_max,no_price,ldv,city,capacity,bedrooms,availability,address"},"1": {"value": "weekly_rate,vacation_rental,swimming_pool,siren,price_min,price_max,no_price,ldv,custom_ref,city,capacity,bedrooms,availability,address"}}},"69": {"h": {"0": {"value": "no_price,city,address"},"1": {"value": "siren,no_price,custom_ref,city,address"}},"u": {"0": {"value": "weekly_rate,vacation_rental,swimming_pool,price_min,price_max,no_price,ldv,city,availability,address"},"1": {"value": "weekly_rate,vacation_rental,swimming_pool,siren,price_min,price_max,no_price,ldv,custom_ref,city,availability,address"}}},"70": {"h": {"0": {"value": "no_price,city"},"1": {"value": "siren,no_price,custom_ref,city"}},"u": {"0": {"value": "weekly_rate,vacation_rental,swimming_pool,price_min,price_max,no_price,ldv,city,availability,address"},"1": {"value": "weekly_rate,vacation_rental,swimming_pool,siren,price_min,price_max,no_price,ldv,custom_ref,city,availability,address"}}},"71": {"k": {"0": {"value": "no_price,city"},"1": {"value": "siren,no_price,city"}},"s": {"0": {"value": "city"},"1": {"value": "siren,city"}}},"keys": {"1": "category","2": "type","3": "company_ad"}},"separate_by_comma": "1"},
				 'search_box' : {"1": {"1": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"2": {"k": {"value": "zipcode"},"s": {"value": "gearbox,fuel,zipcode,regdatelist:2,pricelist:0,mileagelist:0"}},"3": {"k": {"value": "zipcode"},"s": {"value": "zipcode,regdatelist:3,pricelist:1,mileagelist:1,cubic_capacity"}},"4": {"k": {"value": "zipcode"},"s": {"value": "mileagelist:0,regdatelist:4,pricelist:22,zipcode"}},"5": {"k": {"value": "zipcode"},"s": {"value": "mileagelist:0,regdatelist:5,pricelist:3,fuel,zipcode"}},"6": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:4"}},"7": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:5"}},"8": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"9": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:2,real_estate_type,rooms,squarelist:0"}},"10": {"k": {"value": "zipcode"},"s": {"value": "furnished,zipcode,real_estate_type,rooms,monthly_rate,squarelist:1"},"u": {"value": "furnished,zipcode,real_estate_type,rooms,monthly_rate,squarelist:1"}},"11": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:23"},"u": {"value": "zipcode,pricelist:23"}},"12": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:24,bedrooms,availability,swimming_pool,capacity"},"u": {"value": "zipcode,pricelist:24,bedrooms,availability,swimming_pool,capacity"}},"13": {"a": {"value": "zipcode,pricelist:7"},"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:7"},"u": {"value": "zipcode,pricelist:7"}},"14": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"15": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:8"}},"16": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:25"}},"17": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:26"}},"18": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"19": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:10"}},"20": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:11"}},"21": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:12"}},"22": {"k": {"value": "zipcode"},"s": {"value": "clothing_type,pricelist:13,zipcode"}},"23": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:29"}},"24": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"25": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:15"}},"26": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:15"}},"27": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:15"}},"28": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:16,animal_type"}},"29": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:30"}},"30": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:17"}},"31": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"32": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:33"}},"33": {"k": {"value": "zipcode"},"s": {"value": "zipcode,jobtime,jobcontract,jobexp,jobfield,jobstudy,jobduty"}},"34": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"35": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:34"}},"36": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:20"}},"37": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"38": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:35"}},"39": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:28"}},"40": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:31"}},"41": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:32"}},"42": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:14"}},"43": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:9"}},"44": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:4"}},"45": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:27"}},"46": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:28"}},"47": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:13"}},"48": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:19"}},"49": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"50": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:21"}},"51": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:36"}},"52": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:12"}},"53": {"k": {"value": "zipcode"},"s": {"value": "zipcode,shoe_size,pricelist:13,shoe_type"}},"54": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:13,baby_age"}},"55": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:38"}},"56": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"57": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:39"}},"58": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:39"}},"59": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:39"}},"60": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:33"}},"61": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:33"}},"62": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:33"}},"63": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:33"}},"64": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:33"}},"65": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:40"}},"66": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"67": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:41,bedrooms,availability,swimming_pool,capacity"},"u": {"value": "zipcode,pricelist:41,bedrooms,availability,swimming_pool,capacity"}},"68": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:24,bedrooms,availability,swimming_pool,capacity"},"u": {"value": "zipcode,pricelist:24,bedrooms,availability,swimming_pool,capacity"}},"69": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:41,availability,swimming_pool"},"u": {"value": "zipcode,pricelist:41,availability,swimming_pool"}},"70": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:41,availability,swimming_pool"},"u": {"value": "zipcode,pricelist:41,availability,swimming_pool"}},"71": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"keys": {"1": "search_category","2": "search_type"}},"2": {"default": "zipcode"},"separate_by_comma": "1"},
				 'support' : {"1": {"3": {"value": "title,title_not_in_subject"},"keys": {"1": "subject"}},"separate_by_comma": "1"},
				 'store_settings' : {"1": {"2": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:490,urgent_with_tax:700,sub_toplist_with_tax:2950,gallery_with_tax:1750,top_list_with_tax:350,gallery30_with_tax:4000,daily_bump_with_tax:2450,daily_bump30_with_tax:7500,photosup_with_tax:550,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:792,prolong_price_with_tax:0,edit_with_tax:456,urgent_with_tax:504,sub_toplist_with_tax:2508,gallery_with_tax:1704,top_list_with_tax:348,gallery30_with_tax:4512,daily_bump_with_tax:2508,daily_bump30_with_tax:8028,photosup_with_tax:600,ldv_with_tax:-1"}},"3": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:350,urgent_with_tax:400,sub_toplist_with_tax:2000,gallery_with_tax:1000,top_list_with_tax:250,gallery30_with_tax:3000,daily_bump_with_tax:2000,daily_bump30_with_tax:6500,photosup_with_tax:500,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:396,prolong_price_with_tax:0,edit_with_tax:348,urgent_with_tax:402,sub_toplist_with_tax:2004,gallery_with_tax:1008,top_list_with_tax:252,gallery30_with_tax:3012,daily_bump_with_tax:2004,daily_bump30_with_tax:7524,photosup_with_tax:504,ldv_with_tax:-1"}},"4": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:400,urgent_with_tax:600,sub_toplist_with_tax:2200,gallery_with_tax:1500,top_list_with_tax:300,gallery30_with_tax:4500,daily_bump_with_tax:2250,daily_bump30_with_tax:9000,photosup_with_tax:1000,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:792,prolong_price_with_tax:0,edit_with_tax:402,urgent_with_tax:702,sub_toplist_with_tax:2508,gallery_with_tax:1506,top_list_with_tax:300,gallery30_with_tax:4512,daily_bump_with_tax:2256,daily_bump30_with_tax:9030,photosup_with_tax:1008,ldv_with_tax:-1"}},"5": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:400,urgent_with_tax:500,sub_toplist_with_tax:2200,gallery_with_tax:1500,top_list_with_tax:300,gallery30_with_tax:4500,daily_bump_with_tax:2250,daily_bump30_with_tax:9000,photosup_with_tax:500,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:792,prolong_price_with_tax:0,edit_with_tax:456,urgent_with_tax:504,sub_toplist_with_tax:2508,gallery_with_tax:1704,top_list_with_tax:348,gallery30_with_tax:4512,daily_bump_with_tax:2508,daily_bump30_with_tax:8028,photosup_with_tax:600,ldv_with_tax:-1"}},"6": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:800,gallery_with_tax:1000,top_list_with_tax:150,gallery30_with_tax:2500,daily_bump_with_tax:1000,daily_bump30_with_tax:3500,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:180,prolong_price_with_tax:0,edit_with_tax:168,urgent_with_tax:402,sub_toplist_with_tax:1008,gallery_with_tax:1200,top_list_with_tax:150,gallery30_with_tax:2508,daily_bump_with_tax:1200,daily_bump30_with_tax:3516,photosup_with_tax:300,ldv_with_tax:-1"}},"7": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:400,urgent_with_tax:600,sub_toplist_with_tax:2200,gallery_with_tax:1500,top_list_with_tax:300,gallery30_with_tax:4500,daily_bump_with_tax:2250,daily_bump30_with_tax:9000,photosup_with_tax:1000,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:396,prolong_price_with_tax:0,edit_with_tax:348,urgent_with_tax:702,sub_toplist_with_tax:2508,gallery_with_tax:1506,top_list_with_tax:300,gallery30_with_tax:4512,daily_bump_with_tax:2256,daily_bump30_with_tax:9030,photosup_with_tax:1008,ldv_with_tax:-1"}},"9": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:500,urgent_with_tax:500,sub_toplist_with_tax:3000,gallery_with_tax:1500,top_list_with_tax:400,gallery30_with_tax:5000,daily_bump_with_tax:3000,daily_bump30_with_tax:9900,photosup_with_tax:800,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:1140,prolong_price_with_tax:0,edit_with_tax:504,urgent_with_tax:504,sub_toplist_with_tax:3012,gallery_with_tax:2004,top_list_with_tax:402,gallery30_with_tax:5016,daily_bump_with_tax:3012,daily_bump30_with_tax:10032,photosup_with_tax:804,ldv_with_tax:-1"}},"10": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:400,urgent_with_tax:300,sub_toplist_with_tax:2500,gallery_with_tax:1500,top_list_with_tax:300,gallery30_with_tax:3000,daily_bump_with_tax:2500,daily_bump30_with_tax:9000,photosup_with_tax:700,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:1140,prolong_price_with_tax:0,edit_with_tax:402,urgent_with_tax:300,sub_toplist_with_tax:2508,gallery_with_tax:1506,top_list_with_tax:300,gallery30_with_tax:3012,daily_bump_with_tax:2508,daily_bump30_with_tax:9030,photosup_with_tax:702,ldv_with_tax:-1"}},"11": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:350,urgent_with_tax:400,sub_toplist_with_tax:2000,gallery_with_tax:1000,top_list_with_tax:250,gallery30_with_tax:3000,daily_bump_with_tax:2000,daily_bump30_with_tax:6500,photosup_with_tax:500,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:0,urgent_with_tax:0,sub_toplist_with_tax:0,gallery_with_tax:0,top_list_with_tax:0,gallery30_with_tax:0,daily_bump_with_tax:0,daily_bump30_with_tax:0,photosup_with_tax:0,ldv_with_tax:-1"}},"12": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:400,urgent_with_tax:300,sub_toplist_with_tax:2500,gallery_with_tax:1500,top_list_with_tax:300,gallery30_with_tax:3500,daily_bump_with_tax:2500,daily_bump30_with_tax:9000,photosup_with_tax:700,ldv_with_tax:12000"},"1": {"value": "enabled:1,newad_price_with_tax:1140,prolong_price_with_tax:0,edit_with_tax:402,urgent_with_tax:300,sub_toplist_with_tax:2508,gallery_with_tax:1506,top_list_with_tax:300,gallery30_with_tax:3516,daily_bump_with_tax:2208,daily_bump30_with_tax:7524,photosup_with_tax:702,ldv_with_tax:14100"}},"13": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:400,urgent_with_tax:500,sub_toplist_with_tax:3500,gallery_with_tax:3000,top_list_with_tax:300,gallery30_with_tax:8000,daily_bump_with_tax:3000,daily_bump30_with_tax:8000,photosup_with_tax:700,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:1140,prolong_price_with_tax:0,edit_with_tax:402,urgent_with_tax:504,sub_toplist_with_tax:4020,gallery_with_tax:3012,top_list_with_tax:300,gallery30_with_tax:8028,daily_bump_with_tax:3000,daily_bump30_with_tax:8028,photosup_with_tax:702,ldv_with_tax:-1"}},"15": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:1000,gallery_with_tax:800,top_list_with_tax:150,gallery30_with_tax:2500,daily_bump_with_tax:1200,daily_bump30_with_tax:3500,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:402,sub_toplist_with_tax:1008,gallery_with_tax:1200,top_list_with_tax:204,gallery30_with_tax:2808,daily_bump_with_tax:1500,daily_bump30_with_tax:3516,photosup_with_tax:402,ldv_with_tax:-1"}},"16": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:800,gallery_with_tax:900,top_list_with_tax:150,gallery30_with_tax:2200,daily_bump_with_tax:1200,daily_bump30_with_tax:3000,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:402,sub_toplist_with_tax:804,gallery_with_tax:1200,top_list_with_tax:204,gallery30_with_tax:2808,daily_bump_with_tax:1500,daily_bump30_with_tax:3516,photosup_with_tax:402,ldv_with_tax:-1"}},"17": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:1000,gallery_with_tax:800,top_list_with_tax:150,gallery30_with_tax:2500,daily_bump_with_tax:1200,daily_bump30_with_tax:3500,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:0,urgent_with_tax:0,sub_toplist_with_tax:0,gallery_with_tax:0,top_list_with_tax:0,gallery30_with_tax:0,daily_bump_with_tax:0,daily_bump30_with_tax:0,photosup_with_tax:0,ldv_with_tax:-1"}},"19": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:800,gallery_with_tax:800,top_list_with_tax:150,gallery30_with_tax:2400,daily_bump_with_tax:1000,daily_bump30_with_tax:2500,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:402,sub_toplist_with_tax:804,gallery_with_tax:804,top_list_with_tax:204,gallery30_with_tax:2412,daily_bump_with_tax:1200,daily_bump30_with_tax:2808,photosup_with_tax:402,ldv_with_tax:-1"}},"20": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:1000,gallery_with_tax:800,top_list_with_tax:150,gallery30_with_tax:2500,daily_bump_with_tax:1200,daily_bump30_with_tax:3500,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:402,sub_toplist_with_tax:1008,gallery_with_tax:1200,top_list_with_tax:204,gallery30_with_tax:3012,daily_bump_with_tax:1200,daily_bump30_with_tax:3516,photosup_with_tax:402,ldv_with_tax:-1"}},"21": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:800,gallery_with_tax:1000,top_list_with_tax:150,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:3000,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:402,sub_toplist_with_tax:804,gallery_with_tax:1008,top_list_with_tax:204,gallery30_with_tax:3012,daily_bump_with_tax:1404,daily_bump30_with_tax:3516,photosup_with_tax:402,ldv_with_tax:-1"}},"22": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:150,urgent_with_tax:200,sub_toplist_with_tax:700,gallery_with_tax:600,top_list_with_tax:100,gallery30_with_tax:2000,daily_bump_with_tax:600,daily_bump30_with_tax:2000,photosup_with_tax:250,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:0,urgent_with_tax:0,sub_toplist_with_tax:0,gallery_with_tax:0,top_list_with_tax:0,gallery30_with_tax:0,daily_bump_with_tax:0,daily_bump30_with_tax:0,photosup_with_tax:0,ldv_with_tax:-1"}},"23": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:200,sub_toplist_with_tax:700,gallery_with_tax:700,top_list_with_tax:100,gallery30_with_tax:2200,daily_bump_with_tax:500,daily_bump30_with_tax:1800,photosup_with_tax:300,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:96,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:204,sub_toplist_with_tax:702,gallery_with_tax:702,top_list_with_tax:102,gallery30_with_tax:2208,daily_bump_with_tax:504,daily_bump30_with_tax:1806,photosup_with_tax:300,ldv_with_tax:-1"}},"25": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:250,sub_toplist_with_tax:700,gallery_with_tax:700,top_list_with_tax:100,gallery30_with_tax:2500,daily_bump_with_tax:500,daily_bump30_with_tax:1800,photosup_with_tax:300,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:48,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:252,sub_toplist_with_tax:702,gallery_with_tax:702,top_list_with_tax:102,gallery30_with_tax:2508,daily_bump_with_tax:504,daily_bump30_with_tax:1806,photosup_with_tax:300,ldv_with_tax:-1"}},"26": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:250,sub_toplist_with_tax:700,gallery_with_tax:700,top_list_with_tax:100,gallery30_with_tax:2500,daily_bump_with_tax:500,daily_bump30_with_tax:1800,photosup_with_tax:300,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:48,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:252,sub_toplist_with_tax:702,gallery_with_tax:702,top_list_with_tax:102,gallery30_with_tax:2508,daily_bump_with_tax:504,daily_bump30_with_tax:1806,photosup_with_tax:300,ldv_with_tax:-1"}},"27": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:250,sub_toplist_with_tax:700,gallery_with_tax:700,top_list_with_tax:100,gallery30_with_tax:2500,daily_bump_with_tax:500,daily_bump30_with_tax:1800,photosup_with_tax:300,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:96,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:252,sub_toplist_with_tax:702,gallery_with_tax:702,top_list_with_tax:102,gallery30_with_tax:2508,daily_bump_with_tax:504,daily_bump30_with_tax:1806,photosup_with_tax:300,ldv_with_tax:-1"}},"28": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:800,gallery_with_tax:1000,top_list_with_tax:150,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:3500,photosup_with_tax:500,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:402,sub_toplist_with_tax:1008,gallery_with_tax:1008,top_list_with_tax:204,gallery30_with_tax:3012,daily_bump_with_tax:1404,daily_bump30_with_tax:3516,photosup_with_tax:504,ldv_with_tax:-1"}},"29": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:1000,gallery_with_tax:800,top_list_with_tax:150,gallery30_with_tax:2500,daily_bump_with_tax:1200,daily_bump30_with_tax:3500,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:402,sub_toplist_with_tax:1200,gallery_with_tax:1200,top_list_with_tax:204,gallery30_with_tax:3012,daily_bump_with_tax:1200,daily_bump30_with_tax:3516,photosup_with_tax:402,ldv_with_tax:-1"}},"30": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:400,sub_toplist_with_tax:1000,gallery_with_tax:800,top_list_with_tax:200,gallery30_with_tax:2500,daily_bump_with_tax:1200,daily_bump30_with_tax:3000,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:402,sub_toplist_with_tax:1008,gallery_with_tax:804,top_list_with_tax:204,gallery30_with_tax:2508,daily_bump_with_tax:1008,daily_bump30_with_tax:3012,photosup_with_tax:402,ldv_with_tax:-1"}},"32": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:350,urgent_with_tax:400,sub_toplist_with_tax:2200,gallery_with_tax:1800,top_list_with_tax:250,gallery30_with_tax:4500,daily_bump_with_tax:2500,daily_bump30_with_tax:7500,photosup_with_tax:500,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:600,prolong_price_with_tax:0,edit_with_tax:354,urgent_with_tax:402,sub_toplist_with_tax:2208,gallery_with_tax:1812,top_list_with_tax:252,gallery30_with_tax:4512,daily_bump_with_tax:2508,daily_bump30_with_tax:7524,photosup_with_tax:504,ldv_with_tax:-1"}},"33": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:500,urgent_with_tax:600,sub_toplist_with_tax:3000,gallery_with_tax:0,top_list_with_tax:400,gallery30_with_tax:0,daily_bump_with_tax:3500,daily_bump30_with_tax:11000,photosup_with_tax:600,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:504,urgent_with_tax:600,sub_toplist_with_tax:3012,gallery_with_tax:0,top_list_with_tax:402,gallery30_with_tax:0,daily_bump_with_tax:3516,daily_bump30_with_tax:11040,photosup_with_tax:600,ldv_with_tax:-1"}},"34": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:350,urgent_with_tax:400,sub_toplist_with_tax:2000,gallery_with_tax:0,top_list_with_tax:300,gallery30_with_tax:0,daily_bump_with_tax:2200,daily_bump30_with_tax:7000,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:354,urgent_with_tax:402,sub_toplist_with_tax:2004,gallery_with_tax:0,top_list_with_tax:300,gallery30_with_tax:0,daily_bump_with_tax:2208,daily_bump30_with_tax:7026,photosup_with_tax:402,ldv_with_tax:-1"}},"35": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:400,sub_toplist_with_tax:800,gallery_with_tax:0,top_list_with_tax:200,gallery30_with_tax:0,daily_bump_with_tax:1200,daily_bump30_with_tax:3500,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:0,urgent_with_tax:0,sub_toplist_with_tax:0,gallery_with_tax:0,top_list_with_tax:0,gallery30_with_tax:0,daily_bump_with_tax:0,daily_bump30_with_tax:0,photosup_with_tax:0,ldv_with_tax:-1"}},"36": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:350,urgent_with_tax:400,sub_toplist_with_tax:1800,gallery_with_tax:0,top_list_with_tax:250,gallery30_with_tax:0,daily_bump_with_tax:2200,daily_bump30_with_tax:8500,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:0,urgent_with_tax:0,sub_toplist_with_tax:0,gallery_with_tax:0,top_list_with_tax:0,gallery30_with_tax:0,daily_bump_with_tax:0,daily_bump30_with_tax:0,photosup_with_tax:0,ldv_with_tax:-1"}},"38": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:800,top_list_with_tax:150,gallery30_with_tax:2500,daily_bump_with_tax:900,daily_bump30_with_tax:3000,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:0,urgent_with_tax:0,sub_toplist_with_tax:0,gallery_with_tax:0,top_list_with_tax:0,gallery30_with_tax:0,daily_bump_with_tax:0,daily_bump30_with_tax:0,photosup_with_tax:0,ldv_with_tax:-1"}},"39": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:800,top_list_with_tax:150,gallery30_with_tax:2500,daily_bump_with_tax:900,daily_bump30_with_tax:3000,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:96,prolong_price_with_tax:0,edit_with_tax:252,urgent_with_tax:402,sub_toplist_with_tax:600,gallery_with_tax:804,top_list_with_tax:150,gallery30_with_tax:2508,daily_bump_with_tax:900,daily_bump30_with_tax:3012,photosup_with_tax:402,ldv_with_tax:-1"}},"40": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:150,urgent_with_tax:200,sub_toplist_with_tax:700,gallery_with_tax:600,top_list_with_tax:100,gallery30_with_tax:2000,daily_bump_with_tax:600,daily_bump30_with_tax:2000,photosup_with_tax:250,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:96,prolong_price_with_tax:0,edit_with_tax:252,urgent_with_tax:402,sub_toplist_with_tax:600,gallery_with_tax:804,top_list_with_tax:150,gallery30_with_tax:2508,daily_bump_with_tax:900,daily_bump30_with_tax:3012,photosup_with_tax:402,ldv_with_tax:-1"}},"41": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:150,urgent_with_tax:200,sub_toplist_with_tax:700,gallery_with_tax:600,top_list_with_tax:100,gallery30_with_tax:2000,daily_bump_with_tax:600,daily_bump30_with_tax:2000,photosup_with_tax:250,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:96,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:102,sub_toplist_with_tax:702,gallery_with_tax:906,top_list_with_tax:102,gallery30_with_tax:3012,daily_bump_with_tax:804,daily_bump30_with_tax:2508,photosup_with_tax:300,ldv_with_tax:-1"}},"42": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:250,sub_toplist_with_tax:700,gallery_with_tax:700,top_list_with_tax:100,gallery30_with_tax:2500,daily_bump_with_tax:600,daily_bump30_with_tax:2200,photosup_with_tax:300,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:0,urgent_with_tax:0,sub_toplist_with_tax:0,gallery_with_tax:0,top_list_with_tax:0,gallery30_with_tax:0,daily_bump_with_tax:0,daily_bump30_with_tax:0,photosup_with_tax:0,ldv_with_tax:-1"}},"43": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:250,sub_toplist_with_tax:700,gallery_with_tax:800,top_list_with_tax:100,gallery30_with_tax:2800,daily_bump_with_tax:700,daily_bump30_with_tax:2500,photosup_with_tax:300,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:0,urgent_with_tax:0,sub_toplist_with_tax:0,gallery_with_tax:0,top_list_with_tax:0,gallery30_with_tax:0,daily_bump_with_tax:0,daily_bump30_with_tax:0,photosup_with_tax:0,ldv_with_tax:-1"}},"44": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:800,gallery_with_tax:1000,top_list_with_tax:150,gallery30_with_tax:2500,daily_bump_with_tax:1000,daily_bump30_with_tax:3500,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:180,prolong_price_with_tax:0,edit_with_tax:168,urgent_with_tax:402,sub_toplist_with_tax:1008,gallery_with_tax:1200,top_list_with_tax:150,gallery30_with_tax:2508,daily_bump_with_tax:1200,daily_bump30_with_tax:3516,photosup_with_tax:300,ldv_with_tax:-1"}},"45": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:100,sub_toplist_with_tax:700,gallery_with_tax:700,top_list_with_tax:100,gallery30_with_tax:2500,daily_bump_with_tax:500,daily_bump30_with_tax:1800,photosup_with_tax:300,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:96,prolong_price_with_tax:0,edit_with_tax:204,urgent_with_tax:102,sub_toplist_with_tax:702,gallery_with_tax:702,top_list_with_tax:102,gallery30_with_tax:2508,daily_bump_with_tax:504,daily_bump30_with_tax:1800,photosup_with_tax:300,ldv_with_tax:-1"}},"46": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:200,sub_toplist_with_tax:700,gallery_with_tax:900,top_list_with_tax:100,gallery30_with_tax:3000,daily_bump_with_tax:800,daily_bump30_with_tax:2500,photosup_with_tax:300,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:48,prolong_price_with_tax:0,edit_with_tax:204,urgent_with_tax:204,sub_toplist_with_tax:702,gallery_with_tax:906,top_list_with_tax:102,gallery30_with_tax:3012,daily_bump_with_tax:804,daily_bump30_with_tax:2508,photosup_with_tax:300,ldv_with_tax:-1"}},"47": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:200,sub_toplist_with_tax:700,gallery_with_tax:700,top_list_with_tax:100,gallery30_with_tax:2500,daily_bump_with_tax:500,daily_bump30_with_tax:1800,photosup_with_tax:300,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:0,urgent_with_tax:0,sub_toplist_with_tax:0,gallery_with_tax:0,top_list_with_tax:0,gallery30_with_tax:0,daily_bump_with_tax:0,daily_bump30_with_tax:0,photosup_with_tax:0,ldv_with_tax:-1"}},"48": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:1000,gallery_with_tax:1000,top_list_with_tax:150,gallery30_with_tax:2500,daily_bump_with_tax:1200,daily_bump30_with_tax:3000,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:96,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:402,sub_toplist_with_tax:1008,gallery_with_tax:1008,top_list_with_tax:204,gallery30_with_tax:2508,daily_bump_with_tax:1200,daily_bump30_with_tax:3012,photosup_with_tax:402,ldv_with_tax:-1"}},"49": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:350,urgent_with_tax:400,sub_toplist_with_tax:2000,gallery_with_tax:0,top_list_with_tax:250,gallery30_with_tax:0,daily_bump_with_tax:2400,daily_bump30_with_tax:6500,photosup_with_tax:300,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:354,urgent_with_tax:402,sub_toplist_with_tax:2004,gallery_with_tax:0,top_list_with_tax:252,gallery30_with_tax:0,daily_bump_with_tax:2412,daily_bump30_with_tax:6522,photosup_with_tax:300,ldv_with_tax:-1"}},"50": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:800,gallery_with_tax:1000,top_list_with_tax:150,gallery30_with_tax:2500,daily_bump_with_tax:1000,daily_bump30_with_tax:3500,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:180,prolong_price_with_tax:0,edit_with_tax:168,urgent_with_tax:402,sub_toplist_with_tax:1008,gallery_with_tax:1200,top_list_with_tax:150,gallery30_with_tax:2508,daily_bump_with_tax:1200,daily_bump30_with_tax:3516,photosup_with_tax:300,ldv_with_tax:-1"}},"51": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:800,gallery_with_tax:1000,top_list_with_tax:150,gallery30_with_tax:2500,daily_bump_with_tax:1000,daily_bump30_with_tax:3500,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:180,prolong_price_with_tax:0,edit_with_tax:168,urgent_with_tax:402,sub_toplist_with_tax:1008,gallery_with_tax:1200,top_list_with_tax:150,gallery30_with_tax:2508,daily_bump_with_tax:1200,daily_bump30_with_tax:3516,photosup_with_tax:300,ldv_with_tax:-1"}},"52": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:1000,gallery_with_tax:1000,top_list_with_tax:150,gallery30_with_tax:2500,daily_bump_with_tax:1200,daily_bump30_with_tax:3000,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:401,sub_toplist_with_tax:1008,gallery_with_tax:1200,top_list_with_tax:204,gallery30_with_tax:2808,daily_bump_with_tax:1500,daily_bump30_with_tax:3516,photosup_with_tax:402,ldv_with_tax:-1"}},"53": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:150,urgent_with_tax:200,sub_toplist_with_tax:700,gallery_with_tax:600,top_list_with_tax:100,gallery30_with_tax:2000,daily_bump_with_tax:600,daily_bump30_with_tax:2000,photosup_with_tax:250,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:0,urgent_with_tax:0,sub_toplist_with_tax:0,gallery_with_tax:0,top_list_with_tax:0,gallery30_with_tax:0,daily_bump_with_tax:0,daily_bump30_with_tax:0,photosup_with_tax:0,ldv_with_tax:-1"}},"54": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:150,urgent_with_tax:200,sub_toplist_with_tax:700,gallery_with_tax:600,top_list_with_tax:100,gallery30_with_tax:2000,daily_bump_with_tax:600,daily_bump30_with_tax:2000,photosup_with_tax:250,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:48,prolong_price_with_tax:0,edit_with_tax:204,urgent_with_tax:252,sub_toplist_with_tax:702,gallery_with_tax:702,top_list_with_tax:102,gallery30_with_tax:2508,daily_bump_with_tax:504,daily_bump30_with_tax:1806,photosup_with_tax:300,ldv_with_tax:-1"}},"55": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:250,urgent_with_tax:400,sub_toplist_with_tax:1000,gallery_with_tax:800,top_list_with_tax:150,gallery30_with_tax:2000,daily_bump_with_tax:1200,daily_bump30_with_tax:2500,photosup_with_tax:400,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:300,urgent_with_tax:402,sub_toplist_with_tax:1200,gallery_with_tax:1008,top_list_with_tax:204,gallery30_with_tax:2508,daily_bump_with_tax:1500,daily_bump30_with_tax:3516,photosup_with_tax:402,ldv_with_tax:-1"}},"57": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:350,urgent_with_tax:400,sub_toplist_with_tax:2200,gallery_with_tax:1800,top_list_with_tax:250,gallery30_with_tax:4500,daily_bump_with_tax:2500,daily_bump30_with_tax:7500,photosup_with_tax:500,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:600,prolong_price_with_tax:0,edit_with_tax:354,urgent_with_tax:402,sub_toplist_with_tax:2208,gallery_with_tax:1812,top_list_with_tax:252,gallery30_with_tax:4512,daily_bump_with_tax:2508,daily_bump30_with_tax:7524,photosup_with_tax:504,ldv_with_tax:-1"}},"58": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:350,urgent_with_tax:400,sub_toplist_with_tax:2200,gallery_with_tax:1800,top_list_with_tax:250,gallery30_with_tax:4500,daily_bump_with_tax:2500,daily_bump30_with_tax:7500,photosup_with_tax:500,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:600,prolong_price_with_tax:0,edit_with_tax:354,urgent_with_tax:402,sub_toplist_with_tax:2208,gallery_with_tax:1812,top_list_with_tax:252,gallery30_with_tax:4512,daily_bump_with_tax:2508,daily_bump30_with_tax:7524,photosup_with_tax:504,ldv_with_tax:-1"}},"59": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:350,urgent_with_tax:400,sub_toplist_with_tax:2200,gallery_with_tax:1800,top_list_with_tax:250,gallery30_with_tax:4500,daily_bump_with_tax:2500,daily_bump30_with_tax:7500,photosup_with_tax:500,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:600,prolong_price_with_tax:0,edit_with_tax:354,urgent_with_tax:402,sub_toplist_with_tax:2208,gallery_with_tax:1812,top_list_with_tax:252,gallery30_with_tax:4512,daily_bump_with_tax:2508,daily_bump30_with_tax:7524,photosup_with_tax:504,ldv_with_tax:-1"}},"60": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:350,urgent_with_tax:400,sub_toplist_with_tax:2200,gallery_with_tax:1800,top_list_with_tax:250,gallery30_with_tax:4500,daily_bump_with_tax:2500,daily_bump30_with_tax:7500,photosup_with_tax:500,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:354,urgent_with_tax:402,sub_toplist_with_tax:2208,gallery_with_tax:1812,top_list_with_tax:252,gallery30_with_tax:4512,daily_bump_with_tax:2508,daily_bump30_with_tax:7524,photosup_with_tax:504,ldv_with_tax:-1"}},"61": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:350,urgent_with_tax:400,sub_toplist_with_tax:2200,gallery_with_tax:1800,top_list_with_tax:250,gallery30_with_tax:4500,daily_bump_with_tax:2500,daily_bump30_with_tax:7500,photosup_with_tax:500,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:354,urgent_with_tax:402,sub_toplist_with_tax:2208,gallery_with_tax:1812,top_list_with_tax:252,gallery30_with_tax:4512,daily_bump_with_tax:2508,daily_bump30_with_tax:7524,photosup_with_tax:504,ldv_with_tax:-1"}},"62": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:350,urgent_with_tax:400,sub_toplist_with_tax:2200,gallery_with_tax:1800,top_list_with_tax:250,gallery30_with_tax:4500,daily_bump_with_tax:2500,daily_bump30_with_tax:7500,photosup_with_tax:500,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:354,urgent_with_tax:402,sub_toplist_with_tax:2208,gallery_with_tax:1812,top_list_with_tax:252,gallery30_with_tax:4512,daily_bump_with_tax:2508,daily_bump30_with_tax:7524,photosup_with_tax:504,ldv_with_tax:-1"}},"63": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:350,urgent_with_tax:400,sub_toplist_with_tax:2200,gallery_with_tax:1800,top_list_with_tax:250,gallery30_with_tax:4500,daily_bump_with_tax:2500,daily_bump30_with_tax:7500,photosup_with_tax:500,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:354,urgent_with_tax:402,sub_toplist_with_tax:2208,gallery_with_tax:1812,top_list_with_tax:252,gallery30_with_tax:4512,daily_bump_with_tax:2508,daily_bump30_with_tax:7524,photosup_with_tax:504,ldv_with_tax:-1"}},"64": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:350,urgent_with_tax:400,sub_toplist_with_tax:2200,gallery_with_tax:1800,top_list_with_tax:250,gallery30_with_tax:4500,daily_bump_with_tax:2500,daily_bump30_with_tax:7500,photosup_with_tax:500,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:360,prolong_price_with_tax:0,edit_with_tax:354,urgent_with_tax:402,sub_toplist_with_tax:2208,gallery_with_tax:1812,top_list_with_tax:252,gallery30_with_tax:4512,daily_bump_with_tax:2508,daily_bump30_with_tax:7524,photosup_with_tax:504,ldv_with_tax:-1"}},"65": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:150,urgent_with_tax:200,sub_toplist_with_tax:700,gallery_with_tax:0,top_list_with_tax:100,gallery30_with_tax:0,daily_bump_with_tax:600,daily_bump30_with_tax:2000,photosup_with_tax:250,ldv_with_tax:-1"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:0,urgent_with_tax:0,sub_toplist_with_tax:0,gallery_with_tax:0,top_list_with_tax:0,gallery30_with_tax:0,daily_bump_with_tax:0,daily_bump30_with_tax:0,photosup_with_tax:0,ldv_with_tax:-1"}},"67": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:400,urgent_with_tax:300,sub_toplist_with_tax:2500,gallery_with_tax:1500,top_list_with_tax:300,gallery30_with_tax:3500,daily_bump_with_tax:2500,daily_bump30_with_tax:9000,photosup_with_tax:700,ldv_with_tax:12000"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:402,urgent_with_tax:300,sub_toplist_with_tax:2508,gallery_with_tax:1506,top_list_with_tax:300,gallery30_with_tax:3516,daily_bump_with_tax:2208,daily_bump30_with_tax:7524,photosup_with_tax:702,ldv_with_tax:100"}},"68": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:400,urgent_with_tax:300,sub_toplist_with_tax:2500,gallery_with_tax:1500,top_list_with_tax:300,gallery30_with_tax:3500,daily_bump_with_tax:2500,daily_bump30_with_tax:9000,photosup_with_tax:700,ldv_with_tax:12000"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:402,urgent_with_tax:300,sub_toplist_with_tax:2508,gallery_with_tax:1506,top_list_with_tax:300,gallery30_with_tax:3516,daily_bump_with_tax:2208,daily_bump30_with_tax:7524,photosup_with_tax:702,ldv_with_tax:100"}},"69": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:400,urgent_with_tax:300,sub_toplist_with_tax:2500,gallery_with_tax:1500,top_list_with_tax:300,gallery30_with_tax:3500,daily_bump_with_tax:2500,daily_bump30_with_tax:9000,photosup_with_tax:700,ldv_with_tax:12000"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:402,urgent_with_tax:300,sub_toplist_with_tax:2508,gallery_with_tax:1506,top_list_with_tax:300,gallery30_with_tax:3516,daily_bump_with_tax:2208,daily_bump30_with_tax:7524,photosup_with_tax:702,ldv_with_tax:100"}},"70": {"0": {"value": "enabled:0,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:400,urgent_with_tax:300,sub_toplist_with_tax:2500,gallery_with_tax:1500,top_list_with_tax:300,gallery30_with_tax:3500,daily_bump_with_tax:2500,daily_bump30_with_tax:9000,photosup_with_tax:700,ldv_with_tax:12000"},"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:402,urgent_with_tax:300,sub_toplist_with_tax:2508,gallery_with_tax:1506,top_list_with_tax:300,gallery30_with_tax:3516,daily_bump_with_tax:2208,daily_bump30_with_tax:7524,photosup_with_tax:702,ldv_with_tax:100"}},"keys": {"1": "category","2": "company_ad"}},"2": {"default": "enabled:0,newad_price_with_tax:957,prolong_price_with_tax:957,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:-1"},"must_create_account_alert": "Professionnels des cat&eacute;gories V&eacute;hicules, Immobilier, Maison, Loisirs, Emploi &amp; Services et Mat&eacute;riel Professionnel, la cr&eacute;ation d'un Compte est GRATUITE et obligatoire pour pouvoir d&eacute;poser vos annonces sur Leboncoin.fr.&nbsp;","must_create_account_msg": "Professionnels, la cr&eacute;ation d'un Compte est GRATUITE et obligatoire pour pouvoir d&eacute;poser vos annonces sur Leboncoin.fr.&nbsp;"},
				 'extra_images' : {"1": {"2": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"3": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"4": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"5": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"6": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"7": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"9": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"10": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"12": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"13": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"15": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"16": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"19": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"20": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"21": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"23": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"25": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"26": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"27": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"28": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"29": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"30": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"32": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"39": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"40": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"41": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"44": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"45": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"46": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"48": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"50": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"51": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"52": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"54": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"55": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"57": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"58": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"59": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"60": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"61": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"62": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"63": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"64": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"67": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"68": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"69": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"70": {"1": {"value": "max:4,photosup:5,line1:1,line2:4,line3:4,line4:1"}},"keys": {"1": "category","2": "company_ad"}},"2": {"default": "max:2,photosup:7,line1:3,line2:4,line3:4,line4:0"}}
	       };

var top_list_types = {
	'sms' : '1',
	'phone' : '2'
	/*,
	  '3' : 'card'*/
};

var edit_price_settings = {"1": {"2": {"0": {"value": "price:490"},"1": {"value": "price:456"}},"3": {"0": {"value": "price:350"},"1": {"value": "price:348"}},"4": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"5": {"0": {"value": "price:400"},"1": {"value": "price:456"}},"6": {"0": {"value": "price:250"},"1": {"value": "price:168"}},"7": {"0": {"value": "price:400"},"1": {"value": "price:348"}},"9": {"0": {"value": "price:500"},"1": {"value": "price:504"}},"10": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"11": {"0": {"value": "price:350"},"1": {"value": "price:0"}},"12": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"13": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"15": {"0": {"value": "price:250"},"1": {"value": "price:300"}},"16": {"0": {"value": "price:250"},"1": {"value": "price:300"}},"17": {"0": {"value": "price:250"},"1": {"value": "price:0"}},"19": {"0": {"value": "price:250"},"1": {"value": "price:300"}},"20": {"0": {"value": "price:250"},"1": {"value": "price:300"}},"21": {"0": {"value": "price:250"},"1": {"value": "price:300"}},"22": {"0": {"value": "price:150"},"1": {"value": "price:0"}},"23": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"25": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"26": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"27": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"28": {"0": {"value": "price:250"},"1": {"value": "price:300"}},"29": {"0": {"value": "price:250"},"1": {"value": "price:300"}},"30": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"32": {"0": {"value": "price:350"},"1": {"value": "price:354"}},"33": {"0": {"value": "price:500"},"1": {"value": "price:504"}},"34": {"0": {"value": "price:350"},"1": {"value": "price:354"}},"35": {"0": {"value": "price:300"},"1": {"value": "price:0"}},"36": {"0": {"value": "price:350"},"1": {"value": "price:0"}},"38": {"0": {"value": "price:250"},"1": {"value": "price:0"}},"39": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"40": {"0": {"value": "price:150"},"1": {"value": "price:252"}},"41": {"0": {"value": "price:150"},"1": {"value": "price:300"}},"42": {"0": {"value": "price:300"},"1": {"value": "price:0"}},"43": {"0": {"value": "price:300"},"1": {"value": "price:0"}},"44": {"0": {"value": "price:250"},"1": {"value": "price:168"}},"45": {"0": {"value": "price:200"},"1": {"value": "price:204"}},"46": {"0": {"value": "price:200"},"1": {"value": "price:204"}},"47": {"0": {"value": "price:200"},"1": {"value": "price:0"}},"48": {"0": {"value": "price:250"},"1": {"value": "price:300"}},"49": {"0": {"value": "price:350"},"1": {"value": "price:354"}},"50": {"0": {"value": "price:250"},"1": {"value": "price:168"}},"51": {"0": {"value": "price:250"},"1": {"value": "price:168"}},"52": {"0": {"value": "price:250"},"1": {"value": "price:300"}},"53": {"0": {"value": "price:150"},"1": {"value": "price:0"}},"54": {"0": {"value": "price:150"},"1": {"value": "price:204"}},"55": {"0": {"value": "price:250"},"1": {"value": "price:300"}},"57": {"0": {"value": "price:350"},"1": {"value": "price:354"}},"58": {"0": {"value": "price:350"},"1": {"value": "price:354"}},"59": {"0": {"value": "price:350"},"1": {"value": "price:354"}},"60": {"0": {"value": "price:350"},"1": {"value": "price:354"}},"61": {"0": {"value": "price:350"},"1": {"value": "price:354"}},"62": {"0": {"value": "price:350"},"1": {"value": "price:354"}},"63": {"0": {"value": "price:350"},"1": {"value": "price:354"}},"64": {"0": {"value": "price:350"},"1": {"value": "price:354"}},"65": {"0": {"value": "price:150"},"1": {"value": "price:0"}},"67": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"68": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"69": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"70": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"keys": {"1": "category","2": "company_ad"}},"2": {"default": "price:200"}};
var gallery_price_settings = {"1": {"2": {"0": {"value": "price:1750"},"1": {"value": "price:1704"}},"3": {"0": {"value": "price:1000"},"1": {"value": "price:1008"}},"4": {"0": {"value": "price:1500"},"1": {"value": "price:1506"}},"5": {"0": {"value": "price:1500"},"1": {"value": "price:1704"}},"6": {"0": {"value": "price:1000"},"1": {"value": "price:1200"}},"7": {"0": {"value": "price:1500"},"1": {"value": "price:1506"}},"9": {"0": {"value": "price:1500"},"1": {"value": "price:2004"}},"10": {"0": {"value": "price:1500"},"1": {"value": "price:1506"}},"11": {"0": {"value": "price:1000"},"1": {"value": "price:0"}},"12": {"0": {"value": "price:1500"},"1": {"value": "price:1506"}},"13": {"0": {"value": "price:3000"},"1": {"value": "price:3012"}},"15": {"0": {"value": "price:800"},"1": {"value": "price:1200"}},"16": {"0": {"value": "price:900"},"1": {"value": "price:1200"}},"17": {"0": {"value": "price:800"},"1": {"value": "price:0"}},"19": {"0": {"value": "price:800"},"1": {"value": "price:804"}},"20": {"0": {"value": "price:800"},"1": {"value": "price:1200"}},"21": {"0": {"value": "price:1000"},"1": {"value": "price:1008"}},"22": {"0": {"value": "price:600"},"1": {"value": "price:0"}},"23": {"0": {"value": "price:700"},"1": {"value": "price:702"}},"25": {"0": {"value": "price:700"},"1": {"value": "price:702"}},"26": {"0": {"value": "price:700"},"1": {"value": "price:702"}},"27": {"0": {"value": "price:700"},"1": {"value": "price:702"}},"28": {"0": {"value": "price:1000"},"1": {"value": "price:1008"}},"29": {"0": {"value": "price:800"},"1": {"value": "price:1200"}},"30": {"0": {"value": "price:800"},"1": {"value": "price:804"}},"32": {"0": {"value": "price:1800"},"1": {"value": "price:1812"}},"33": {"0": {"value": "price:0"},"1": {"value": "price:0"}},"34": {"0": {"value": "price:0"},"1": {"value": "price:0"}},"35": {"0": {"value": "price:0"},"1": {"value": "price:0"}},"36": {"0": {"value": "price:0"},"1": {"value": "price:0"}},"38": {"0": {"value": "price:800"},"1": {"value": "price:0"}},"39": {"0": {"value": "price:800"},"1": {"value": "price:804"}},"40": {"0": {"value": "price:600"},"1": {"value": "price:804"}},"41": {"0": {"value": "price:600"},"1": {"value": "price:906"}},"42": {"0": {"value": "price:700"},"1": {"value": "price:0"}},"43": {"0": {"value": "price:800"},"1": {"value": "price:0"}},"44": {"0": {"value": "price:1000"},"1": {"value": "price:1200"}},"45": {"0": {"value": "price:700"},"1": {"value": "price:702"}},"46": {"0": {"value": "price:900"},"1": {"value": "price:906"}},"47": {"0": {"value": "price:700"},"1": {"value": "price:0"}},"48": {"0": {"value": "price:1000"},"1": {"value": "price:1008"}},"49": {"0": {"value": "price:0"},"1": {"value": "price:0"}},"50": {"0": {"value": "price:1000"},"1": {"value": "price:1200"}},"51": {"0": {"value": "price:1000"},"1": {"value": "price:1200"}},"52": {"0": {"value": "price:1000"},"1": {"value": "price:1200"}},"53": {"0": {"value": "price:600"},"1": {"value": "price:0"}},"54": {"0": {"value": "price:600"},"1": {"value": "price:702"}},"55": {"0": {"value": "price:800"},"1": {"value": "price:1008"}},"57": {"0": {"value": "price:1800"},"1": {"value": "price:1812"}},"58": {"0": {"value": "price:1800"},"1": {"value": "price:1812"}},"59": {"0": {"value": "price:1800"},"1": {"value": "price:1812"}},"60": {"0": {"value": "price:1800"},"1": {"value": "price:1812"}},"61": {"0": {"value": "price:1800"},"1": {"value": "price:1812"}},"62": {"0": {"value": "price:1800"},"1": {"value": "price:1812"}},"63": {"0": {"value": "price:1800"},"1": {"value": "price:1812"}},"64": {"0": {"value": "price:1800"},"1": {"value": "price:1812"}},"65": {"0": {"value": "price:0"},"1": {"value": "price:0"}},"67": {"0": {"value": "price:1500"},"1": {"value": "price:1506"}},"68": {"0": {"value": "price:1500"},"1": {"value": "price:1506"}},"69": {"0": {"value": "price:1500"},"1": {"value": "price:1506"}},"70": {"0": {"value": "price:1500"},"1": {"value": "price:1506"}},"keys": {"1": "category","2": "company_ad"}},"2": {"default": "price:1000"}};
var urgent_price_settings = {"1": {"2": {"0": {"value": "price:700"},"1": {"value": "price:504"}},"3": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"4": {"0": {"value": "price:600"},"1": {"value": "price:702"}},"5": {"0": {"value": "price:500"},"1": {"value": "price:504"}},"6": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"7": {"0": {"value": "price:600"},"1": {"value": "price:702"}},"9": {"0": {"value": "price:500"},"1": {"value": "price:504"}},"10": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"11": {"0": {"value": "price:400"},"1": {"value": "price:0"}},"12": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"13": {"0": {"value": "price:500"},"1": {"value": "price:504"}},"15": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"16": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"17": {"0": {"value": "price:400"},"1": {"value": "price:0"}},"19": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"20": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"21": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"22": {"0": {"value": "price:200"},"1": {"value": "price:0"}},"23": {"0": {"value": "price:200"},"1": {"value": "price:204"}},"25": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"26": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"27": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"28": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"29": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"30": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"32": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"33": {"0": {"value": "price:600"},"1": {"value": "price:600"}},"34": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"35": {"0": {"value": "price:400"},"1": {"value": "price:0"}},"36": {"0": {"value": "price:400"},"1": {"value": "price:0"}},"38": {"0": {"value": "price:400"},"1": {"value": "price:0"}},"39": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"40": {"0": {"value": "price:200"},"1": {"value": "price:402"}},"41": {"0": {"value": "price:200"},"1": {"value": "price:102"}},"42": {"0": {"value": "price:250"},"1": {"value": "price:0"}},"43": {"0": {"value": "price:250"},"1": {"value": "price:0"}},"44": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"45": {"0": {"value": "price:100"},"1": {"value": "price:102"}},"46": {"0": {"value": "price:200"},"1": {"value": "price:204"}},"47": {"0": {"value": "price:200"},"1": {"value": "price:0"}},"48": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"49": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"50": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"51": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"52": {"0": {"value": "price:400"},"1": {"value": "price:401"}},"53": {"0": {"value": "price:200"},"1": {"value": "price:0"}},"54": {"0": {"value": "price:200"},"1": {"value": "price:252"}},"55": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"57": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"58": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"59": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"60": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"61": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"62": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"63": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"64": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"65": {"0": {"value": "price:200"},"1": {"value": "price:0"}},"67": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"68": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"69": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"70": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"keys": {"1": "category","2": "company_ad"}},"2": {"default": "price:400"}};
var sub_toplist_price_settings = {"1": {"2": {"0": {"value": "price:2950"},"1": {"value": "price:2508"}},"3": {"0": {"value": "price:2000"},"1": {"value": "price:2004"}},"4": {"0": {"value": "price:2200"},"1": {"value": "price:2508"}},"5": {"0": {"value": "price:2200"},"1": {"value": "price:2508"}},"6": {"0": {"value": "price:800"},"1": {"value": "price:1008"}},"7": {"0": {"value": "price:2200"},"1": {"value": "price:2508"}},"9": {"0": {"value": "price:3000"},"1": {"value": "price:3012"}},"10": {"0": {"value": "price:2500"},"1": {"value": "price:2508"}},"11": {"0": {"value": "price:2000"},"1": {"value": "price:0"}},"12": {"0": {"value": "price:2500"},"1": {"value": "price:2508"}},"13": {"0": {"value": "price:3500"},"1": {"value": "price:4020"}},"15": {"0": {"value": "price:1000"},"1": {"value": "price:1008"}},"16": {"0": {"value": "price:800"},"1": {"value": "price:804"}},"17": {"0": {"value": "price:1000"},"1": {"value": "price:0"}},"19": {"0": {"value": "price:800"},"1": {"value": "price:804"}},"20": {"0": {"value": "price:1000"},"1": {"value": "price:1008"}},"21": {"0": {"value": "price:800"},"1": {"value": "price:804"}},"22": {"0": {"value": "price:700"},"1": {"value": "price:0"}},"23": {"0": {"value": "price:700"},"1": {"value": "price:702"}},"25": {"0": {"value": "price:700"},"1": {"value": "price:702"}},"26": {"0": {"value": "price:700"},"1": {"value": "price:702"}},"27": {"0": {"value": "price:700"},"1": {"value": "price:702"}},"28": {"0": {"value": "price:800"},"1": {"value": "price:1008"}},"29": {"0": {"value": "price:1000"},"1": {"value": "price:1200"}},"30": {"0": {"value": "price:1000"},"1": {"value": "price:1008"}},"32": {"0": {"value": "price:2200"},"1": {"value": "price:2208"}},"33": {"0": {"value": "price:3000"},"1": {"value": "price:3012"}},"34": {"0": {"value": "price:2000"},"1": {"value": "price:2004"}},"35": {"0": {"value": "price:800"},"1": {"value": "price:0"}},"36": {"0": {"value": "price:1800"},"1": {"value": "price:0"}},"38": {"0": {"value": "price:600"},"1": {"value": "price:0"}},"39": {"0": {"value": "price:600"},"1": {"value": "price:600"}},"40": {"0": {"value": "price:700"},"1": {"value": "price:600"}},"41": {"0": {"value": "price:700"},"1": {"value": "price:702"}},"42": {"0": {"value": "price:700"},"1": {"value": "price:0"}},"43": {"0": {"value": "price:700"},"1": {"value": "price:0"}},"44": {"0": {"value": "price:800"},"1": {"value": "price:1008"}},"45": {"0": {"value": "price:700"},"1": {"value": "price:702"}},"46": {"0": {"value": "price:700"},"1": {"value": "price:702"}},"47": {"0": {"value": "price:700"},"1": {"value": "price:0"}},"48": {"0": {"value": "price:1000"},"1": {"value": "price:1008"}},"49": {"0": {"value": "price:2000"},"1": {"value": "price:2004"}},"50": {"0": {"value": "price:800"},"1": {"value": "price:1008"}},"51": {"0": {"value": "price:800"},"1": {"value": "price:1008"}},"52": {"0": {"value": "price:1000"},"1": {"value": "price:1008"}},"53": {"0": {"value": "price:700"},"1": {"value": "price:0"}},"54": {"0": {"value": "price:700"},"1": {"value": "price:702"}},"55": {"0": {"value": "price:1000"},"1": {"value": "price:1200"}},"57": {"0": {"value": "price:2200"},"1": {"value": "price:2208"}},"58": {"0": {"value": "price:2200"},"1": {"value": "price:2208"}},"59": {"0": {"value": "price:2200"},"1": {"value": "price:2208"}},"60": {"0": {"value": "price:2200"},"1": {"value": "price:2208"}},"61": {"0": {"value": "price:2200"},"1": {"value": "price:2208"}},"62": {"0": {"value": "price:2200"},"1": {"value": "price:2208"}},"63": {"0": {"value": "price:2200"},"1": {"value": "price:2208"}},"64": {"0": {"value": "price:2200"},"1": {"value": "price:2208"}},"65": {"0": {"value": "price:700"},"1": {"value": "price:0"}},"67": {"0": {"value": "price:2500"},"1": {"value": "price:2508"}},"68": {"0": {"value": "price:2500"},"1": {"value": "price:2508"}},"69": {"0": {"value": "price:2500"},"1": {"value": "price:2508"}},"70": {"0": {"value": "price:2500"},"1": {"value": "price:2508"}},"keys": {"1": "category","2": "company_ad"}},"2": {"default": "price:600"}};
var top_list_price_settings = {"1": {"2": {"0": {"value": "price:350"},"1": {"value": "price:348"}},"3": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"4": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"5": {"0": {"value": "price:300"},"1": {"value": "price:348"}},"6": {"0": {"value": "price:150"},"1": {"value": "price:150"}},"7": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"9": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"10": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"11": {"0": {"value": "price:250"},"1": {"value": "price:0"}},"12": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"13": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"15": {"0": {"value": "price:150"},"1": {"value": "price:204"}},"16": {"0": {"value": "price:150"},"1": {"value": "price:204"}},"17": {"0": {"value": "price:150"},"1": {"value": "price:0"}},"19": {"0": {"value": "price:150"},"1": {"value": "price:204"}},"20": {"0": {"value": "price:150"},"1": {"value": "price:204"}},"21": {"0": {"value": "price:150"},"1": {"value": "price:204"}},"22": {"0": {"value": "price:100"},"1": {"value": "price:0"}},"23": {"0": {"value": "price:100"},"1": {"value": "price:102"}},"25": {"0": {"value": "price:100"},"1": {"value": "price:102"}},"26": {"0": {"value": "price:100"},"1": {"value": "price:102"}},"27": {"0": {"value": "price:100"},"1": {"value": "price:102"}},"28": {"0": {"value": "price:150"},"1": {"value": "price:204"}},"29": {"0": {"value": "price:150"},"1": {"value": "price:204"}},"30": {"0": {"value": "price:200"},"1": {"value": "price:204"}},"32": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"33": {"0": {"value": "price:400"},"1": {"value": "price:402"}},"34": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"35": {"0": {"value": "price:200"},"1": {"value": "price:0"}},"36": {"0": {"value": "price:250"},"1": {"value": "price:0"}},"38": {"0": {"value": "price:150"},"1": {"value": "price:0"}},"39": {"0": {"value": "price:150"},"1": {"value": "price:150"}},"40": {"0": {"value": "price:100"},"1": {"value": "price:150"}},"41": {"0": {"value": "price:100"},"1": {"value": "price:102"}},"42": {"0": {"value": "price:100"},"1": {"value": "price:0"}},"43": {"0": {"value": "price:100"},"1": {"value": "price:0"}},"44": {"0": {"value": "price:150"},"1": {"value": "price:150"}},"45": {"0": {"value": "price:100"},"1": {"value": "price:102"}},"46": {"0": {"value": "price:100"},"1": {"value": "price:102"}},"47": {"0": {"value": "price:100"},"1": {"value": "price:0"}},"48": {"0": {"value": "price:150"},"1": {"value": "price:204"}},"49": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"50": {"0": {"value": "price:150"},"1": {"value": "price:150"}},"51": {"0": {"value": "price:150"},"1": {"value": "price:150"}},"52": {"0": {"value": "price:150"},"1": {"value": "price:204"}},"53": {"0": {"value": "price:100"},"1": {"value": "price:0"}},"54": {"0": {"value": "price:100"},"1": {"value": "price:102"}},"55": {"0": {"value": "price:150"},"1": {"value": "price:204"}},"57": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"58": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"59": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"60": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"61": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"62": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"63": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"64": {"0": {"value": "price:250"},"1": {"value": "price:252"}},"65": {"0": {"value": "price:100"},"1": {"value": "price:0"}},"67": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"68": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"69": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"70": {"0": {"value": "price:300"},"1": {"value": "price:300"}},"keys": {"1": "category","2": "company_ad"}},"2": {"default": "price:160"}};

var max_watch_ads = 350;
var max_watch_ads_error_msg = "Vous avez atteint le maximum d'annonces que vous pouvez sauvegarder.<br/>Pour sauvegarder de nouvelles annonces, vous devez d'abord en supprimer de votre liste.";

var photosup_layout_pro = { 2 : true, 3 : true, 4 : true, 5 : true, 6 : true, 7 : true, 9 : true, 10 : true, 12 : true, 13 : true, 15 : true, 16 : true, 19 : true, 20 : true, 21 : true, 23 : true, 25 : true, 26 : true, 27 : true, 28 : true, 29 : true, 30 : true, 32 : true, 39 : true, 40 : true, 41 : true, 44 : true, 45 : true, 46 : true, 48 : true, 50 : true, 51 : true, 52 : true, 54 : true, 55 : true, 57 : true, 58 : true, 59 : true, 60 : true, 61 : true, 62 : true, 63 : true, 64 : true, 67 : true, 68 : true, 69 : true, 70 : true };

// TODO : use vtree_js()

var price_info_part = {
'33' : { name:"Offres d'emploi", top_list_price:"400", toplist_sms_price:"300", daily_bump_price:"3500", daily_bump30_price:"11000", sub_toplist_price:"3000", gallery_price:"0", gallery30_price:"0", urgent_price:"600", photosup_price:"600", ldv_price:"-1", edit_price:"500", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'2' : { name:"Voitures", top_list_price:"350", toplist_sms_price:"300", daily_bump_price:"2450", daily_bump30_price:"7500", sub_toplist_price:"2950", gallery_price:"1750", gallery30_price:"4000", urgent_price:"700", photosup_price:"550", ldv_price:"-1", edit_price:"490", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'3' : { name:"Motos", top_list_price:"250", toplist_sms_price:"300", daily_bump_price:"2000", daily_bump30_price:"6500", sub_toplist_price:"2000", gallery_price:"1000", gallery30_price:"3000", urgent_price:"400", photosup_price:"500", ldv_price:"-1", edit_price:"350", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'4' : { name:"Caravaning", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2250", daily_bump30_price:"9000", sub_toplist_price:"2200", gallery_price:"1500", gallery30_price:"4500", urgent_price:"600", photosup_price:"1000", ldv_price:"-1", edit_price:"400", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'5' : { name:"Utilitaires", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2250", daily_bump30_price:"9000", sub_toplist_price:"2200", gallery_price:"1500", gallery30_price:"4500", urgent_price:"500", photosup_price:"500", ldv_price:"-1", edit_price:"400", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'6' : { name:"Equipement Auto", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1000", daily_bump30_price:"3500", sub_toplist_price:"800", gallery_price:"1000", gallery30_price:"2500", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'44' : { name:"Equipement Moto", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1000", daily_bump30_price:"3500", sub_toplist_price:"800", gallery_price:"1000", gallery30_price:"2500", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'50' : { name:"Equipement Caravaning", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1000", daily_bump30_price:"3500", sub_toplist_price:"800", gallery_price:"1000", gallery30_price:"2500", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'7' : { name:"Nautisme", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2250", daily_bump30_price:"9000", sub_toplist_price:"2200", gallery_price:"1500", gallery30_price:"4500", urgent_price:"600", photosup_price:"1000", ldv_price:"-1", edit_price:"400", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'51' : { name:"Equipement Nautisme", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1000", daily_bump30_price:"3500", sub_toplist_price:"800", gallery_price:"1000", gallery30_price:"2500", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'9' : { name:"Ventes immobilières", top_list_price:"400", toplist_sms_price:"300", daily_bump_price:"3000", daily_bump30_price:"9900", sub_toplist_price:"3000", gallery_price:"1500", gallery30_price:"5000", urgent_price:"500", photosup_price:"800", ldv_price:"-1", edit_price:"500", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'10' : { name:"Locations", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"9000", sub_toplist_price:"2500", gallery_price:"1500", gallery30_price:"3000", urgent_price:"300", photosup_price:"700", ldv_price:"-1", edit_price:"400", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'11' : { name:"Colocations", top_list_price:"250", toplist_sms_price:"300", daily_bump_price:"2000", daily_bump30_price:"6500", sub_toplist_price:"2000", gallery_price:"1000", gallery30_price:"3000", urgent_price:"400", photosup_price:"500", ldv_price:"-1", edit_price:"350", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'13' : { name:"Bureaux & Commerces", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"3000", daily_bump30_price:"8000", sub_toplist_price:"3500", gallery_price:"3000", gallery30_price:"8000", urgent_price:"500", photosup_price:"700", ldv_price:"-1", edit_price:"400", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'12' : { name:"Locations & Gîtes", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"9000", sub_toplist_price:"2500", gallery_price:"1500", gallery30_price:"3500", urgent_price:"300", photosup_price:"700", ldv_price:"12000", edit_price:"400", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'67' : { name:"Chambres d'hôtes", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"9000", sub_toplist_price:"2500", gallery_price:"1500", gallery30_price:"3500", urgent_price:"300", photosup_price:"700", ldv_price:"12000", edit_price:"400", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'68' : { name:"Campings", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"9000", sub_toplist_price:"2500", gallery_price:"1500", gallery30_price:"3500", urgent_price:"300", photosup_price:"700", ldv_price:"12000", edit_price:"400", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'69' : { name:"Hôtels", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"9000", sub_toplist_price:"2500", gallery_price:"1500", gallery30_price:"3500", urgent_price:"300", photosup_price:"700", ldv_price:"12000", edit_price:"400", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'70' : { name:"Hébergements insolites", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"9000", sub_toplist_price:"2500", gallery_price:"1500", gallery30_price:"3500", urgent_price:"300", photosup_price:"700", ldv_price:"12000", edit_price:"400", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'15' : { name:"Informatique", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1200", daily_bump30_price:"3500", sub_toplist_price:"1000", gallery_price:"800", gallery30_price:"2500", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'43' : { name:"Consoles & Jeux vidéo", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"700", daily_bump30_price:"2500", sub_toplist_price:"700", gallery_price:"800", gallery30_price:"2800", urgent_price:"250", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'16' : { name:"Image & Son", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1200", daily_bump30_price:"3000", sub_toplist_price:"800", gallery_price:"900", gallery30_price:"2200", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'17' : { name:"Téléphonie", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1200", daily_bump30_price:"3500", sub_toplist_price:"1000", gallery_price:"800", gallery30_price:"2500", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'19' : { name:"Ameublement", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1000", daily_bump30_price:"2500", sub_toplist_price:"800", gallery_price:"800", gallery30_price:"2400", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'20' : { name:"Electroménager", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1200", daily_bump30_price:"3500", sub_toplist_price:"1000", gallery_price:"800", gallery30_price:"2500", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'45' : { name:"Arts de la table", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"500", daily_bump30_price:"1800", sub_toplist_price:"700", gallery_price:"700", gallery30_price:"2500", urgent_price:"100", photosup_price:"300", ldv_price:"-1", edit_price:"200", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'39' : { name:"Décoration", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"900", daily_bump30_price:"3000", sub_toplist_price:"600", gallery_price:"800", gallery30_price:"2500", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'46' : { name:"Linge de maison", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"800", daily_bump30_price:"2500", sub_toplist_price:"700", gallery_price:"900", gallery30_price:"3000", urgent_price:"200", photosup_price:"300", ldv_price:"-1", edit_price:"200", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'21' : { name:"Bricolage", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1200", daily_bump30_price:"3000", sub_toplist_price:"800", gallery_price:"1000", gallery30_price:"3000", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'52' : { name:"Jardinage", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1200", daily_bump30_price:"3000", sub_toplist_price:"1000", gallery_price:"1000", gallery30_price:"2500", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'22' : { name:"Vêtements", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"600", daily_bump30_price:"2000", sub_toplist_price:"700", gallery_price:"600", gallery30_price:"2000", urgent_price:"200", photosup_price:"250", ldv_price:"-1", edit_price:"150", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'53' : { name:"Chaussures", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"600", daily_bump30_price:"2000", sub_toplist_price:"700", gallery_price:"600", gallery30_price:"2000", urgent_price:"200", photosup_price:"250", ldv_price:"-1", edit_price:"150", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'47' : { name:"Accessoires & Bagagerie", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"500", daily_bump30_price:"1800", sub_toplist_price:"700", gallery_price:"700", gallery30_price:"2500", urgent_price:"200", photosup_price:"300", ldv_price:"-1", edit_price:"200", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'42' : { name:"Montres & Bijoux", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"600", daily_bump30_price:"2200", sub_toplist_price:"700", gallery_price:"700", gallery30_price:"2500", urgent_price:"250", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'23' : { name:"Equipement bébé", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"500", daily_bump30_price:"1800", sub_toplist_price:"700", gallery_price:"700", gallery30_price:"2200", urgent_price:"200", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'54' : { name:"Vêtements bébé", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"600", daily_bump30_price:"2000", sub_toplist_price:"700", gallery_price:"600", gallery30_price:"2000", urgent_price:"200", photosup_price:"250", ldv_price:"-1", edit_price:"150", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'25' : { name:"DVD / Films", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"500", daily_bump30_price:"1800", sub_toplist_price:"700", gallery_price:"700", gallery30_price:"2500", urgent_price:"250", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'26' : { name:"CD / Musique", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"500", daily_bump30_price:"1800", sub_toplist_price:"700", gallery_price:"700", gallery30_price:"2500", urgent_price:"250", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'27' : { name:"Livres", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"500", daily_bump30_price:"1800", sub_toplist_price:"700", gallery_price:"700", gallery30_price:"2500", urgent_price:"250", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'28' : { name:"Animaux", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1200", daily_bump30_price:"3500", sub_toplist_price:"800", gallery_price:"1000", gallery30_price:"3000", urgent_price:"400", photosup_price:"500", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'55' : { name:"Vélos", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1200", daily_bump30_price:"2500", sub_toplist_price:"1000", gallery_price:"800", gallery30_price:"2000", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'29' : { name:"Sports & Hobbies", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1200", daily_bump30_price:"3500", sub_toplist_price:"1000", gallery_price:"800", gallery30_price:"2500", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'30' : { name:"Instruments de musique", top_list_price:"200", toplist_sms_price:"200", daily_bump_price:"1200", daily_bump30_price:"3000", sub_toplist_price:"1000", gallery_price:"800", gallery30_price:"2500", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"300", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'40' : { name:"Collection", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"600", daily_bump30_price:"2000", sub_toplist_price:"700", gallery_price:"600", gallery30_price:"2000", urgent_price:"200", photosup_price:"250", ldv_price:"-1", edit_price:"150", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'41' : { name:"Jeux & Jouets", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"600", daily_bump30_price:"2000", sub_toplist_price:"700", gallery_price:"600", gallery30_price:"2000", urgent_price:"200", photosup_price:"250", ldv_price:"-1", edit_price:"150", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'48' : { name:"Vins & Gastronomie", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"1200", daily_bump30_price:"3000", sub_toplist_price:"1000", gallery_price:"1000", gallery30_price:"2500", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'57' : { name:"Matériel Agricole", top_list_price:"250", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"7500", sub_toplist_price:"2200", gallery_price:"1800", gallery30_price:"4500", urgent_price:"400", photosup_price:"500", ldv_price:"-1", edit_price:"350", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'58' : { name:"Transport - Manutention", top_list_price:"250", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"7500", sub_toplist_price:"2200", gallery_price:"1800", gallery30_price:"4500", urgent_price:"400", photosup_price:"500", ldv_price:"-1", edit_price:"350", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'59' : { name:"BTP - Chantier Gros-oeuvre", top_list_price:"250", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"7500", sub_toplist_price:"2200", gallery_price:"1800", gallery30_price:"4500", urgent_price:"400", photosup_price:"500", ldv_price:"-1", edit_price:"350", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'60' : { name:"Outillage - Matériaux 2nd-oeuvre", top_list_price:"250", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"7500", sub_toplist_price:"2200", gallery_price:"1800", gallery30_price:"4500", urgent_price:"400", photosup_price:"500", ldv_price:"-1", edit_price:"350", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'32' : { name:"Équipements Industriels", top_list_price:"250", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"7500", sub_toplist_price:"2200", gallery_price:"1800", gallery30_price:"4500", urgent_price:"400", photosup_price:"500", ldv_price:"-1", edit_price:"350", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'61' : { name:"Restauration - Hôtellerie", top_list_price:"250", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"7500", sub_toplist_price:"2200", gallery_price:"1800", gallery30_price:"4500", urgent_price:"400", photosup_price:"500", ldv_price:"-1", edit_price:"350", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'62' : { name:"Fournitures de Bureau", top_list_price:"250", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"7500", sub_toplist_price:"2200", gallery_price:"1800", gallery30_price:"4500", urgent_price:"400", photosup_price:"500", ldv_price:"-1", edit_price:"350", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'63' : { name:"Commerces & Marchés", top_list_price:"250", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"7500", sub_toplist_price:"2200", gallery_price:"1800", gallery30_price:"4500", urgent_price:"400", photosup_price:"500", ldv_price:"-1", edit_price:"350", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'64' : { name:"Matériel Médical", top_list_price:"250", toplist_sms_price:"300", daily_bump_price:"2500", daily_bump30_price:"7500", sub_toplist_price:"2200", gallery_price:"1800", gallery30_price:"4500", urgent_price:"400", photosup_price:"500", ldv_price:"-1", edit_price:"350", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'34' : { name:"Prestations de services", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2200", daily_bump30_price:"7000", sub_toplist_price:"2000", gallery_price:"0", gallery30_price:"0", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"350", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'35' : { name:"Billetterie", top_list_price:"200", toplist_sms_price:"200", daily_bump_price:"1200", daily_bump30_price:"3500", sub_toplist_price:"800", gallery_price:"0", gallery30_price:"0", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"300", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'49' : { name:"Evénements", top_list_price:"250", toplist_sms_price:"300", daily_bump_price:"2400", daily_bump30_price:"6500", sub_toplist_price:"2000", gallery_price:"0", gallery30_price:"0", urgent_price:"400", photosup_price:"300", ldv_price:"-1", edit_price:"350", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'36' : { name:"Cours particuliers", top_list_price:"250", toplist_sms_price:"300", daily_bump_price:"2200", daily_bump30_price:"8500", sub_toplist_price:"1800", gallery_price:"0", gallery30_price:"0", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"350", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'65' : { name:"Covoiturage", top_list_price:"100", toplist_sms_price:"100", daily_bump_price:"600", daily_bump30_price:"2000", sub_toplist_price:"700", gallery_price:"0", gallery30_price:"0", urgent_price:"200", photosup_price:"250", ldv_price:"-1", edit_price:"150", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'38' : { name:"Autres", top_list_price:"150", toplist_sms_price:"150", daily_bump_price:"900", daily_bump30_price:"3000", sub_toplist_price:"600", gallery_price:"800", gallery30_price:"2500", urgent_price:"400", photosup_price:"400", ldv_price:"-1", edit_price:"250", newad_price_price:"0"




	
	
	



	
		
		
		
	


		
	


		
		
		
		
	
       
       
        
        
        
     


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	
    	
        
        
        
        
    


		
		
		
		
	



				   
		
		
		
	



		
		
		
		
	



        
        
        
        
        
    



    
	
        
        
        
        
        

    




    
            
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        

        
                
                
                
                    
                    
                
                
                
                    
                    
                

                
                    
                    
                

                
                    
                    
                
            
        
    







	







	
		
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	
	
		
		
		
		
	

	
		
		
		
		
	

	
		
		
		
		
		
	




    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    


<!-- immo_store_newad_price -> %immo_store_newad_price / %immo_store_newad_price_no_tax -->


    
    
            
            
            
        
    



    
    
            
            
            
        
    



    
    
            
            
            
        
    



	








	
	
	
	
	
	
	
	
	
	
	
	
	
	
		 
		 
		 
	 



,booster_1m_step1_price:"995",booster_1m_step2_price:"1595",booster_1m_step3_price:"1895",booster_1m_step4_price:"2095",booster_3m_step1_price:"2685",booster_3m_step2_price:"4485",booster_3m_step3_price:"5385",booster_3m_step4_price:"5985"},
'null' : [ '' ]
};

var price_info_notpart = {
'33' : { name:"Offres d'emploi", top_list_price:"402", toplist_sms_price:"300", daily_bump_price:"3516", daily_bump30_price:"11040", sub_toplist_price:"3012", gallery_price:"0", gallery30_price:"0", urgent_price:"600", photosup_price:"600", ldv_price:"-1", edit_price:"504", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'2' : { name:"Voitures", top_list_price:"348", toplist_sms_price:"0", daily_bump_price:"2508", daily_bump30_price:"8028", sub_toplist_price:"2508", gallery_price:"1704", gallery30_price:"4512", urgent_price:"504", photosup_price:"600", ldv_price:"-1", edit_price:"456", newad_price_price:"792",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'3' : { name:"Motos", top_list_price:"252", toplist_sms_price:"0", daily_bump_price:"2004", daily_bump30_price:"7524", sub_toplist_price:"2004", gallery_price:"1008", gallery30_price:"3012", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"348", newad_price_price:"396",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'4' : { name:"Caravaning", top_list_price:"300", toplist_sms_price:"0", daily_bump_price:"2256", daily_bump30_price:"9030", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"4512", urgent_price:"702", photosup_price:"1008", ldv_price:"-1", edit_price:"402", newad_price_price:"792",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'5' : { name:"Utilitaires", top_list_price:"348", toplist_sms_price:"0", daily_bump_price:"2508", daily_bump30_price:"8028", sub_toplist_price:"2508", gallery_price:"1704", gallery30_price:"4512", urgent_price:"504", photosup_price:"600", ldv_price:"-1", edit_price:"456", newad_price_price:"792",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'6' : { name:"Equipement Auto", top_list_price:"150", toplist_sms_price:"0", daily_bump_price:"1200", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1200", gallery30_price:"2508", urgent_price:"402", photosup_price:"300", ldv_price:"-1", edit_price:"168", newad_price_price:"180",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'44' : { name:"Equipement Moto", top_list_price:"150", toplist_sms_price:"0", daily_bump_price:"1200", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1200", gallery30_price:"2508", urgent_price:"402", photosup_price:"300", ldv_price:"-1", edit_price:"168", newad_price_price:"180",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'50' : { name:"Equipement Caravaning", top_list_price:"150", toplist_sms_price:"0", daily_bump_price:"1200", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1200", gallery30_price:"2508", urgent_price:"402", photosup_price:"300", ldv_price:"-1", edit_price:"168", newad_price_price:"180",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'7' : { name:"Nautisme", top_list_price:"300", toplist_sms_price:"0", daily_bump_price:"2256", daily_bump30_price:"9030", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"4512", urgent_price:"702", photosup_price:"1008", ldv_price:"-1", edit_price:"348", newad_price_price:"396",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'51' : { name:"Equipement Nautisme", top_list_price:"150", toplist_sms_price:"0", daily_bump_price:"1200", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1200", gallery30_price:"2508", urgent_price:"402", photosup_price:"300", ldv_price:"-1", edit_price:"168", newad_price_price:"180",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'9' : { name:"Ventes immobilières", top_list_price:"402", toplist_sms_price:"300", daily_bump_price:"3012", daily_bump30_price:"10032", sub_toplist_price:"3012", gallery_price:"2004", gallery30_price:"5016", urgent_price:"504", photosup_price:"804", ldv_price:"-1", edit_price:"504", newad_price_price:"960",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'10' : { name:"Locations", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2508", daily_bump30_price:"9030", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"3012", urgent_price:"300", photosup_price:"702", ldv_price:"-1", edit_price:"402", newad_price_price:"960",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'11' : { name:"Colocations", top_list_price:"0", toplist_sms_price:"0", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'13' : { name:"Bureaux & Commerces", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"3000", daily_bump30_price:"8028", sub_toplist_price:"4020", gallery_price:"3012", gallery30_price:"8028", urgent_price:"504", photosup_price:"702", ldv_price:"-1", edit_price:"402", newad_price_price:"960",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'12' : { name:"Locations & Gîtes", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2208", daily_bump30_price:"7524", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"3516", urgent_price:"300", photosup_price:"702", ldv_price:"14100", edit_price:"402", newad_price_price:"960",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'67' : { name:"Chambres d'hôtes", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2208", daily_bump30_price:"7524", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"3516", urgent_price:"300", photosup_price:"702", ldv_price:"100", edit_price:"402", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'68' : { name:"Campings", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2208", daily_bump30_price:"7524", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"3516", urgent_price:"300", photosup_price:"702", ldv_price:"100", edit_price:"402", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'69' : { name:"Hôtels", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2208", daily_bump30_price:"7524", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"3516", urgent_price:"300", photosup_price:"702", ldv_price:"100", edit_price:"402", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'70' : { name:"Hébergements insolites", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2208", daily_bump30_price:"7524", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"3516", urgent_price:"300", photosup_price:"702", ldv_price:"100", edit_price:"402", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'15' : { name:"Informatique", top_list_price:"204", toplist_sms_price:"0", daily_bump_price:"1500", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1200", gallery30_price:"2808", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'43' : { name:"Consoles & Jeux vidéo", top_list_price:"0", toplist_sms_price:"0", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'16' : { name:"Image & Son", top_list_price:"204", toplist_sms_price:"0", daily_bump_price:"1500", daily_bump30_price:"3516", sub_toplist_price:"804", gallery_price:"1200", gallery30_price:"2808", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'17' : { name:"Téléphonie", top_list_price:"0", toplist_sms_price:"0", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'19' : { name:"Ameublement", top_list_price:"204", toplist_sms_price:"0", daily_bump_price:"1200", daily_bump30_price:"2808", sub_toplist_price:"804", gallery_price:"804", gallery30_price:"2412", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'20' : { name:"Electroménager", top_list_price:"204", toplist_sms_price:"0", daily_bump_price:"1200", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1200", gallery30_price:"3012", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'45' : { name:"Arts de la table", top_list_price:"102", toplist_sms_price:"0", daily_bump_price:"504", daily_bump30_price:"1800", sub_toplist_price:"702", gallery_price:"702", gallery30_price:"2508", urgent_price:"102", photosup_price:"300", ldv_price:"-1", edit_price:"204", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'39' : { name:"Décoration", top_list_price:"150", toplist_sms_price:"0", daily_bump_price:"900", daily_bump30_price:"3012", sub_toplist_price:"600", gallery_price:"804", gallery30_price:"2508", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"252", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'46' : { name:"Linge de maison", top_list_price:"102", toplist_sms_price:"0", daily_bump_price:"804", daily_bump30_price:"2508", sub_toplist_price:"702", gallery_price:"906", gallery30_price:"3012", urgent_price:"204", photosup_price:"300", ldv_price:"-1", edit_price:"204", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'21' : { name:"Bricolage", top_list_price:"204", toplist_sms_price:"0", daily_bump_price:"1404", daily_bump30_price:"3516", sub_toplist_price:"804", gallery_price:"1008", gallery30_price:"3012", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'52' : { name:"Jardinage", top_list_price:"204", toplist_sms_price:"0", daily_bump_price:"1500", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1200", gallery30_price:"2808", urgent_price:"401", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'22' : { name:"Vêtements", top_list_price:"0", toplist_sms_price:"0", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'53' : { name:"Chaussures", top_list_price:"0", toplist_sms_price:"0", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'47' : { name:"Accessoires & Bagagerie", top_list_price:"0", toplist_sms_price:"0", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'42' : { name:"Montres & Bijoux", top_list_price:"0", toplist_sms_price:"0", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'23' : { name:"Equipement bébé", top_list_price:"102", toplist_sms_price:"0", daily_bump_price:"504", daily_bump30_price:"1806", sub_toplist_price:"702", gallery_price:"702", gallery30_price:"2208", urgent_price:"204", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'54' : { name:"Vêtements bébé", top_list_price:"102", toplist_sms_price:"0", daily_bump_price:"504", daily_bump30_price:"1806", sub_toplist_price:"702", gallery_price:"702", gallery30_price:"2508", urgent_price:"252", photosup_price:"300", ldv_price:"-1", edit_price:"204", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'25' : { name:"DVD / Films", top_list_price:"102", toplist_sms_price:"0", daily_bump_price:"504", daily_bump30_price:"1806", sub_toplist_price:"702", gallery_price:"702", gallery30_price:"2508", urgent_price:"252", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'26' : { name:"CD / Musique", top_list_price:"102", toplist_sms_price:"0", daily_bump_price:"504", daily_bump30_price:"1806", sub_toplist_price:"702", gallery_price:"702", gallery30_price:"2508", urgent_price:"252", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'27' : { name:"Livres", top_list_price:"102", toplist_sms_price:"0", daily_bump_price:"504", daily_bump30_price:"1806", sub_toplist_price:"702", gallery_price:"702", gallery30_price:"2508", urgent_price:"252", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'28' : { name:"Animaux", top_list_price:"204", toplist_sms_price:"0", daily_bump_price:"1404", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1008", gallery30_price:"3012", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'55' : { name:"Vélos", top_list_price:"204", toplist_sms_price:"0", daily_bump_price:"1500", daily_bump30_price:"3516", sub_toplist_price:"1200", gallery_price:"1008", gallery30_price:"2508", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'29' : { name:"Sports & Hobbies", top_list_price:"204", toplist_sms_price:"0", daily_bump_price:"1200", daily_bump30_price:"3516", sub_toplist_price:"1200", gallery_price:"1200", gallery30_price:"3012", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'30' : { name:"Instruments de musique", top_list_price:"204", toplist_sms_price:"0", daily_bump_price:"1008", daily_bump30_price:"3012", sub_toplist_price:"1008", gallery_price:"804", gallery30_price:"2508", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'40' : { name:"Collection", top_list_price:"150", toplist_sms_price:"0", daily_bump_price:"900", daily_bump30_price:"3012", sub_toplist_price:"600", gallery_price:"804", gallery30_price:"2508", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"252", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'41' : { name:"Jeux & Jouets", top_list_price:"102", toplist_sms_price:"0", daily_bump_price:"804", daily_bump30_price:"2508", sub_toplist_price:"702", gallery_price:"906", gallery30_price:"3012", urgent_price:"102", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'48' : { name:"Vins & Gastronomie", top_list_price:"204", toplist_sms_price:"0", daily_bump_price:"1200", daily_bump30_price:"3012", sub_toplist_price:"1008", gallery_price:"1008", gallery30_price:"2508", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'57' : { name:"Matériel Agricole", top_list_price:"252", toplist_sms_price:"300", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"600",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'58' : { name:"Transport - Manutention", top_list_price:"252", toplist_sms_price:"300", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"600",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'59' : { name:"BTP - Chantier Gros-oeuvre", top_list_price:"252", toplist_sms_price:"300", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"600",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'60' : { name:"Outillage - Matériaux 2nd-oeuvre", top_list_price:"252", toplist_sms_price:"300", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'32' : { name:"Équipements Industriels", top_list_price:"252", toplist_sms_price:"300", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"600",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'61' : { name:"Restauration - Hôtellerie", top_list_price:"252", toplist_sms_price:"300", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'62' : { name:"Fournitures de Bureau", top_list_price:"252", toplist_sms_price:"300", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'63' : { name:"Commerces & Marchés", top_list_price:"252", toplist_sms_price:"300", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'64' : { name:"Matériel Médical", top_list_price:"252", toplist_sms_price:"300", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'34' : { name:"Prestations de services", top_list_price:"300", toplist_sms_price:"300", daily_bump_price:"2208", daily_bump30_price:"7026", sub_toplist_price:"2004", gallery_price:"0", gallery30_price:"0", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"354", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'35' : { name:"Billetterie", top_list_price:"0", toplist_sms_price:"0", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'49' : { name:"Evénements", top_list_price:"252", toplist_sms_price:"300", daily_bump_price:"2412", daily_bump30_price:"6522", sub_toplist_price:"2004", gallery_price:"0", gallery30_price:"0", urgent_price:"402", photosup_price:"300", ldv_price:"-1", edit_price:"354", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'36' : { name:"Cours particuliers", top_list_price:"0", toplist_sms_price:"0", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'65' : { name:"Covoiturage", top_list_price:"0", toplist_sms_price:"0", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'38' : { name:"Autres", top_list_price:"0", toplist_sms_price:"0", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'null' : [ '' ]
};

var price_info_pro = {
'33' : { name:"Offres d'emploi", top_list_price:"402", toplist_sms_price:"", daily_bump_price:"3516", daily_bump30_price:"11040", sub_toplist_price:"3012", gallery_price:"0", gallery30_price:"0", urgent_price:"600", photosup_price:"600", ldv_price:"-1", edit_price:"504", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'2' : { name:"Voitures", top_list_price:"348", toplist_sms_price:"", daily_bump_price:"2508", daily_bump30_price:"8028", sub_toplist_price:"2508", gallery_price:"1704", gallery30_price:"4512", urgent_price:"504", photosup_price:"600", ldv_price:"-1", edit_price:"456", newad_price_price:"792",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'3' : { name:"Motos", top_list_price:"252", toplist_sms_price:"", daily_bump_price:"2004", daily_bump30_price:"7524", sub_toplist_price:"2004", gallery_price:"1008", gallery30_price:"3012", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"348", newad_price_price:"396",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'4' : { name:"Caravaning", top_list_price:"300", toplist_sms_price:"", daily_bump_price:"2256", daily_bump30_price:"9030", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"4512", urgent_price:"702", photosup_price:"1008", ldv_price:"-1", edit_price:"402", newad_price_price:"792",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'5' : { name:"Utilitaires", top_list_price:"348", toplist_sms_price:"", daily_bump_price:"2508", daily_bump30_price:"8028", sub_toplist_price:"2508", gallery_price:"1704", gallery30_price:"4512", urgent_price:"504", photosup_price:"600", ldv_price:"-1", edit_price:"456", newad_price_price:"792",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'6' : { name:"Equipement Auto", top_list_price:"150", toplist_sms_price:"", daily_bump_price:"1200", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1200", gallery30_price:"2508", urgent_price:"402", photosup_price:"300", ldv_price:"-1", edit_price:"168", newad_price_price:"180",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'44' : { name:"Equipement Moto", top_list_price:"150", toplist_sms_price:"", daily_bump_price:"1200", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1200", gallery30_price:"2508", urgent_price:"402", photosup_price:"300", ldv_price:"-1", edit_price:"168", newad_price_price:"180",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'50' : { name:"Equipement Caravaning", top_list_price:"150", toplist_sms_price:"", daily_bump_price:"1200", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1200", gallery30_price:"2508", urgent_price:"402", photosup_price:"300", ldv_price:"-1", edit_price:"168", newad_price_price:"180",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'7' : { name:"Nautisme", top_list_price:"300", toplist_sms_price:"", daily_bump_price:"2256", daily_bump30_price:"9030", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"4512", urgent_price:"702", photosup_price:"1008", ldv_price:"-1", edit_price:"348", newad_price_price:"396",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'51' : { name:"Equipement Nautisme", top_list_price:"150", toplist_sms_price:"", daily_bump_price:"1200", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1200", gallery30_price:"2508", urgent_price:"402", photosup_price:"300", ldv_price:"-1", edit_price:"168", newad_price_price:"180",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'9' : { name:"Ventes immobilières", top_list_price:"402", toplist_sms_price:"", daily_bump_price:"3012", daily_bump30_price:"10032", sub_toplist_price:"3012", gallery_price:"2004", gallery30_price:"5016", urgent_price:"504", photosup_price:"804", ldv_price:"-1", edit_price:"504", newad_price_price:"1140",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'10' : { name:"Locations", top_list_price:"300", toplist_sms_price:"", daily_bump_price:"2508", daily_bump30_price:"9030", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"3012", urgent_price:"300", photosup_price:"702", ldv_price:"-1", edit_price:"402", newad_price_price:"1140",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'11' : { name:"Colocations", top_list_price:"0", toplist_sms_price:"", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'13' : { name:"Bureaux & Commerces", top_list_price:"300", toplist_sms_price:"", daily_bump_price:"3000", daily_bump30_price:"8028", sub_toplist_price:"4020", gallery_price:"3012", gallery30_price:"8028", urgent_price:"504", photosup_price:"702", ldv_price:"-1", edit_price:"402", newad_price_price:"1140",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'12' : { name:"Locations & Gîtes", top_list_price:"300", toplist_sms_price:"", daily_bump_price:"2208", daily_bump30_price:"7524", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"3516", urgent_price:"300", photosup_price:"702", ldv_price:"14100", edit_price:"402", newad_price_price:"1140",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'67' : { name:"Chambres d'hôtes", top_list_price:"300", toplist_sms_price:"", daily_bump_price:"2208", daily_bump30_price:"7524", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"3516", urgent_price:"300", photosup_price:"702", ldv_price:"100", edit_price:"402", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'68' : { name:"Campings", top_list_price:"300", toplist_sms_price:"", daily_bump_price:"2208", daily_bump30_price:"7524", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"3516", urgent_price:"300", photosup_price:"702", ldv_price:"100", edit_price:"402", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'69' : { name:"Hôtels", top_list_price:"300", toplist_sms_price:"", daily_bump_price:"2208", daily_bump30_price:"7524", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"3516", urgent_price:"300", photosup_price:"702", ldv_price:"100", edit_price:"402", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'70' : { name:"Hébergements insolites", top_list_price:"300", toplist_sms_price:"", daily_bump_price:"2208", daily_bump30_price:"7524", sub_toplist_price:"2508", gallery_price:"1506", gallery30_price:"3516", urgent_price:"300", photosup_price:"702", ldv_price:"100", edit_price:"402", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'15' : { name:"Informatique", top_list_price:"204", toplist_sms_price:"", daily_bump_price:"1500", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1200", gallery30_price:"2808", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'43' : { name:"Consoles & Jeux vidéo", top_list_price:"0", toplist_sms_price:"", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'16' : { name:"Image & Son", top_list_price:"204", toplist_sms_price:"", daily_bump_price:"1500", daily_bump30_price:"3516", sub_toplist_price:"804", gallery_price:"1200", gallery30_price:"2808", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'17' : { name:"Téléphonie", top_list_price:"0", toplist_sms_price:"", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'19' : { name:"Ameublement", top_list_price:"204", toplist_sms_price:"", daily_bump_price:"1200", daily_bump30_price:"2808", sub_toplist_price:"804", gallery_price:"804", gallery30_price:"2412", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'20' : { name:"Electroménager", top_list_price:"204", toplist_sms_price:"", daily_bump_price:"1200", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1200", gallery30_price:"3012", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'45' : { name:"Arts de la table", top_list_price:"102", toplist_sms_price:"", daily_bump_price:"504", daily_bump30_price:"1800", sub_toplist_price:"702", gallery_price:"702", gallery30_price:"2508", urgent_price:"102", photosup_price:"300", ldv_price:"-1", edit_price:"204", newad_price_price:"96",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'39' : { name:"Décoration", top_list_price:"150", toplist_sms_price:"", daily_bump_price:"900", daily_bump30_price:"3012", sub_toplist_price:"600", gallery_price:"804", gallery30_price:"2508", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"252", newad_price_price:"96",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'46' : { name:"Linge de maison", top_list_price:"102", toplist_sms_price:"", daily_bump_price:"804", daily_bump30_price:"2508", sub_toplist_price:"702", gallery_price:"906", gallery30_price:"3012", urgent_price:"204", photosup_price:"300", ldv_price:"-1", edit_price:"204", newad_price_price:"48",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'21' : { name:"Bricolage", top_list_price:"204", toplist_sms_price:"", daily_bump_price:"1404", daily_bump30_price:"3516", sub_toplist_price:"804", gallery_price:"1008", gallery30_price:"3012", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'52' : { name:"Jardinage", top_list_price:"204", toplist_sms_price:"", daily_bump_price:"1500", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1200", gallery30_price:"2808", urgent_price:"401", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'22' : { name:"Vêtements", top_list_price:"0", toplist_sms_price:"", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'53' : { name:"Chaussures", top_list_price:"0", toplist_sms_price:"", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'47' : { name:"Accessoires & Bagagerie", top_list_price:"0", toplist_sms_price:"", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'42' : { name:"Montres & Bijoux", top_list_price:"0", toplist_sms_price:"", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'23' : { name:"Equipement bébé", top_list_price:"102", toplist_sms_price:"", daily_bump_price:"504", daily_bump30_price:"1806", sub_toplist_price:"702", gallery_price:"702", gallery30_price:"2208", urgent_price:"204", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"96",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'54' : { name:"Vêtements bébé", top_list_price:"102", toplist_sms_price:"", daily_bump_price:"504", daily_bump30_price:"1806", sub_toplist_price:"702", gallery_price:"702", gallery30_price:"2508", urgent_price:"252", photosup_price:"300", ldv_price:"-1", edit_price:"204", newad_price_price:"48",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'25' : { name:"DVD / Films", top_list_price:"102", toplist_sms_price:"", daily_bump_price:"504", daily_bump30_price:"1806", sub_toplist_price:"702", gallery_price:"702", gallery30_price:"2508", urgent_price:"252", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"48",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'26' : { name:"CD / Musique", top_list_price:"102", toplist_sms_price:"", daily_bump_price:"504", daily_bump30_price:"1806", sub_toplist_price:"702", gallery_price:"702", gallery30_price:"2508", urgent_price:"252", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"48",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'27' : { name:"Livres", top_list_price:"102", toplist_sms_price:"", daily_bump_price:"504", daily_bump30_price:"1806", sub_toplist_price:"702", gallery_price:"702", gallery30_price:"2508", urgent_price:"252", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"96",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'28' : { name:"Animaux", top_list_price:"204", toplist_sms_price:"", daily_bump_price:"1404", daily_bump30_price:"3516", sub_toplist_price:"1008", gallery_price:"1008", gallery30_price:"3012", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'55' : { name:"Vélos", top_list_price:"204", toplist_sms_price:"", daily_bump_price:"1500", daily_bump30_price:"3516", sub_toplist_price:"1200", gallery_price:"1008", gallery30_price:"2508", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'29' : { name:"Sports & Hobbies", top_list_price:"204", toplist_sms_price:"", daily_bump_price:"1200", daily_bump30_price:"3516", sub_toplist_price:"1200", gallery_price:"1200", gallery30_price:"3012", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'30' : { name:"Instruments de musique", top_list_price:"204", toplist_sms_price:"", daily_bump_price:"1008", daily_bump30_price:"3012", sub_toplist_price:"1008", gallery_price:"804", gallery30_price:"2508", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'40' : { name:"Collection", top_list_price:"150", toplist_sms_price:"", daily_bump_price:"900", daily_bump30_price:"3012", sub_toplist_price:"600", gallery_price:"804", gallery30_price:"2508", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"252", newad_price_price:"96",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'41' : { name:"Jeux & Jouets", top_list_price:"102", toplist_sms_price:"", daily_bump_price:"804", daily_bump30_price:"2508", sub_toplist_price:"702", gallery_price:"906", gallery30_price:"3012", urgent_price:"102", photosup_price:"300", ldv_price:"-1", edit_price:"300", newad_price_price:"96",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'48' : { name:"Vins & Gastronomie", top_list_price:"204", toplist_sms_price:"", daily_bump_price:"1200", daily_bump30_price:"3012", sub_toplist_price:"1008", gallery_price:"1008", gallery30_price:"2508", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"300", newad_price_price:"96",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'57' : { name:"Matériel Agricole", top_list_price:"252", toplist_sms_price:"", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"600",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'58' : { name:"Transport - Manutention", top_list_price:"252", toplist_sms_price:"", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"600",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'59' : { name:"BTP - Chantier Gros-oeuvre", top_list_price:"252", toplist_sms_price:"", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"600",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'60' : { name:"Outillage - Matériaux 2nd-oeuvre", top_list_price:"252", toplist_sms_price:"", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'32' : { name:"Équipements Industriels", top_list_price:"252", toplist_sms_price:"", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"600",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'61' : { name:"Restauration - Hôtellerie", top_list_price:"252", toplist_sms_price:"", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'62' : { name:"Fournitures de Bureau", top_list_price:"252", toplist_sms_price:"", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'63' : { name:"Commerces & Marchés", top_list_price:"252", toplist_sms_price:"", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'64' : { name:"Matériel Médical", top_list_price:"252", toplist_sms_price:"", daily_bump_price:"2508", daily_bump30_price:"7524", sub_toplist_price:"2208", gallery_price:"1812", gallery30_price:"4512", urgent_price:"402", photosup_price:"504", ldv_price:"-1", edit_price:"354", newad_price_price:"360",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'34' : { name:"Prestations de services", top_list_price:"300", toplist_sms_price:"", daily_bump_price:"2208", daily_bump30_price:"7026", sub_toplist_price:"2004", gallery_price:"0", gallery30_price:"0", urgent_price:"402", photosup_price:"402", ldv_price:"-1", edit_price:"354", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'35' : { name:"Billetterie", top_list_price:"0", toplist_sms_price:"", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'49' : { name:"Evénements", top_list_price:"252", toplist_sms_price:"", daily_bump_price:"2412", daily_bump30_price:"6522", sub_toplist_price:"2004", gallery_price:"0", gallery30_price:"0", urgent_price:"402", photosup_price:"300", ldv_price:"-1", edit_price:"354", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'36' : { name:"Cours particuliers", top_list_price:"0", toplist_sms_price:"", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'65' : { name:"Covoiturage", top_list_price:"0", toplist_sms_price:"", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'38' : { name:"Autres", top_list_price:"0", toplist_sms_price:"", daily_bump_price:"0", daily_bump30_price:"0", sub_toplist_price:"0", gallery_price:"0", gallery30_price:"0", urgent_price:"0", photosup_price:"0", ldv_price:"-1", edit_price:"0", newad_price_price:"0",booster_1m_step1_price:"-1",booster_1m_step2_price:"-1",booster_1m_step3_price:"-1",booster_1m_step4_price:"-1",booster_3m_step1_price:"-1",booster_3m_step2_price:"-1",booster_3m_step3_price:"-1",booster_3m_step4_price:"-1" },
'null': [ '' ]
};

var current_tva_rate = "20.0";
var current_tva_ratio = "1.200";

/* Carto */
   
var baseUrlApi = "https://api.leboncoin.fr",
    hereUrl = "https://1.base.maps.api.here.com/maptile/2.1/";
    hereUrlAerial = "https://1.aerial.maps.api.here.com/maptile/2.1/";
    hereAppID = "AX0qTYPn65pnj14wDAAW",
    hereAppCode = "0_qKOBAY2USElJzaHsu-eA",
    apiAppKey = "e3f533055f5bab5548a4125f2c983204",
    baseUrlImgs = "https://static.leboncoin.fr";

var categoriesWithEnabledGeocoding = {
    2 : { 's': true, 'k': true },
    3 : { 's': true, 'k': true },
    4 : { 's': true, 'k': true },
    5 : { 's': true, 'k': true },
    6 : { 's': true, 'k': true },
    7 : { 's': true, 'k': true },
    9 : { 's': true, 'k': true },
    10 : { 'u': true, 'h': true },
    11 : { 'u': true, 'h': true },
    12 : { 'u': true, 'h': true },
    13 : { 'u': true, 's': true, 'k': true },
    15 : { 's': true, 'k': true },
    16 : { 's': true, 'k': true },
    17 : { 's': true, 'k': true },
    19 : { 's': true, 'k': true },
    20 : { 's': true, 'k': true },
    21 : { 's': true, 'k': true },
    22 : { 's': true, 'k': true },
    23 : { 's': true, 'k': true },
    25 : { 's': true, 'k': true },
    26 : { 's': true, 'k': true },
    27 : { 's': true, 'k': true },
    28 : { 's': true, 'k': true },
    29 : { 's': true, 'k': true },
    30 : { 's': true, 'k': true },
    32 : { 's': true, 'k': true },
    33 : { 's': true, 'k': true },
    34 : { 's': true, 'k': true },
    35 : { 's': true, 'k': true },
    36 : { 's': true, 'k': true },
    37 : { 's': true, 'k': true },
    38 : { 's': true, 'k': true },
    39 : { 's': true, 'k': true },
    40 : { 's': true, 'k': true },
    41 : { 's': true, 'k': true },
    42 : { 's': true, 'k': true },
    43 : { 's': true, 'k': true },
    44 : { 's': true, 'k': true },
    45 : { 's': true, 'k': true },
    46 : { 's': true, 'k': true },
    47 : { 's': true, 'k': true },
    48 : { 's': true, 'k': true },
    49 : { 's': true, 'k': true },
    50 : { 's': true, 'k': true },
    51 : { 's': true, 'k': true },
    52 : { 's': true, 'k': true },
    53 : { 's': true, 'k': true },
    54 : { 's': true, 'k': true },
    55 : { 's': true, 'k': true },
    57 : { 's': true, 'k': true },
    58 : { 's': true, 'k': true },
    59 : { 's': true, 'k': true },
    60 : { 's': true, 'k': true },
    61 : { 's': true, 'k': true },
    62 : { 's': true, 'k': true },
    63 : { 's': true, 'k': true },
    64 : { 's': true, 'k': true },
    65 : { 's': true, 'k': true },
    67 : { 'u': true, 'h': true },
    68 : { 'u': true, 'h': true },
    69 : { 'u': true, 'h': true },
    70 : { 'u': true, 'h': true }
};

var typesWithEnabledGeocoding = {
    'u' : { 10 : true, 11 : true, 12 : true, 13 : true, 67 : true, 68 : true, 69 : true, 70 : true },
    's' : { 2 : true, 3 : true, 4 : true, 5 : true, 6 : true, 7 : true, 9 : true, 13 : true, 15 : true, 16 : true, 17 : true, 19 : true, 20 : true, 21 : true, 22 : true, 23 : true, 25 : true, 26 : true, 27 : true, 28 : true, 29 : true, 30 : true, 32 : true, 33 : true, 34 : true, 35 : true, 36 : true, 37 : true, 38 : true, 39 : true, 40 : true, 41 : true, 42 : true, 43 : true, 44 : true, 45 : true, 46 : true, 47 : true, 48 : true, 49 : true, 50 : true, 51 : true, 52 : true, 53 : true, 54 : true, 55 : true, 57 : true, 58 : true, 59 : true, 60 : true, 61 : true, 62 : true, 63 : true, 64 : true, 65 : true },
    'k' : { 2 : true, 3 : true, 4 : true, 5 : true, 6 : true, 7 : true, 9 : true, 13 : true, 15 : true, 16 : true, 17 : true, 19 : true, 20 : true, 21 : true, 22 : true, 23 : true, 25 : true, 26 : true, 27 : true, 28 : true, 29 : true, 30 : true, 32 : true, 33 : true, 34 : true, 35 : true, 36 : true, 37 : true, 38 : true, 39 : true, 40 : true, 41 : true, 42 : true, 43 : true, 44 : true, 45 : true, 46 : true, 47 : true, 48 : true, 49 : true, 50 : true, 51 : true, 52 : true, 53 : true, 54 : true, 55 : true, 57 : true, 58 : true, 59 : true, 60 : true, 61 : true, 62 : true, 63 : true, 64 : true, 65 : true },
    'h' : { 10 : true, 11 : true, 12 : true, 67 : true, 68 : true, 69 : true, 70 : true }
};

var meetingpointDepartments = ["75"];


