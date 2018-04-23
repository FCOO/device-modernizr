# modernizr-device

[Modernizr]: https://modernizr.com/
[device.js]: https://github.com/matthewhudson/device.js

## Description

This package contains of a javascript object `ModernizrDevice`.

Using [Modernizr.addTest()](https://modernizr.com/docs#modernizr-addtest) to add different classes. 

[Modernizr] must be included.

Using [device.js] to detect operating system, orientation and type, but with the exception that the term *'mobile'* is used for *all* mobile devices (phones and tablets). Instead the term *phone* is used for mobile phones.




## Installation
### bower
    bower install https://github.com/FCOO/modernizr-device.git --save

## Demo
http://FCOO.github.io/modernizr-device/demo/ 

## Usage

### ModernizrDevice-object (modernizr-device.js)
Collects a number of difference values regarding the device and screen

(Try to) calculate a `scale` (percent) that is the scaling needed for `<button>` and other html-elements to be displayed in the same physics size as on a 20'' desttop screen with a resolution of 1366x768 pixel. Can be changed by setting the `options.referenceScreen`  

```var myModernizrDevice = new ModernizrDevice( options );```

#### Default options
    {
        scale          : false, //When true: Calculate 'best' scaling of font-size
        referenceScreen: {
            width       : 1366,
            height      : 768,
            diagonal_inc: 20
        },
        modernizr: {
            device: false,  //When true: Add Modernizr-tests desktop mobile phone tablet
            os    : true,   //When true: Add Modernizr-tests windows ios android
            ie    : false   //When true: Add Modernizr-tests ie10 ie11
        }
    }


#### Properties
| Id | Description |
| :--: | :--- |
| `scale` | The scale is best guest for a scale (e.g. `html.style.font-size = myModernizrDevice.scale`) of the screen to have elements the same size as on the reference screen = `options.referenceScreen`<br>**NOTE** Only if `options.scale: true` |
| `isDesktop` | <code>true</code> if it is a desktop |
| `isMobile` | <code>true</code> if it is a mobile device |
| `isPhone` | <code>true</code> if it is a mobile phone |
| `isTablet` | <code>true</code> if it is a table |
| `isWindows` | <code>true</code> if it is Windows OS |
| `isIos` | <code>true</code> if it is iOS |
| `isAndroid` | <code>true</code> if it is Android OS |
| `browser_version` | Browser and version as string. E.g. `Firefox 41` |


### Modernizr tests

The following [Modernizr] tests are added when the option is set

| `options.modernizr` | Default | Modernizr tests added |
| :--: | :--: | :--- |
| `device` | `false` | `desktop mobile phone tablet` |
| `os` | `true` | `windows ios android` |
| `ie` | `false` | `ie10 ie11` |



## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/modernizr-device/LICENSE).

Copyright (c) 2016 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk


