var fm_data = {"title":"FLOSS Manuals's Storefront","url":"http:\/\/stores.lulu.com\/flossmanuals","items":[{"title":"Inkscape","url":"http:\/\/www.lulu.com\/content\/4617381","description":"The premier vector graphic editor for OSX, Linux, Windows. The manual is written by the official Inkscape documentation team and friends.","thumb":"http:\/\/www.lulu.com\/items\/volume_64\/4617000\/4617381\/1\/preview\/promo_4617381.jpg","date":"Fri, 24 Oct 2008 18:21:59"},{"title":"How to Bypass Internet Censorship","url":"http:\/\/www.lulu.com\/content\/11017462","description":"Inform yourself on how internet censorship works and how to route around it with free software. Includes an excellent overview of the techniques and tools for beginners and advanced users..","thumb":"http:\/\/www.lulu.com\/items\/volume_64\/4904000\/4904448\/1\/preview\/promo_4904448.jpg","date":"Fri, 15 Nov 2008 18:21:59"},{"title":"FLOSS Manuals","url":"http:\/\/www.lulu.com\/content\/4582230","description":"Learn how to use FLOSS Manuals. Includes essay by founder Adam Hyde about why we need free documentation.","thumb":"http:\/\/www.lulu.com\/items\/volume_64\/4582000\/4582230\/1\/preview\/promo_4582230.jpg","date":"Tue, 21 Oct 2008 20:57:28"},{"title":"SUGAR USERS GUIDE","url":"http:\/\/www.lulu.com\/content\/3865497","description":"Sugar is most well known as being the Desktop on the One Laptop per Child computers. However you can also install Sugar on your own computer. Learn more about this exciting new approach to learning how to use a computer...","thumb":"http:\/\/www.lulu.com\/items\/volume_64\/3865000\/3865497\/6\/preview\/promo_3865497.jpg","date":"Fri, 10 Oct 2008 16:59:10"},{"title":"OLPC LAPTOP USERS GUIDE","url":"http:\/\/www.lulu.com\/content\/4439260","description":"The book to go with the OLPC hardware. Good with the Give 1 Get 1 program.","thumb":"http:\/\/www.lulu.com\/items\/volume_64\/3865000\/3865224\/9\/preview\/promo_3865224.jpg","date":"Fri, 10 Oct 2008 16:53:00"},{"title":"INTRODUCTION TO THE GNU/LINUX COMMAND LINE","url":"http:\/\/www.lulu.com\/content\/6521146","description":"Learn the power of the command line! Written for the beginner by friendly experts.","thumb":"http:\/\/www.lulu.com\/items\/volume_64\/6521000\/6521146\/1\/preview\/promo_6521146.jpg","date":"Fri, 10 Oct 2008 16:53:00"},{"title":"Open Translation Tools","url":"http:\/\/www.lulu.com\/content\/7339299","description":"A handbook for the Open Translation Movement","thumb":"http:\/\/www.lulu.com\/items\/volume_65\/7339000\/7339299\/1/preview\/promo_7339299.jpg","date":"Fri, 29 June 2009 18:00:00"},{"title":"Video Subtitling","url":"http:\/\/www.lulu.com\/content\/7339340","description":"A handbook for creating video subtitles","thumb":"http:\/\/www.lulu.com\/items\/volume_65\/7339000\/7339340\/1\/preview\/promo_7339340.jpg","date":"Fri, 29 June 2009 18:30:00"},{"title":"CiviCRM","url":"http:\/\/www.lulu.com\/content\/7098434","description":"A fantastic guide to learning how to use the premier Constituent Relationship Manager - CiviCRM. Ideally suited for non-profit organisations.","thumb":"http:\/\/www.lulu.com\/items\/volume_65\/7098000\/7098434\/1\/preview\/promo_7098434.jpg","date":"Fri, 9 May 2009 18:00:00"},{"title":"FIREFOX","url":"http:\/\/www.lulu.com\/content\/6480979","description":"Learn how to get more from the worlds best browser!","thumb":"http:\/\/www.lulu.com\/items\/volume_64\/6480000\/6480979\/3\/preview\/promo_6480979.jpg","date":"Fri, 10 Oct 2008 16:53:00"}]};

