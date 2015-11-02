/***************************************************************************
	media-queries.js, 

	(c) 2015, FCOO

	https://github.com/FCOO/media-queries
	https://github.com/FCOO

****************************************************************************/

;(function ($, window, document, undefined) {
	"use strict";
	
	//Create fcoo-namespace
	window.fcoo = window.fcoo || {};

	//If fcoo.namespace() is defined create a name-space
	var ns = window.fcoo.namespace ? window.fcoo.namespace(''/*Enter the fcoo-namespace here*/) : window.fcoo; 
	//or var ns = window;

	var plugin_count = 1000;

	function MediaQueries( options, plugin_count) {
		this.plugin_count = plugin_count;

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
  		this.devicePixelRatio = ('devicePixelRatio' in window) ? window.devicePixelRatio : 'unsupported';
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

		//Calculate the diagonal and dpi for the reference screen
		var ref_screen_diagonal = Math.sqrt( Math.pow(this.options.referenceScreen.width, 2) + Math.pow(this.options.referenceScreen.height, 2) );
		this.ref_dpi = ref_screen_diagonal/this.options.referenceScreen.diagonal_inc;
		
		//The scale is best guest for a scale (eq. html.style.font-size=this.scale) of the screen to have elements the same size as on the reference screen
		this.scale = (this.dpi / this.ref_dpi)*100;
	}
  
  // expose access to the constructor
  ns.MediaQueries = MediaQueries;


	//mediaQueries as jQuery prototype
	$.fn.mediaQueries = function (options) {
		return this.each(function() {
			if (!$.data(this, "mediaQueries"))
				$.data(this, "mediaQueries", new window.MediaQueries(this, options, plugin_count++));
		});
	};


	//Extend the prototype
	ns.MediaQueries.prototype = {

		//myMethod
		myMethod: function( /*arg1, arg2*/ ){
		},
		


	};

	//If MediaQueries is a extention of class "ParentClass" include the next line 
	//window.MediaQueries.prototype = $.extend( {}, window.ParentClass.prototype, window.MediaQueries.prototype );


	/******************************************
	Initialize/ready 
	*******************************************/
	$(function() { //"$( function() { ... });" is short for "$(document).ready( function(){...});"

		/*! modernizr 3.1.0 (Custom Build) | MIT *
		 * http://modernizr.com/download/?-adownload-ambientlight-animation-apng-appearance-applicationcache-audio-audioloop-audiopreload-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-batteryapi-beacon-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-blobconstructor-bloburls-blobworkers-borderimage-borderradius-boxshadow-boxsizing-canvas-canvasblending-canvastext-canvaswinding-capture-checked-classlist-contains-contenteditable-contextmenu-cookies-cors-createelementattrs_createelement_attrs-cssall-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-customevent-customprotocolhandler-dart-datachannel-datalistelem-dataset-datauri-dataview-dataworkers-details-devicemotion_deviceorientation-directory-display_runin-displaytable-documentfragment-ellipsis-emoji-es5-es5array-es5date-es5function-es5object-es5string-es5syntax-es5undefined-es6array-es6math-es6number-es6object-es6string-eventlistener-eventsource-exiforientation-fetch-fileinput-filereader-filesystem-flash-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-formattribute-formvalidation-framed-fullscreen-gamepads-generatedcontent-generators-geolocation-getrandomvalues-getusermedia-hashchange-hidden-hiddenscroll-history-hsla-htmlimports-ie8compat-indexeddb-indexeddbblob-inlinesvg-input-inputformaction-inputformenctype-inputformmethod-inputformtarget-inputtypes-intl-jpeg2000-jpegxr-json-lastchild-localizednumber-localstorage-lowbandwidth-lowbattery-matchmedia-mathml-mediaqueries-microdata-multiplebgs-mutationobserver-notification-nthchild-objectfit-olreversed-oninput-opacity-outputelem-overflowscrolling-pagevisibility-peerconnection-performance-picture-placeholder-pointerevents-pointerlock-postmessage-preserve3d-progressbar_meter-promises-proximity-queryselector-quotamanagement-regions-requestanimationframe-requestautocomplete-rgba-ruby-sandbox-scriptasync-scriptdefer-seamless-search-serviceworker-sessionstorage-shapes-sharedworkers-siblinggeneral-sizes-smil-speechrecognition-speechsynthesis-srcdoc-srcset-strictmode-stylescoped-subpixelfont-supports-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-target-template-templatestrings-textalignlast-textareamaxlength-textshadow-texttrackapi_track-time-todataurljpeg_todataurlpng_todataurlwebp-touchevents-transferables-typedarrays-unicode-unicoderange-unknownelements-urlparser-userdata-userselect-vibrate-video-videoautoplay-videoloop-videopreload-vml-webaudio-webgl-webglextensions-webintents-webp-webpalpha-webpanimation-webplossless_webp_lossless-websockets-websocketsbinary-websqldatabase-webworkers-willchange-wrapflow-xhr2-xhrresponsetype-xhrresponsetypearraybuffer-xhrresponsetypeblob-xhrresponsetypedocument-xhrresponsetypejson-xhrresponsetypetext-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-shiv-testallprops-testprop-teststyles !*/
	
	}); //End of initialize/ready
	//******************************************



}(jQuery, this, document));

(function (window, Modernizr) { 
    'use strict';
if (!Modernizr)
	return;  

    var md = new window.MobileDetect(navigator.userAgent),
        grade = md.mobileGrade();
    Modernizr.addTest({
        mobile: !!md.mobile(),
        phone: !!md.phone(),
        tablet: !!md.tablet(),
        mobilegradea: grade === 'A'
    });
    window.mobileDetect = md;
})(this, this.Modernizr);

