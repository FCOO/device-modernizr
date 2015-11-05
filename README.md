# media-queries

[Modernizr]: https://modernizr.com/
[mobile-detect.js]: http://hgoebl.github.io/mobile-detect.js/

## Description

This package contains of a javascript class `MediaQueries`, and a css-file `media-queries.css` with classes to hide or show elements for different orientations (portrait/landscape), screen dimensions, and print
[Modernizr] must be included.

### MediaQueries
Collects a number of difference values regarding the device and screen using [Modernizr] and [mobile-detect.js]

(Try to) calculate a `scale` (percent) that is the scaling needed for `<button>` and other html-elements to be displayed in the same physics size as on a 20'' desttop screen with a resolution of 1366x768 pixel. Can be changed by setting the `options.referenceScreen`  

## Installation
### bower
    bower install https://github.com/FCOO/media-queries.git --save

## Demo
http://FCOO.github.io/media-queries/demo/ 

## Usage

### MediaQueries-class (media-queries.js)

```var myMediaQueries = new MediaQueries( options );```

#### options
Default options

	{
	  referenceScreen: { 
	    width		: 1366,
		height		: 768,
		diagonal_inc: 20
		}
	}


#### Properties (TODO)
<table>
<tr>
  <th>Id</th>
  <th>Description</th>
</tr>
<tr>
<!--  
  <td><code>screen_width</code></td><td><td></td></tr>
  <td><code>screen_height</code></td><td></td></tr>
  <td><code>client_width</code></td><td></td></tr>
  <td><code>client_width</code></td><td></td></tr>
  <td><code>screen_width_em</code></td><td></td></tr>
  <td><code>screen_height_em</code></td><td></td></tr>
  <td><code>dpi</code></td><td>dots pro inc</td></tr>
  <td><code>dpr</code></td><td>device pixel ratio</td></tr>
-->
  <td><code>scale</code></td><td>The scale is best guest for a scale (eq. <code>html.style.font-size = myMediaQueries.scale</code>) of the screen to have elements the same size as on the reference screen</td></tr>
 <td><code>mobile</code></td><td>Name of mobile device - <code>null</code> if not a mobile device</td></tr>
 <td><code>phone</code></td><td>If a mobile device: Name of phone - <code>null</code> if not a phone</td></tr>
 <td><code>tablet</code></td><td>If a mobile device: Name of table - <code>null</code> if not a table</td></tr>
 <td><code>mobileGrade</code></td><td><a href="http://jquerymobile.com/gbs">Mobile Grade (A, B, C)</a></td></tr>
 <td><code>userAgent</code></td><td>Browser (only for mobile devices)</td></tr>
 <td><code>os</code></td><td>Operating System (only for mobile devices)</td></tr>
</table>


#### Methods
All the methods of [mobile-detect.js] can be reached using the `.mobileDetect` object,eq.: 

	var version = myMediaQueries.mobileDetect.version('Chrome');

### media-queries.css

The css-classes is based on the visibility classes by [ZURB Foundation](http://foundation.zurb.com/docs/components/visibility.html) and the syntax used by [Modernizr].
The name of the different css-classes has the following syntax

	(hide|show)-for[-no]-MQNAME[-down]

The `[-down]` is only for **screen sizes** and `[-no]` is not used for **orientation** or **print** 

#### Screen size

To avoid problems with breakpoints when the device changes orientation the "size" of the screen is the minimum of the `screen.height` and `screen.width`

There are five breakpoints for screen size named `screen-small`, `screen-medium`, `screen-large`, `screen-xlarge`, and `screen-xxlarge`

The breakpoints for this five groups are given in the `src/_media-queries.js`:
<table>
<tr><td>class</td><td>Screen size (min-<b>max</b>)</td></tr>
<tr><td>screen-small</td><td>0-<b>624px<b></td></tr>
<tr><td>screen-medium</td><td>625-<b>1024px</b></td></tr>
<tr><td>screen-large</td><td>1025-<b>1440px</b></td></tr>
<tr><td>screen-xlarge</td><td>1441-<b>1920px</b></td></tr>
<tr><td>screen-xxlarge</td><td><b>>1920px</b></td></tr>
</table>

For each size-class `SCREENSIZE` there are the following classes

	show-for-SCREENSIZE      //Displayed for screen size in range
	hide-for-SCREENSIZE      //Hidden for screen size in range
	show-for-SCREENSIZE-down //Displayed for all screen size in less than max
	hide-for-SCREENSIZE-down //Hidden for all screen size in less than max
	show-for-no-SCREENSIZE   //Displayed for screen size outside range
	hide-for-no-SCREENSIZE   //Hidden for screen size outside range

Example

	<p class="show-for-no-screen-small">The screen width and height is > 624px</p> 

#### Device
Test if the device is a `mobile` device and subsequently if it is a `phone` or a `tablet`

	show/for-mobile/hide-for-mobile
	show-for-no-mobile/hide-for-no-mobile 
	
	show-for-phone/hide-for-phone
	show-for-tablet/hide-for-tablet


#### Orientation
Four classes are provided
	
	show-for-portrait
	hide-for-portrait
	show-for-landscape
	hide-for-landscape


#### Print
Two classes are provided

	show-for-print
	hide-on-print



#### Examples

	<div class="show-for-landscape">This device is in LANDSCAPE mode</div>
	<div class="show-for-portrait">This device is in PORTRAIT mode</div>

	<div class="show-for-mobile">This device IS a MOBILE device</div>
	<div class="show-for-phone">..and it is a PHONE</div>
	<div class="show-for-tablet">..and it is a TABLET</div>
	<div class="show-for-no-mobile">This device is NOT a MOBILE device</code></div>

	<div class="show-for-screen-small">The screen IS a SMALL screen</div>
	<div class="hide-for-screen-small">The screen is NOT a SMALL screen</div>
	<div class="show-for-screen-medium">The screen IS a MEDIUM screen</div>
	<div class="hide-for-screen-medium">The screen is NOT a MEDIUM screen</div>
	<div class="show-for-screen-medium-down">The screen is a MEDIUM OR smaller screen</div>

	<div class="show-for-screen-large">The screen IS a LARGE screen</div>
	<div class="hide-for-screen-large">The screen is NOT a LARGE screen</div>
	<div class="show-for-screen-large-down">The screen is a LARGE OR smaller screen</div>

	<div class="show-for-screen-xlarge">The screen IS a XLARGE screen</div>
	<div class="hide-for-screen-xlarge">The screen is NOT a XLARGE screen</div>
	<div class="show-for-screen-xlarge-down">The screen is a XLARGE OR smaller screen</div>

	<div class="show-for-screen-xxlarge">The screen IS a XXLARGE screen</div>
	<div class="hide-for-screen-xxlarge">The screen is NOT a XXLARGE screen</div>
	<div class="show-for-screen-xxlarge-down">The screen is a XXLARGE OR smaller screen</div>

	<div class="hide-for-print">This text is only on the SCREEN</div>
	<div class="show-for-print">This text is only on the PRINT</div>
	


## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/media-queries/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt niels@steenbuchholt.dk


## Credits and acknowledgements


## Known bugs

## Troubleshooting

## Changelog



