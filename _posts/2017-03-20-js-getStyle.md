---
layout: post
title: '엘리먼트 속성 가져오기'
author: formation.p
date: '2017-03-20 16:00'
tags:
  - javascript
---

## getComputedStyle()

IE9 이상

```javascript
var style = window.getComputedStyle(Element);
console.log(style.width);
console.log(style.backgrondColor);
```

IE9 이하

```javascript
window.onload = function () {
  if (!window.getComputedStyle) {
    window.getComputedStyle = function(element) {
      return element.currentStyle;
    }
  }
}
```
