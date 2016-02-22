# modernizr-device

[Modernizr]: https://modernizr.com/
[mobile-detect.js]: http://hgoebl.github.io/mobile-detect.js/
[device.js]: https://github.com/matthewhudson/device.js

## Description

This package contains of a javascript object `ModernizrDevice`, and a css-file `modernizr-device.css` with classes to hide or show elements for devices, and print.

Using [Modernizr.addTest()](https://modernizr.com/docs#modernizr-addtest) to add different classes. 

[Modernizr] must be included.

Using [mobile-detect.js] to detect the name of the device etc.
 
Using [device.js] to detect operating system, orientation and type, but with the exception that the term *'mobile'* is used for *all* mobile devices (phones and tablets). Instead the term *phone* is used for mobile phones.




## Installation
### bower
    bower install https://github.com/FCOO/modernizr-device.git --save

## Demo
http://FCOO.github.io/modernizr-device/demo/ 

## Usage

### ModernizrDevice-object (modernizr-device.js)
Collects a number of difference values regarding the device and screen using [Modernizr] and [mobile-detect.js]

(Try to) calculate a `scale` (percent) that is the scaling needed for `<button>` and other html-elements to be displayed in the same physics size as on a 20'' desttop screen with a resolution of 1366x768 pixel. Can be changed by setting the `options.referenceScreen`  

```var myModernizrDevice = new ModernizrDevice( options );```

#### Default options
	{
	  referenceScreen: { 
	    width		: 1366,
		height		: 768,
		diagonal_inc: 20
	  }
	}


#### Properties
| Id | Description |
| :--: | --- |
| <code>scale</code> | The scale is best guest for a scale (eq. <code>html.style.font-size = myModernizrDevice.scale</code>) of the screen to have elements the same size as on the reference screen |
| <code>isDesktop</code> | <code>true</code> if it is a desktop |
| <code>isMobile</code> | <code>true</code> if it is a mobile device |
| <code>mobileName</code> | Name of mobile device |
| <code>isPhone</code> | <code>true</code> if it is a mobile phone |
| <code>phoneName</code> | Name of mobile phone |
| <code>isTablet</code> | <code>true</code> if it is a table |
| <code>tabletName</code> | Name of tablet |
| <code>mobileGrade</code> | <a href="http://jquerymobile.com/gbs">Mobile Grade (A, B, C)</a> |
| <code>userAgent</code> | Browser (only for mobile devices) |
| <code>isWindows</code> | <code>true</code> if it is Windows OS |
| <code>isIos</code> | <code>true</code> if it is iOS |
| <code>isAndroid</code> | <code>true</code> if it is Android OS |
| <code>os</code> | Operating System (only for mobile devices) |
| <code>browser_version</code> | Browser and version as string. Eq.<code>Firefox 41</code> |


#### Methods

##### mobile-detect.js
All the methods of [mobile-detect.js] can be reached using the `.mobileDetect` object,eq.: 

	var version = myModernizrDevice.mobileDetect.version('Chrome');

### modernizr-device.css

The css-classes is based on the visibility classes by [ZURB Foundation](http://foundation.zurb.com/docs/components/visibility.html) and the syntax used by [Modernizr].

A number of different device 'settings' - named `MDNAME` in the syntax - is set in the css as in [Modernizr] by adding or removing the classes `MDNAME` and `no-MDNAME` to/from the `<html>` element

Example: 

The device is a tablet : `<html class="tablet ...">`

The device is not a tablet : `<html class="no-tablet ...">`

All the `MDNAME` and `no-MDNAME` classes are added to or removed from `<html>`by [Modernizr] or `modernizr-device.js`

#### Hide/Show classes
To control if a element is displayed (show) or hidden (hide) when a given 'device-setting' is on or off there are the following classes defined for each 'device-setting'

	(hide|show)-for[-no]-MDNAME

#### Classes
Test if the device is a `desktop` or `mobile` device and subsequently if it is a `phone` or a `tablet` and the OS (`windows`, `ios`, or `android`)

	show-for-desktop / hide-for-desktop
	show-for-no-desktop / hide-for-no-desktop

	show-for-mobile / hide-for-mobile
	show-for-no-mobile / hide-for-no-mobile 
	
	show-for-phone / hide-for-phone
	show-for-tablet / hide-for-tablet

	show-for-windows / hide-for-windows
	show-for-ios / hide-for-ios
	show-for-android / hide-for-android

#### Additional css and scss

The classes in `modernizr-device.css` only controls the display of elements under certent conditions.
But other properties can be controled by using the `MQNAME` and `noMQNAME` classes

Example: To define a class `green-when-on-desktop` that displayes a element in green when shown on a desktop computer:

	css:
	.desktop .green-when-on-desktop { color: green; }

	scss:
	.desktop {
	  .green-when-on-desktop { color: green; }
	  ...
	}


#### Examples

	<div class="show-for-mobile">This device IS a MOBILE device</div>
	<div class="show-for-phone">..and it is a PHONE</div>
	<div class="show-for-tablet">..and it is a TABLET</div>
	<div class="show-for-no-mobile">This device is NOT a MOBILE device</code></div>


## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/modernizr-device/LICENSE).

Copyright (c) 2016 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt niels@steenbuchholt.dk


## Credits and acknowledgements


## Known bugs

## Troubleshooting

## Changelog



