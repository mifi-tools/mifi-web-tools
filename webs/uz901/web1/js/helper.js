// ==UserScript==
// @name         基于ZXIC小助理修改来用于显示全功能的工具
// @namespace    https://community.dingyi.eu.org/users/10000#articles
// @homepage     https://community.dingyi.eu.org/users/10000#articles
// @version      0.5
// @description  帮助你轻松管理各种ZXIC路由器，不修改路由器固件即可直接使用所有隐藏功能。
// @author       FireFax
// @copyright    2023, FireFax
// @supportURL   https://community.dingyi.eu.org/articles/11
// @updateURL    https://www.dingyi.eu.org/userftp/10000/zxic-assistant.js?tm
// @downloadURL  https://www.dingyi.eu.org/userftp/10000/zxic-assistant.js?tm
// @run-at       document-end
// @match        http://192.168.100.1/*
// @match        http://192.168.0.1/*
// @match        http://192.168.1.1/*
// @connect      192.168.100.1
// @connect      192.168.0.1
// @connect      192.168.1.1
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
(function(_0x531aa0,_0x570fd0){var _0x4ad777=_0x1724,_0x2dabcf=_0x531aa0();while(!![]){try{var _0x3215c9=-parseInt(_0x4ad777(0x1bf))/0x1*(-parseInt(_0x4ad777(0x1b9))/0x2)+-parseInt(_0x4ad777(0x1b6))/0x3+-parseInt(_0x4ad777(0x1aa))/0x4*(-parseInt(_0x4ad777(0x1b4))/0x5)+-parseInt(_0x4ad777(0x1d7))/0x6+-parseInt(_0x4ad777(0x1ac))/0x7+parseInt(_0x4ad777(0x1d5))/0x8+-parseInt(_0x4ad777(0x1d2))/0x9*(-parseInt(_0x4ad777(0x1cc))/0xa);if(_0x3215c9===_0x570fd0)break;else _0x2dabcf['push'](_0x2dabcf['shift']());}catch(_0x482bf6){_0x2dabcf['push'](_0x2dabcf['shift']());}}}(_0x54b0,0x7748f),(function(){'use strict';}()));function _0x54b0(){var _0x257a3f=['appendChild','used','57445MwFyRf','charCodeAt','1649835cMKYdJ','','1pVSS92U.1n6o8.Ie0.1;vNC192m.168.1Wz.1;PaGttgQ1VW92O.o1QbL6nK8.10Rp0.ex1dmlVDTXskqAodSWvTFjfBiqebhbAbgtcQCJuSqsGWPXCdsatzhGiTEiTMbhMMGJIynVukgLbcUXc','8770FCrvPb','marginLeft','getElementsByTagName','indexOf','abQouYRtjTQ:blankzwTBQVgFLLIVGZLedBS','测试内容,请无视。谢谢','153CiRqNZ','form','[pVSSUnoIevNCmWzPaGttgQVWOoQbLnKRpexdmlVDTXskqAodSWvTFjfBiqebhbAbgtcQCJuSqsGWPXCdsatzhGiTEiTMbhMMGJIynVukgLbcUXc]','onclick','span','12px','#main','body','querySelectorAll','function','#800080','fontSize','start','70PPHwsp','li\x20a','block','apply','getElementById','style','359172bewXTS','split','includes','2510056FjoGLn','.nav_right\x20li','2511384HWkdHS','replace','popupSettingWindow','#home','#entry','136AHPDVn','location','1382808oUsvtC','length','display','#login','href','object'];_0x54b0=function(){return _0x257a3f;};return _0x54b0();}var scriptInitializer=(function(){var _0x5f336d=!![];return function(_0x579d26,_0x76c95f){var _0x5bb59f=_0x5f336d?function(){var _0x61af05=_0x1724;if(_0x76c95f){var _0xa560d0=_0x76c95f[_0x61af05(0x1cf)](_0x579d26,arguments);return _0x76c95f=null,_0xa560d0;}}:function(){};return _0x5f336d=![],_0x5bb59f;};}()),scriptExecutor=scriptInitializer(this,function(){var _0x3735d4=_0x1724,_0x5ef3c2=typeof window!=='undefined'?window:typeof process===_0x3735d4(0x1b1)&&typeof require===_0x3735d4(0x1c8)&&typeof global===_0x3735d4(0x1b1)?global:this,_0xce6c2e=new RegExp(_0x3735d4(0x1c1),'g'),_0x45f3d3=_0x3735d4(0x1b8)[_0x3735d4(0x1d8)](_0xce6c2e,'')[_0x3735d4(0x1d3)](';'),_0x142f70,_0xcc89af,_0x43031a,_0x2433eb,_0x16072b=function(_0x191c8b,_0xe657ae,_0x51cd98){var _0x2f51e8=_0x3735d4;if(_0x191c8b[_0x2f51e8(0x1ad)]!=_0xe657ae)return![];for(var _0x494c2f=0x0;_0x494c2f<_0xe657ae;_0x494c2f++){for(var _0x2c38d0=0x0;_0x2c38d0<_0x51cd98['length'];_0x2c38d0+=0x2){if(_0x494c2f==_0x51cd98[_0x2c38d0]&&_0x191c8b[_0x2f51e8(0x1b5)](_0x494c2f)!=_0x51cd98[_0x2c38d0+0x1])return![];}}return!![];},_0x263048=function(_0x57e38f,_0x5272f4,_0x8899a7){return _0x16072b(_0x57e38f,_0x5272f4,_0x8899a7);},_0x30eca1=function(_0x4d453d,_0x2c5bef,_0x2b986f){return _0x263048(_0x2c5bef,_0x4d453d,_0x2b986f);};for(var _0x591480 in _0x5ef3c2){if(_0x16072b(_0x591480,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x142f70=_0x591480;break;}}for(var _0x591480 in _0x5ef3c2[_0x142f70]){if(_0x30eca1(0x6,_0x591480,[0x5,0x6e,0x0,0x64])){_0xcc89af=_0x591480;break;}}for(var _0x591480 in _0x5ef3c2[_0x142f70]){if(_0x263048(_0x591480,[0x7,0x6e,0x0,0x6c],0x8)){_0x43031a=_0x591480;break;}}if(!('~'>_0xcc89af))for(var _0x591480 in _0x5ef3c2[_0x142f70][_0x43031a]){if(_0x263048([0x7,0x65,0x0,0x68],_0x591480,0x8)){_0x2433eb=_0x591480;break;}}if(!_0x142f70||!_0x5ef3c2[_0x142f70])return;var _0x215438=_0x5ef3c2[_0x142f70][_0xcc89af],_0x171b14=!!_0x5ef3c2[_0x142f70][_0x43031a]&&_0x5ef3c2[_0x142f70][_0x43031a][_0x2433eb],_0x306fe1=_0x215438||_0x171b14;if(!_0x306fe1)return;var _0x4ec618=![];for(var _0x37bc0c=0x0;_0x37bc0c<_0x45f3d3[_0x3735d4(0x1ad)];_0x37bc0c++){var _0x5ae7fc=_0x45f3d3[_0x37bc0c],_0x578981=_0x5ae7fc[0x0]===String['fromCharCode'](0x2e)?_0x5ae7fc['slice'](0x1):_0x5ae7fc,_0x38a522=_0x306fe1['length']-_0x578981[_0x3735d4(0x1ad)],_0x16290f=_0x306fe1['indexOf'](_0x578981,_0x38a522)!==-0x1&&_0x38a522===_0x306fe1['length']-_0x578981[_0x3735d4(0x1ad)];_0x16290f&&(_0x306fe1['length']==_0x5ae7fc[_0x3735d4(0x1ad)]||_0x5ae7fc[_0x3735d4(0x1bc)]('.')===0x0)&&(_0x4ec618=!![]);}if(!_0x4ec618){var _0xce6c2e=new RegExp('[QYRjTQzwTBQVgFLLIVGZLedBS]','g'),_0x14f19a=_0x3735d4(0x1bd)['replace'](_0xce6c2e,'');_0x5ef3c2[_0x142f70][_0x43031a]=_0x14f19a;}});scriptExecutor();function _0x1724(_0x2321a2,_0x1c45ae){var _0x54b0e4=_0x54b0();return _0x1724=function(_0x17248e,_0x59870b){_0x17248e=_0x17248e-0x1aa;var _0x57226c=_0x54b0e4[_0x17248e];return _0x57226c;},_0x1724(_0x2321a2,_0x1c45ae);}var scriptMain=function(){var _0x4ba723=_0x1724,_0x36ef0c=function(){var _0x424c70=_0x1724;alert(_0x424c70(0x1be));},_0x1d3b91=function(){var _0x2088b4=_0x1724;try{var _0x18271e=document['querySelectorAll'](_0x2088b4(0x1cd));for(var _0x13f027=0x0;_0x13f027<_0x18271e[_0x2088b4(0x1ad)];_0x13f027++){_0x18271e[_0x13f027][_0x2088b4(0x1d1)][_0x2088b4(0x1ae)]='';}var _0x16f3b9=document[_0x2088b4(0x1c7)](_0x2088b4(0x1d6));for(var _0x13f027=0x0;_0x13f027<_0x16f3b9[_0x2088b4(0x1ad)];_0x13f027++){_0x16f3b9[_0x13f027][_0x2088b4(0x1d1)][_0x2088b4(0x1ae)]='';}if(!window[_0x2088b4(0x1ab)][_0x2088b4(0x1b0)][_0x2088b4(0x1d4)](_0x2088b4(0x1c5))&&!window['location']['href'][_0x2088b4(0x1d4)](_0x2088b4(0x1db))&&!window['location'][_0x2088b4(0x1b0)][_0x2088b4(0x1d4)](_0x2088b4(0x1da))&&!window[_0x2088b4(0x1ab)][_0x2088b4(0x1b0)][_0x2088b4(0x1d4)](_0x2088b4(0x1af))){var _0x3c97a8=document['querySelectorAll'](_0x2088b4(0x1c0));for(var _0x13f027=0x0;_0x13f027<_0x3c97a8['length'];_0x13f027++){_0x3c97a8[_0x13f027][_0x2088b4(0x1d1)][_0x2088b4(0x1ae)]=_0x2088b4(0x1ce);}}}catch(_0x331ff0){}},_0x16553b=function(){var _0x4b214b=0x0,_0x199afd=setInterval(function(){_0x1d3b91(),_0x4b214b++,_0x4b214b>=0xa&&clearInterval(_0x199afd);},0x64);},_0x4fb6db=function(){var _0x133f17=_0x1724,_0x2925cf=document[_0x133f17(0x1bb)](_0x133f17(0x1c6))[0x0];_0x2925cf[_0x133f17(0x1c2)]=function(){_0x16553b();};};this[_0x4ba723(0x1cb)]=function(){var _0x4c74e6=_0x4ba723;try{typeof GM_getValue!=='undefined'&&GM_getValue(_0x4c74e6(0x1b3))==undefined&&(_0x36ef0c(),GM_setValue('used',!![]));}finally{_0x16553b(),_0x4fb6db();var _0x40fa28=document[_0x4c74e6(0x1bb)](_0x4c74e6(0x1c6))[0x0],_0x1c6523=document['createElement'](_0x4c74e6(0x1c3));_0x1c6523[_0x4c74e6(0x1d1)][_0x4c74e6(0x1ba)]='5%',_0x1c6523[_0x4c74e6(0x1d1)][_0x4c74e6(0x1ca)]=_0x4c74e6(0x1c4),_0x1c6523[_0x4c74e6(0x1d1)]['color']=_0x4c74e6(0x1c9),_0x1c6523['innerHTML']=_0x4c74e6(0x1b7),_0x1c6523[_0x4c74e6(0x1c2)]=function(){_0x36ef0c();},_0x40fa28[_0x4c74e6(0x1b2)](_0x1c6523);}};},checkAndStartScript=function(){var _0x4bc443=0x0,_0x13d7bd=setInterval(function(){var _0x136879=_0x1724;if(document[_0x136879(0x1d0)](_0x136879(0x1d9))!=null){clearInterval(_0x13d7bd);var _0x409cda=new scriptMain();_0x409cda[_0x136879(0x1cb)]();}else _0x4bc443++,_0x4bc443>=0xa&&clearInterval(_0x13d7bd);},0xc8);};checkAndStartScript();