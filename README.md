<p align="center">
  <a href="http://materializecss.com/">
    <img src="http://materializecss.com/res/materialize.svg" width="150">
  </a>
</p>

<h3 align="center">MaterializeCSS</h3>

<p align="center">
  Materialize, a CSS Framework based on material design.
  <br>
  <a href="http://materializecss.com/"><strong>-- Browse the docs --</strong></a>
  <br>
  <br>
  <a href="https://travis-ci.org/Dogfalo/materialize">
    <img src="https://travis-ci.org/Dogfalo/materialize.svg?branch=master" alt="Travis CI badge">
  </a>
  <a href="https://badge.fury.io/js/materialize-css">
    <img src="https://badge.fury.io/js/materialize-css.svg" alt="npm version badge">
  </a>
  <a href="https://cdnjs.com/libraries/materialize">
    <img src="https://img.shields.io/cdnjs/v/materialize.svg" alt="CDNJS version badge">
  </a>
  <a href="https://david-dm.org/Dogfalo/materialize">
    <img src="https://david-dm.org/Dogfalo/materialize/status.svg" alt="dependencies Status badge">
    </a>
  <a href="https://david-dm.org/Dogfalo/materialize#info=devDependencies">
    <img src="https://david-dm.org/Dogfalo/materialize/dev-status.svg" alt="devDependency Status badge">
  </a>
  <a href="https://gitter.im/Dogfalo/materialize">
    <img src="https://badges.gitter.im/Join%20Chat.svg" alt="Gitter badge">
  </a>
</p>

## つ ◕_◕ ༽つ
## Table of Contents
- [Quickview](#view)
- [Reading my javascript](#Javascript)

## General
Droom is an application that allows you to land your dream job with a click of a button.

## View 
```bash
raidondroom.netlify.com
```
## Javascript
I wrote my javascript in jquery because i'm using materialize css, you can find it in the init.js for features and how it works

```bash
//features cards
var $card1 = $('#card1');
    var $card2 = $('#card2');
    var $card3 = $('#card3');

    $('#buttoncolor').click(function (){
      $card1.toggleClass("scale-out");
      $card2.toggleClass("scale-out");
      $card3.toggleClass("scale-out");
    });
    
    $('#card1reveal').click(function(){
      $card1.css('overflow', 'visible');
      $(this).css('display', 'none');
      $(this).css('transform', 'translateY(0%)')
    });

    $('#card2reveal').click(function(){
      $card2.css('overflow', 'visible;');
      $(this).css('display', 'none');
      $(this).css('transform', 'translateY(0%)')
    });

    $('#card3reveal').click(function(){
      $card3.css('overflow', 'visible');
      $(this).css('display', 'none');
      $(this).css('transform', 'translateY(0%)')
    
    });
// how it works tabs
$('ul.tabs').tabs();
```
## Copyright and license
Code Copyright 2018 Materialize. Code released under the MIT license.
