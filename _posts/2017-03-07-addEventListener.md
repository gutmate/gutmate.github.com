---
layout: post
title: 'addEventListener, attachEvent'
author: formation.p
date: '2017-03-07 10:40'
tags:
  - javascript
---

# addEventListener, attachEvent

두 메소드의 기능은 같지만 브라우저에서 **지원**하는 `메소드`가
다르기 때문에 분기 처리 해주어야 한다.

```javascript
/** addEventListener
 *
 * IE9+, chrome
 * @type {string} //이벤트 타입을 구분하기 위한 문자열 (ex click, blur, drag, drop, ...)
 * @function {obj} //이벤트를 수신하여 처리할 객체, 해당 객체는 EventListener 인테페이스를 구현하거나 단순한 자바스크립트 함수여야 한다.
 * @useCapture {boolean} //true = Capturing, false = Bubling, default = false
 */
element.addEventListener(type, function[, useCapture]);

/** attachEvent
 *
 * IE8 이하
 * capture 지원하지 않는다
 */
element.attachEvent(type, function);
```

## 예제

```javascript
function addEvent() {
  var el = document.querySelectorAll('div');

  for(var i = 0, f = el.length; i < f; i++) {
    if(el[i].addEventListener) {
      el[i].addEventListener('click', thisTarget);
    } else if(el[i].attachEvent) {
      el[i].attachEvent('onclick', thisTarget);
    } else {
      el[i].onclick = thisTarget;
    }
  }
}

function thisTarget(event) {
  console.log(event.target);
}
```

## 인자 넘기기

```javascript
function AddEvent(a, b) {
  var el = document.getElementById("div");
  if(el.addEventListener) {
    el.addEventListener("click", function(a, b) { test(a, b); }, false);
  } else {
    el.attachEvent("onclick", function(a, b) { test(a, b); });
  }
}

function test(a, b) {
  alert(a + b);
}
```