var FM = {
    'config': {
        'show': 'normal',  // normal, random
        'items': 2,
	'slideshow': false,
	'timeout': 5,
	'preferred': null,
	'paging': true,
	'next_desc': 'more books &gt;&gt;',
	"prev_desc": "&lt;&lt; back"

    },

    current_page: 0,
    first_run: true,

    'previous_page': function() {
	if(!(FM.first_run && FM.config.preferred))
	    FM.current_page -= 1;

	FM.redraw();
    },

    'next_page': function() {
	if(!(FM.first_run && FM.config.preferred))
	    FM.current_page += 1;

	FM.redraw();
    },

    'create_item': function(i) {
       var s = '<li class="lulu-item">';
       s += '<img class="lulu-item-thumbnail" src="' + fm_data.items[i].thumb + '" />';
       s += '<h2 class="lulu-item-title"><a href="' + fm_data.items[i].url + '">' + fm_data.items[i].title + '</a></h2>';
       s += '<div class="lulu-item-description">' + fm_data.items[i].description + '</div>';
       s += '<a class="lulu-item-buynow" href="' + fm_data.items[i].url + '">Buy Now!</a>';
       s += '</li>';

       return s;
    },

    'show': function () {
	var s = '';

	if(FM.config.preferred != null && FM.first_run == true) {
	    for(var i = 0; i < FM.config.preferred.length; i++) {
		for(var k = 0; k < fm_data.items.length; k++ ) {
		    if(FM.config.preferred[i].toLowerCase() == fm_data.items[k]["title"].toLowerCase()) {
			s += FM.create_item(k);
		    }
		}
	    }
	} else {
	    for (var i = FM.current_page*FM.config.items+0; i < FM.current_page*FM.config.items+FM.config.items; i++) {
		if(fm_data.items[i])
		    s += FM.create_item(i);
	    }
	}
	
        if(FM.config.paging) {
	    s += '<div id="lulu-more">';
	    if(FM.current_page != 0)
   		s += '<a class="more" href="javascript:void(0)" onclick="FM.previous_page()">'+FM.config.prev_desc+'</a><br/>';
	    
	    if((1+FM.current_page)*FM.config.items < fm_data.items.length) 
   		s += '<a class="more" href="javascript:void(0)" onclick="FM.next_page()">'+FM.config.next_desc+'</a>';
	    s += '</div>';
	}

	return s;
    },

    'redraw': function() {
	FM.first_run = false;
	var _elem = document.getElementById("lulu-storefront-items");

	if(_elem) {
	    _elem.innerHTML = FM.show();
	}
    },

    'interval': function() {
	if(!FM.first_run) {
	    if((FM.current_page+1)*FM.config.items < fm_data.items.length) 
		FM.current_page += 1;
	    else
		FM.current_page = 0;
	}
	
	FM.redraw();
    },

    'init': function(config) {
        if(config) {
            for(var k in config) {
		FM.config[k] = config[k];
	    }
	}

	if(FM.config["show"] == "random") {
	    var new_list = new Array();

	    while(new_list.length != fm_data.items.length) {
		while(1) {
		    var _r     = Math.floor(Math.random()*fm_data.items.length);

		    if(fm_data.items[_r] != null) {
			new_list.push(fm_data.items[_r]);
			fm_data.items[_r] = null;
			break;
		    }
		}
	    }
	    fm_data.items = new_list;
	}

	FM.first_run = true;
        document.write('<div id="lulu-storefront">')
        document.write('<h1 id="lulu-storefront-title"><a href="' + fm_data.url + '">' + fm_data.title + '</a></h1>');
        document.write('<ul id="lulu-storefront-items">');

	document.write(FM.show());

        document.write('</ul>');
        document.write('</div>');

	if(FM.config.slideshow) {
	    setInterval('FM.interval()', FM.config.timeout*1000);
	}

	if(FM.config.paging) {
	    FM.current_page = 0;
	}
	
    }
};


