/***************************************************************************
	modernizr-device.js,

	(c) 2015, FCOO

	https://github.com/FCOO/modernizr-device
	https://github.com/FCOO

****************************************************************************/

;(function ($, window, document, Modernizr, undefined) {
	"use strict";

	var ns = window;

	var plugin_count = 1000;

	function ModernizrDevice( options ) {
		this.plugin_count = plugin_count++;
		this.VERSION = "1.0.0";

		this.modernizr		= Modernizr;

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


		//Add device-tests to Modernizr
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

	}

  // expose access to the constructor
  ns.ModernizrDevice = ModernizrDevice;



	//Extend the prototype
//	ns.ModernizrDevice.prototype = {


//	};


	/******************************************
	Initialize/ready
	*******************************************/
	$(function() {
		ns.ModernizrDevice();

	}); //End of initialize/ready
	//******************************************



}(jQuery, this, document, Modernizr));

