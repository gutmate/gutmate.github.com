---
layout: post
title: '자바스크립트 카운트다운'
author: formation.p
date: '2017-02-28 10:55'
tags:
  - javascript
  - countdown
---

##자바스크립트 카운트 다운
```javascript
function countdown( elementId, seconds ){
  var element, endTime, hours, mins, msLeft, time;

  function updateTimer(){
    msLeft = endTime - (+new Date);
    if ( msLeft < 0 ) {
      console.log('done');
    } else {
      time = new Date( msLeft );
      hours = time.getUTCHours();
      mins = time.getUTCMinutes();
      element.innerHTML = (hours ? hours + ':' + ('0' + mins).slice(-2) : mins) + ':' + ('0' + time.getUTCSeconds()).slice(-2);
      setTimeout( updateTimer, time.getUTCMilliseconds());
      /* 
       * if you want this to work when you unfocus the tab and refocus or after you sleep your computer
       * and come back, you need to bind updateTimer to a $(window).focus event^^
       */
    }
  }

  element = document.getElementById( elementId );
  endTime = (+new Date) + 1000 * seconds;
  updateTimer();
}

countdown('countdown', 43200);	 // second base
```

> 출처: [http://zinee-world.tistory.com/287](http://zinee-world.tistory.com/287)
