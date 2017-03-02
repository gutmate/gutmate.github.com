---
layout: post
title: '자바스크립트 카운트다운'
author: formation.p
date: '2017-02-28 10:55'
tags:
  - javascript
  - countdown
---

## Pure Javascript Countdown Example (Minute&Second Base)

```javascript
function countdown( elementName, minutes, seconds )
{
  var element, endTime, hours, mins, msLeft, time;

  function twoDigits( n )
  {
    return (n <= 9 ? "0" + n : n);
  }

  function updateTimer()
  {
    msLeft = endTime - (+new Date);
    if ( msLeft < 1000 ) {
      element.innerHTML = "countdown's over!";
    } else {
      time = new Date( msLeft );
      hours = time.getUTCHours();
      mins = time.getUTCMinutes();
      element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
      setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
    }
  }

  element = document.getElementById( elementName );
  endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
  updateTimer();
}

countdown( "countdown", 1, 5 );
countdown( "countdown2", 100, 0 );
```

## Pure Javascript Countdown Example (Second Base)

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

> 출처: [zineeworld](http://zinee-world.tistory.com/287)
