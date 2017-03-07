---
layout: post
title: 'addEventListener'
author: formation.p
date: '2017-03-07 10:40'
tags:
  - javascript
---

```javascript
(function() {
  var el = document.querySelectorAll('div');
  
  for(var i = 0, f = el.length; i < f; i++) {
    if(el[i].addEventListener) {
      //modern browser
      el[i].addEventListener('click', thisTarget);
    } else if(el[i].attatchEvent) {
      //IE 8 이하
      el[i].attatchEvent('click', thisTarget);
    } else {
      el[i].onclick = thisTarget;
    }
  }

  function thisTarget(event) {
    console.log(event.target);
  }
})();
```
