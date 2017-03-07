---
layout: post
title: 'addEventListener'
author: formation.p
date: '2017-03-07 10:40'
tags:
  - javascript
---

```javascript
/**
 * @type {string} //이벤트 타입을 구분하기 위한 문자열 (ex click, blur, drag, drop, ...)
 * @listener {obj} //이벤트를 수신하여 처리할 객체, 해당 객체는 EventListener 인테페이스를 구현하거나 단순한 자바스크립트 함수여야 한다.
 * @useCapture {boolean} //true = Capturing, false = Bubbling, default = false
*/

element.addEventListener(type, listener[, useCapture]);
```
## 예제

```javascript
var el = document.querySelectorAll('div');

for(var i = 0, f = el.length; i < f; i++) {
  if(el[i].addEventListener) {
    //modern browser
    el[i].addEventListener('click', thisTarget);
  } else if(el[i].attachEvent) {
    //IE 8 이하
    el[i].attachEvent('click', thisTarget);
  } else {
    el[i].onclick = thisTarget;
  }
}

function thisTarget(event) {
  console.log(event.target);
}
```
