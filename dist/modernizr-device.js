/***************************************************************************
    modernizr-device.js,

    (c) 2015, FCOO

    https://github.com/FCOO/modernizr-device
    https://github.com/FCOO

****************************************************************************/

(function (Modernizr, $, window, document/*, undefined*/) {
    "use strict";

    var ns = window;

    function ModernizrDevice( options ) {
        this.VERSION = "3.0.2";

        this.modernizr = Modernizr;

        this.options = $.extend({
            scale          : false, //When true: Calculate 'best' scaling of font-size
            referenceScreen: {
                width       : 1366,
                height      : 768,
                diagonal_inc: 20
            },
            modernizr: {
                device: false,  //When true: Add Modernizr-tests desktop mobile phone tablet
                os    : true,   //When true: Add Modernizr-tests windows ios android
                ie    : false   //When true: Add Modernizr-tests ie7 ie8 ie9 ie10
            }
        }, options || {} );

        //Extend ModernizrDevice with some of the methods from Device.js (c) 2014 Matthew Hudson http://matthewhudson.me/projects/device.js/

        // The client user agent string.
        // Lowercase, so we can use the more efficient indexOf(), instead of Regex
        this.userAgent = window.navigator.userAgent.toLowerCase();

        this.find = function(needle) { return this.userAgent.indexOf(needle) !== -1; };

        // Main functions
        this.ios                = function () { return this.iphone() || this.ipod() || this.ipad(); };
        this.iphone             = function () { return !this.windows() && this.find('iphone'); };
        this.ipod               = function () { return this.find('ipod'); };
        this.ipad               = function () { return this.find('ipad'); };
        this.android            = function () { return !this.windows() && this.find('android'); };
        this.androidPhone       = function () { return this.android() && this.find('mobile'); };
        this.androidTablet      = function () { return this.android() && !this.find('mobile'); };
        this.blackberry         = function () { return this.find('blackberry') || this.find('bb10') || this.find('rim'); };
        this.blackberryPhone    = function () { return this.blackberry() && !this.find('tablet'); };
        this.blackberryTablet   = function () { return this.blackberry() && this.find('tablet'); };
        this.windows            = function () { return this.find('windows'); };
        this.windowsPhone       = function () { return this.windows() && this.find('phone'); };
        this.windowsTablet      = function () { return this.windows() && (this.find('touch') && !this.windowsPhone()); };
        this.fxos               = function () { return (this.find('(mobile;') || this.find('(tablet;')) && this.find('; rv:'); };
        this.fxosPhone          = function () { return this.fxos() && this.find('mobile'); };
        this.fxosTablet         = function () { return this.fxos() && this.find('tablet'); };
        this.meego              = function () { return this.find('meego'); };
        this.cordova            = function () { return window.cordova && location.protocol === 'file:'; };
        this.nodeWebkit         = function () { return typeof window.process === 'object';  };
        this.mobile             = function () { return this.androidPhone() || this.iphone() || this.ipod() || this.windowsPhone() || this.blackberryPhone() || this.fxosPhone() || this.meego(); };
        this.tablet             = function () { return this.ipad() || this.androidTablet() || this.blackberryTablet() || this.windowsTablet() || this.fxosTablet(); };
        this.desktop            = function () { return !this.tablet() && !this.mobile(); };
        
        
        if (this.options.scale){
            var docEl = document.documentElement;
            //this.devicePixelRatio = ('devicePixelRatio' in window) ? window.devicePixelRatio : 'unsupported';
            this.screen_width  = screen.width;
            this.screen_height = screen.height;

            this.client_width = docEl.clientWidth;
            this.client_width = docEl.clientHeight;

            this.screen_width_em  = this.screen_width/16;
            this.screen_height_em = this.screen_height/16;

            this.dpi = 96;
            for (var dpi=1; dpi<400; dpi++ )
                if ( window.Modernizr.mq('(resolution: '+dpi+'dpi)') ){
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

        } //if (this.options.scale){...

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

        //Set properties
        this.isDesktop   = this.desktop();
        this.isMobile    = this.mobile() || this.tablet();
        this.isPhone     = this.mobile();
        this.isTablet    = this.tablet();

        this.isWindows   = this.windows();
        this.isIos       = this.ios();
        this.isAndroid   = this.android();

        //Add tests to Modernizr
        if (this.options.modernizr.device)
            Modernizr.addTest({
                desktop: this.isDesktop,
                mobile : this.isMobile,
                phone  : this.isPhone,
                tablet : this.isTablet
            });

        if (this.options.modernizr.os)
            Modernizr.addTest({
                windows: this.isWindows,
                ios    : this.isIos,
                android: this.isAndroid
            });

        if (this.options.modernizr.ie)
            //Adding test for Internet Explore versions
            for (var version=7; version<=10; version++ )
                Modernizr.addTest('ie'+version, this.browser_version == 'MSIE '+version );        
    }

    // expose access to the constructor
    ns.ModernizrDevice = ModernizrDevice;


}(window.Modernizr, jQuery, this, document));

