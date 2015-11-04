# media-queries

[foundation-mq]: http://foundation.zurb.com/docs/media-queries.html

## Description
This package contains of tree parts:


1. **JS**: A javascript class `MediaQueries`, 
1. **CSS**: A css-file `media-queries.css` with classes to hide or show elements for different portrait/landscape-mode and screen dimentions
1. **SASS**: scss-file `_media-queries-import.scss` to include into a new scss-file if you want to create media queries css for other think than hide/show

## Installation
### bower
For JS and CSS 

    bower install https://github.com/FCOO/media-queries.git --save

For SASS use `--save-dev` instad of `--save`:

    bower install https://github.com/FCOO/media-queries.git --save-dev

## Demo
http://FCOO.github.io/media-queries/demo/ 

## Usage

### JS
```var myMediaQueries = new MediaQueries( options );```

#### options
<table>
<tr>
<th>Id</th>
<th>Type</th> 
<th>Default</th>
<th>Description</th>
</tr>

<tr>
<td>options1</td>
<td>boolean</td>
<td>true</td>
<td>If <code>true</code> the ...</td>
</tr>
</table>

#### Properties (TODO)
<table>
<tr>
  <th>Id</th>
  <th>Description</th>
</tr>
<tr>
  <td><code>screen_width</code></td><td><td></td></tr>
  <td><code>screen_height</code></td><td></td></tr>
  <td><code>client_width</code></td><td></td></tr>
  <td><code>client_width</code></td><td></td></tr>
  <td><code>screen_width_em</code></td><td></td></tr>
  <td><code>screen_height_em</code></td><td></td></tr>
  <td><code>dpi</code></td><td></td></tr>
  <td><code>dpr</code></td><td>-webkit-device-pixel-ratio</td></tr>
  <td><code>scale</code></td><td>The scale is best guest for a scale (eq. <code>html.style.font-size = myMediaQueries.scale</code>) of the screen to have elements the same size as on the reference screen</td></tr>
</table>


#### Methods

    .methods1( arg1, arg2,...): Do something
    .methods2( arg1, arg2,...): Do something else

### media-queries.css

The css-classes is based on the media queries created by [ZURB Foundation](http://foundation.zurb.com/). There are five breakpoints for width named `small`, `medium`, `large`, `xlarge`, and `xxlarge`

The breakponts for this five groups are given in the SASS-file `src/_media-queries.-settings.scss`
	$small-breakpoint:  em-calc(624);
	$medium-breakpoint: em-calc(1024);
	$large-breakpoint:  em-calc(1440);
	$xlarge-breakpoint: em-calc(1920);

Se [documentation on foundation.zurb.com](http://foundation.zurb.com/docs/media-queries.html)

There are classes to hide or show elements for different screen width, orientation aand print

####Examples

	<strong class="show-for-small-only">This text is shown only on a small screen.</strong>
	
	<strong class="hide-for-medium-up">You are <em>not</em> on a medium, large, xlarge, or xxlarge screen.</strong>
	
	<strong class="show-for-landscape">You are in landscape orientation.</strong>
	<strong class="show-for-portrait">You are in portrait orientation.</strong>

	.show-for-print , .print-only (Visible for printing)
	.hide-for-print , .hide-on-print (Hidden while printing)

Se [documentation on foundation.zurb.com](http://foundation.zurb.com/docs/components/visibility.html)

### SASS

To create css classes with other properties than hide/show you must create your own scss-file and compile it to a css-file
If you have installed media-queries with bower and your scss-file is in `/src` it could look link this 

	@import "../bower_components/media-queries/src/media-queries-import";
	



## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/media-queries/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt niels@steenbuchholt.dk


## Credits and acknowledgements


## Known bugs

## Troubleshooting

## Changelog



