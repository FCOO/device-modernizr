/***************************************************************************
	device-modernizr.js, 

	(c) 2015, FCOO

	https://github.com/FCOO/device-modernizr
	https://github.com/FCOO

****************************************************************************/

;(function ($, window, document, Modernizr, undefined) {
	"use strict";

	var screenBreakPoints = [
		{name:'screen-small',		value:  624 },
		{name:'screen-medium',	value: 1024 },
		{name:'screen-large',		value: 1440 },
		{name:'screen-xlarge',	value: 1920 },
		{name:'screen-xxlarge',	value:99999 }
	];


	//Create fcoo-namespace
	window.fcoo = window.fcoo || {};

	//If fcoo.namespace() is defined create a name-space
	var ns = window.fcoo.namespace ? window.fcoo.namespace(''/*Enter the fcoo-namespace here*/) : window.fcoo; 
	//or var ns = window;

	var plugin_count = 1000;

	function DeviceModernizr( options ) {
		this.plugin_count = plugin_count++;

		this.modernizr = Modernizr;

		//Extend with device (https://github.com/matthewhudson/device.js.git)
		$.extend( this, window.device );

		this.options = $.extend({
			//Default options = Standard desttop screen
			referenceScreen: { 
				width				: 1366,
				height			: 768,
				diagonal_inc: 20
			}
		}, options || {} );

		var docEl = window.document.documentElement;
		this.wnua	= window.navigator.userAgent;
 		this.devicePixelRatio = ('devicePixelRatio' in window) ? window.devicePixelRatio : 'unsupported';
		this.screen_width		= screen.width;
		this.screen_height	=	screen.height;

		this.isPortrait = false;
		this.isLandscape = false;
		this._testOrientation();
this._onOrientation();
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

		this.dpr = window.devicePixelRatio;		
		if (!this.dpr){
			this.dpr = 1;
			for (var dpr=1; dpr<4; dpr=dpr+0.1 )
				if ( 
					Modernizr.mq('(-webkit-device-pixel-ratio: '+dpr+')') ||
					Modernizr.mq('(min--moz-device-pixel-ratio: '+dpr+')') ||
					Modernizr.mq('(-o-min-device-pixel-ratio: '+dpr+'/1)')
				){
					this.dpr = dpr;
					break;
				}
		}
	
		this.dpr = Math.round(100*this.dpr)/100;

		this.screen_diagonal = Math.sqrt( Math.pow(this.screen_width, 2) + Math.pow(this.screen_height,2) );
		this.screen_diagonal_inc = this.screen_diagonal/this.dpi; //Best guest !

		//Calculate the diagonal and dpi for the reference screen
		var ref_screen_diagonal = Math.sqrt( Math.pow(this.options.referenceScreen.width, 2) + Math.pow(this.options.referenceScreen.height, 2) );
		this.ref_dpi = ref_screen_diagonal/this.options.referenceScreen.diagonal_inc;
		
		//The scale is best guest for a scale (eq. html.style.font-size=this.scale) of the screen to have elements the same size as on the reference screen
		this.scale = 100;
		if ((this.dpr != 1) || (this.dpi != 96))
			this.scale = Math.sqrt(this.dpi / this.ref_dpi)*100;

		//Get a string with browser and version
		this.browser_version = function() {
			if(typeof navigator === 'undefined'){
				return 'unknown';
			}
			var ua = navigator.userAgent, tem,
			M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
			if(/trident/i.test(M[1])){
				tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
				return 'IE '+(tem[1] || '');
			}
			if(M[1]=== 'Chrome'){
				tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
				if(tem!== null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
			}
			M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
			if((tem= ua.match(/version\/(\d+)/i))!= null) 
				M.splice(1, 1, tem[1]);
			return M.join(' ');
		}();



		//Create own instance of MobileDetect
		this.mobileDetect = new window.MobileDetect( this.wnua );

		//Set properties using device.js and mobile-detect.js
		this.isDesktop		= this.desktop();
		this.isMobile			= this.mobile() || this.tablet();
		this.mobileName		= this.mobileDetect.mobile();
		this.isPhone			= this.mobile();
		this.phoneName		= this.mobileDetect.phone();
		this.isTablet			= this.tablet();
		this.tabletName		= this.mobileDetect.tablet();
		this.mobileGrade	= this.mobileDetect.mobileGrade();

		this.userAgent		= this.mobileDetect.userAgent();
		this.isWindows		= this.windows();
		this.isIos				= this.ios();
		this.isAndroid		= this.android();
		
		this.os						= this.mobileDetect.os();

		

//		this.mobile				= this.mobileDetect.mobile();
//		this.phone				= this.mobileDetect.phone();
//		this.tablet				= this.mobileDetect.tablet();


		//Add tests to Modernizr
		var screenDim	= Math.min(screen.width, screen.height),
				bpIndex,
				bpName;
			
		Modernizr.addTest({
			desktop			: this.isDesktop,
			mobile			: this.isMobile,
			phone				: this.isPhone,
			tablet			: this.isTablet,
			mobilegradea: this.mobileGrade === 'A',
			windows			: this.isWindows,
			ios					: this.isIos,
			android			: this.isAndroid
		});
	
		//Find the first index in screenBreakPoints where screenDim < value
		for (bpIndex=0; bpIndex<screenBreakPoints.length; bpIndex++ )
			if (screenBreakPoints[bpIndex].value >= screenDim)
				break;
		
		for (var i=0; i<screenBreakPoints.length; i++ ){
			bpName = screenBreakPoints[i].name;

			//Test for exact size
			Modernizr.addTest( bpName, i == bpIndex );
	
			//Test for max size
			Modernizr.addTest( bpName+'-down', i >= bpIndex );
	
		}
	
	
		//test
		$(window).on('resize.TEST', $.proxy( this._onOrientation, this ));

	
	
	
	
	
	
	}
  
  // expose access to the constructor
  ns.DeviceModernizr = DeviceModernizr;



	//Extend the prototype
	ns.DeviceModernizr.prototype = {

		//myMethod
//		myMethod: function( /*arg1, arg2*/ ){
//		},
		_testOrientation: function(){
			this.isPortrait = !!this.modernizr.mq('screen and (orientation: portrait)');
			this.isLandscape = !!this.modernizr.mq('screen and (orientation: landscape)');

			$('html')
				.toggleClass( 'portrait'		,  this.isPortrait	)
				.toggleClass( 'no-portrait',	!this.isPortrait	)
				.toggleClass( 'landscape'		,  this.isLandscape	)
				.toggleClass( 'no-landscape', !this.isLandscape )

		},

		_onOrientation: function( event ){
			var old_screen_width	= this.screen_width,
					old_screen_height	=	this.screen_height;

			this.screen_width		= screen.width;
			this.screen_height	=	screen.height;
alert(old_screen_width+'->'+this.screen_width+' '+old_screen_height+'->'+this.screen_height);
			if ((old_screen_width != this.screen_width) || (old_screen_height	!=	this.screen_height)){
				this._testOrientation();
	
				alert('onOri isPortrait='+this.isPortrait);	
			}
		}


	};

	//If DeviceModernizr is a extention of class "ParentClass" include the next line 
	//ns.DeviceModernizr.prototype = $.extend( {}, window.ParentClass.prototype, ns.DeviceModernizr.prototype );


	
	/******************************************
	Initialize/ready 
	*******************************************/
	$(function() { //"$( function() { ... });" is short for "$(document).ready( function(){...});"

	
	}); //End of initialize/ready
	//******************************************



}(jQuery, this, document, Modernizr));

