/****************************************************************************
	media-queries.js

	(c) 2015, FCOO

	https://github.com/FCOO/media-queries
	https://github.com/FCOO

****************************************************************************/

;(function ($, window, document, undefined) {
	"use strict";


	function MediaQueries( options ) {
		this.options = $.extend({
			//Default options = Standard desttop screen
			referenceScreen: { 
				width				: 1366,
				height			: 768,
				diagonal_inc: 20
			}
		}, options || {} );

		var docEl = document.documentElement;
		this.ua		= navigator.userAgent;
		this.devicePixelRatio = ('devicePixelRatio' in window) ? devicePixelRatio : 'unsupported';
		this.screen_width		= screen.width;
		this.screen_height	=	screen.height;
		this.client_width		= docEl.clientWidth;
		this.client_width		= docEl.clientHeight;
		
		this.screen_width_em	= this.screen_width/16;
		this.screen_height_em	=	this.screen_height/16;

		this.dpi = 96;
		for (var dpi=1; dpi<400; dpi++ )
			if ( Modernizr.mq('(resolution: '+dpi+'dpi)') ){
				this.dpi = dpi;
				break;
			}
		this.dpr = 1;
		for (var dpr=1; dpr<4; dpr=dpr+0.1 )
			if ( Modernizr.mq('(-webkit-device-pixel-ratio: '+dpr+')') ){
				this.dpr = dpr;
				break;
			}

		this.screen_diagonal = Math.sqrt( Math.pow(this.screen_width, 2) + Math.pow(this.screen_height,2) );
		this.screen_diagonal_inc = this.screen_diagonal/this.dpi; //Best guest !

//		this.screen_diagonal_dpi = this.screen_diagonal/this.screen_diagonal_inc;
//console.log(this.dpi, this.screen_diagonal_dpi);

		//Calculate the diagonal and dpi for the reference screen
		var ref_screen_diagonal = Math.sqrt( Math.pow(this.options.referenceScreen.width, 2) + Math.pow(this.options.referenceScreen.height, 2) );
		this.ref_dpi = ref_screen_diagonal/this.options.referenceScreen.diagonal_inc;
		
		this.scale = (this.dpi / this.ref_dpi)*100;


	/*
		var ref_screen_diagonal_cm = 20*2.54;
		var ref_screen_diagonal = Math.sqrt(1366*1366 + 768*768);;
		var ref_dpcm = ref_screen_diagonal/ref_screen_diagonal_cm;
		var screen_dpcm = screen_diagonal/screen_diagonal_cm;

		var rem = screen_dpcm / ref_dpcm;
	info += '<tr><td>ref_dpcm</td><td>'+ref_dpcm+'</td></tr>';
	info += '<tr><td>screen_dpcm</td><td>'+screen_dpcm+'</td></tr>';

//		$('html').css('font-size', dpi/96*100 + '%');
		$('html').css('font-size', rem*100 + '%');
//	}


	NIELS.screen_dim_width_cm = NIELS.screen_width/dpi*2.54;
*/
	

	
	
	}
  
  // expose access to the constructor
	window.fcoo = window.fcoo || {};
	window.fcoo.MediaQueries = MediaQueries;


	//Extend the prototype
	window.fcoo.MediaQueries.prototype = {

		//myMethod
		myMethod: function( arg1, arg2 ){
		},
		


	};


	/******************************************
	Initialize/ready 
	*******************************************/
	$(function() { //"$( function() { ... });" is short for "$(document).ready( function(){...});"
		//Events to detect orientation
		$( window ).on( "orientationchange", function( event ) {
			$( "#orientation" ).text( "This device is in " + event.orientation + " mode!" );
		});
 
var mq = new window.fcoo.MediaQueries();
		// You can also manually force this event to fire.
		$( window ).orientationchange();

/*!
 * TITLE:    Tests for MQtest.io
 * AUTHOR:   http://viljamis.com
 * VERSION:  0.1
 *
 * Some parts of the tests adopted from
 * Quirksmode.org, BBC's Device Reporter and
 * Andrew Hedges's Aspect Ratio Calculator.
 *
 * Thank you @ppk, @dblooman and @segdeha.
 *
*/	var docEl = document.documentElement;
		window.NIELS = {
			docEl	: docEl,
			ua		: navigator.userAgent,
			ratio	: ('devicePixelRatio' in window) ? devicePixelRatio : 'unsupported',
			screen_width	: screen.width,
			screen_height	:	screen.height,
//			mq_step = 10,
//			maximumDPI = 450,
//			respondList,
//			log,
//			logString,
//			iterations = 0,
//			resizeTimer = null
			docW	:	docEl.clientWidth,
			docH	:	docEl.clientHeight
		};
		$.extend(window.NIELS , {
			screen_width_em		: window.NIELS.screen_width/16,
			screen_height_em	:	window.NIELS.screen_height/16,
		});

/*
	log('<li>width <b>' + docW + 'px / ' + docW / 16 + 'em</b></li>');
  log('<li>height <b>' + docH + 'px / ' + docH / 16 + 'em</b></li>');
  log('<li>device-width <b>' + w + 'px / ' + w / 16 + 'em</b></li>');
  log('<li>device-height <b>' + h + 'px / '  + h / 16 + 'em</b></li>');
  log('<li>device-pixel-ratio <b>' + ratio + '</b></li>');
*/
	var info = '<table border=0>';

	info += '<tr><td>screen width</td><td>'+NIELS.screen_width +'</td></tr>';
	info += '<tr><td>screen height</td><td>'+NIELS.screen_height	 +'</td></tr>';

	var deviceWidth = 300;
	for (var i=0; i<4000; i++ )
		if ( Modernizr.mq('(device-width: '+i+'px)') ){
			deviceWidth = i;
			break;
		}
	info += '<tr><td>device-width</td><td>'+deviceWidth	 +'</td></tr>';

	
	
	var dpi = 96;
	for (var i=1; i<400; i++ )
		if ( Modernizr.mq('(resolution: '+i+'dpi)') ){
			dpi = i;
			break;
		}
	
	info += '<tr><td>resolution</td><td>'+dpi+'dpi</td></tr>';

	window.NIELS.dpi = dpi;
//	$('#adjust_buttons').css('font-size', dpi/96 + 'rem');
	var screen_diagonal = Math.sqrt(NIELS.screen_width*NIELS.screen_width + NIELS.screen_height*NIELS.screen_height);
	var screen_diagonal_cm = screen_diagonal/dpi*2.54;
//	if (dpi > 96){
		var ref_screen_diagonal_cm = 20*2.54;
		var ref_screen_diagonal = Math.sqrt(1366*1366 + 768*768);;
		var ref_dpcm = ref_screen_diagonal/ref_screen_diagonal_cm;
		var screen_dpcm = screen_diagonal/screen_diagonal_cm;
		var rem = screen_dpcm / ref_dpcm;
	info += '<tr><td>ref_dpcm</td><td>'+ref_dpcm+'</td></tr>';
	info += '<tr><td>screen_dpcm</td><td>'+screen_dpcm+'</td></tr>';

	info += '<tr><td>rem*100</td><td>'+rem*100+'</td></tr>';
	info += '<tr><td>mq.scale</td><td>'+mq.scale+'</td></tr>';

//		$('html').css('font-size', dpi/96*100 + '%');
		$('html').css('font-size', rem*100 + '%');
//	}

	var dpr = 1;
	for (var i=1; i<4; i=i+0.1 )
		if ( Modernizr.mq('(-webkit-device-pixel-ratio: '+i+')') ){
			dpr = i;
			break;
		}

	NIELS.screen_dim_width_cm = NIELS.screen_width/dpi*2.54;

	info += '<tr><td>Screen diagonal</td><td>'+screen_diagonal_cm+' cm</td></tr>';


	info += '<tr><td>-webkit-device-pixel-ratio</td><td>'+dpr +'</td></tr>';
	/*
	http://www.w3schools.com: 97% of our visitors have a screen resolution of 1024x768 pixels or higher:
	Google: > 30% has 1366*768

	*/





		console.log(window.NIELS);

	info += '</table>';
	$('#info').html(info);		


/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-adownload-ambientlight-animation-apng-appearance-applicationcache-audio-audioloop-audiopreload-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-batteryapi-beacon-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-blobconstructor-bloburls-blobworkers-borderimage-borderradius-boxshadow-boxsizing-canvas-canvasblending-canvastext-canvaswinding-capture-checked-classlist-contains-contenteditable-contextmenu-cookies-cors-createelementattrs_createelement_attrs-cssall-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-customevent-customprotocolhandler-dart-datachannel-datalistelem-dataset-datauri-dataview-dataworkers-details-devicemotion_deviceorientation-directory-display_runin-displaytable-documentfragment-ellipsis-emoji-es5-es5array-es5date-es5function-es5object-es5string-es5syntax-es5undefined-es6array-es6math-es6number-es6object-es6string-eventlistener-eventsource-exiforientation-fetch-fileinput-filereader-filesystem-flash-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-formattribute-formvalidation-framed-fullscreen-gamepads-generatedcontent-generators-geolocation-getrandomvalues-getusermedia-hashchange-hidden-hiddenscroll-history-hsla-htmlimports-ie8compat-indexeddb-indexeddbblob-inlinesvg-input-inputformaction-inputformenctype-inputformmethod-inputformtarget-inputtypes-intl-jpeg2000-jpegxr-json-lastchild-localizednumber-localstorage-lowbandwidth-lowbattery-matchmedia-mathml-mediaqueries-microdata-multiplebgs-mutationobserver-notification-nthchild-objectfit-olreversed-oninput-opacity-outputelem-overflowscrolling-pagevisibility-peerconnection-performance-picture-placeholder-pointerevents-pointerlock-postmessage-preserve3d-progressbar_meter-promises-proximity-queryselector-quotamanagement-regions-requestanimationframe-requestautocomplete-rgba-ruby-sandbox-scriptasync-scriptdefer-seamless-search-serviceworker-sessionstorage-shapes-sharedworkers-siblinggeneral-sizes-smil-speechrecognition-speechsynthesis-srcdoc-srcset-strictmode-stylescoped-subpixelfont-supports-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-target-template-templatestrings-textalignlast-textareamaxlength-textshadow-texttrackapi_track-time-todataurljpeg_todataurlpng_todataurlwebp-touchevents-transferables-typedarrays-unicode-unicoderange-unknownelements-urlparser-userdata-userselect-vibrate-video-videoautoplay-videoloop-videopreload-vml-webaudio-webgl-webglextensions-webintents-webp-webpalpha-webpanimation-webplossless_webp_lossless-websockets-websocketsbinary-websqldatabase-webworkers-willchange-wrapflow-xhr2-xhrresponsetype-xhrresponsetypearraybuffer-xhrresponsetypeblob-xhrresponsetypedocument-xhrresponsetypejson-xhrresponsetypetext-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-shiv-testallprops-testprop-teststyles !*/
	
	}); //End of initialize/ready
	//******************************************


}(jQuery, this, document));