# media-queries

[foundation-mq]: http://foundation.zurb.com/docs/media-queries.html

## Description
This package contains of tree parts:


1. **JS**: A javascript class `MediaQueries`, 
1. **CSS**: A css-file `media-queries.css` with classes to hide or show elements for different portrait/landscape-mode and screen dimentions
1. **SASS**: scss-file `_media-queries.scss` to include into a new scss-file if you want to create media queries css for other think than hide/show

## Installation
### bower
For JS and CSS 

    use: bower install https://github.com/FCOO/media-queries.git --save

For SASS use `--save-dev` instad of `--save`:

    use: bower install https://github.com/FCOO/media-queries.git --save-dev

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
  <td><code>scale</code></td><td>The scale is best guest for a scale (eq. html.style.font-size=this.scale) of the screen to have elements the same size as on the reference screen</td></tr>
</table>


#### Methods

    .methods1( arg1, arg2,...): Do something
    .methods2( arg1, arg2,...): Do something else

### CSS

The css-classes is based on the media queries created by [ZURB Foundation](http://foundation.zurb.com/). There are four breakpoints for width named `small`, `medium`, `large`, and `xlarge`

The breakponts for this four groups are given in the SASS-file src/_media
$small-breakpoint:  em-calc(624);
$medium-breakpoint: em-calc(1024);
$large-breakpoint:  em-calc(1440);
$xlarge-breakpoint: em-calc(1920);



### SASS



## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/media-queries/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt niels@steenbuchholt.dk


## Credits and acknowledgements


## Known bugs

## Troubleshooting

## Changelog



