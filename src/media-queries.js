/****************************************************************************
	media-queries.js

	(c) 2015, FCOO

	https://github.com/FCOO/media-queries
	https://github.com/FCOO

****************************************************************************/

;(function ($, window, document, undefined) {
	"use strict";


	var plugin_count = 1000;

	function mediaQueries( $elem, options, plugin_count) {
		this.plugin_count = plugin_count;
		this.options = $.extend({
			//Default options
		}, options || {} );


	
	}
  
  // expose access to the constructor
	window.fcoo = window.fcoo || {};
	window.fcoo.mediaQueries = mediaQueries;


	//Extend the prototype
	window.fcoo.mediaQueries.prototype = {

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
	var info = '';


	var dpi = 96;
	for (var i=1; i<400; i++ )
		if ( Modernizr.mq('(resolution: '+i+'dpi)') ){
			dpi = i;
			break;
		}
	
	info += '<br>resolution='+dpi+'dpi';

	window.NIELS.dpi = dpi;
//	$('#adjust_buttons').css('font-size', dpi/96 + 'rem');
	$('html').css('font-size', dpi/96*100 + '%');

	var dpr = 1;
	for (var i=1; i<4; i=i+0.1 )
		if ( Modernizr.mq('(-webkit-device-pixel-ratio: '+i+')') ){
			dpr = i;
			//break;
		}


	info += '<br>-webkit-device-pixel-ratio='+dpr;
	/*
	http://www.w3schools.com: 97% of our visitors have a screen resolution of 1024x768 pixels or higher:
	Google: > 30% has 1366*768

	*/

	window.NIELS.screen_dim_width_cm = window.NIELS.screen_width/dpi*2.54;



		console.log(window.NIELS);

	$('#info').html(info);		


/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-adownload-ambientlight-animation-apng-appearance-applicationcache-audio-audioloop-audiopreload-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-batteryapi-beacon-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-blobconstructor-bloburls-blobworkers-borderimage-borderradius-boxshadow-boxsizing-canvas-canvasblending-canvastext-canvaswinding-capture-checked-classlist-contains-contenteditable-contextmenu-cookies-cors-createelementattrs_createelement_attrs-cssall-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-customevent-customprotocolhandler-dart-datachannel-datalistelem-dataset-datauri-dataview-dataworkers-details-devicemotion_deviceorientation-directory-display_runin-displaytable-documentfragment-ellipsis-emoji-es5-es5array-es5date-es5function-es5object-es5string-es5syntax-es5undefined-es6array-es6math-es6number-es6object-es6string-eventlistener-eventsource-exiforientation-fetch-fileinput-filereader-filesystem-flash-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-formattribute-formvalidation-framed-fullscreen-gamepads-generatedcontent-generators-geolocation-getrandomvalues-getusermedia-hashchange-hidden-hiddenscroll-history-hsla-htmlimports-ie8compat-indexeddb-indexeddbblob-inlinesvg-input-inputformaction-inputformenctype-inputformmethod-inputformtarget-inputtypes-intl-jpeg2000-jpegxr-json-lastchild-localizednumber-localstorage-lowbandwidth-lowbattery-matchmedia-mathml-mediaqueries-microdata-multiplebgs-mutationobserver-notification-nthchild-objectfit-olreversed-oninput-opacity-outputelem-overflowscrolling-pagevisibility-peerconnection-performance-picture-placeholder-pointerevents-pointerlock-postmessage-preserve3d-progressbar_meter-promises-proximity-queryselector-quotamanagement-regions-requestanimationframe-requestautocomplete-rgba-ruby-sandbox-scriptasync-scriptdefer-seamless-search-serviceworker-sessionstorage-shapes-sharedworkers-siblinggeneral-sizes-smil-speechrecognition-speechsynthesis-srcdoc-srcset-strictmode-stylescoped-subpixelfont-supports-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-target-template-templatestrings-textalignlast-textareamaxlength-textshadow-texttrackapi_track-time-todataurljpeg_todataurlpng_todataurlwebp-touchevents-transferables-typedarrays-unicode-unicoderange-unknownelements-urlparser-userdata-userselect-vibrate-video-videoautoplay-videoloop-videopreload-vml-webaudio-webgl-webglextensions-webintents-webp-webpalpha-webpanimation-webplossless_webp_lossless-websockets-websocketsbinary-websqldatabase-webworkers-willchange-wrapflow-xhr2-xhrresponsetype-xhrresponsetypearraybuffer-xhrresponsetypeblob-xhrresponsetypedocument-xhrresponsetypejson-xhrresponsetypetext-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-shiv-testallprops-testprop-teststyles !*/
	
	}); //End of initialize/ready
	//******************************************


}(jQuery, this, document));