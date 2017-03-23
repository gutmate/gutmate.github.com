---
layout: post
title: 'jQuery 이미지 애니메이션'
author: formation.p
date: '2017-02-25 17:00'
tags:
  - javascript
  - jQuery
---

# jQuery image animation

* 이미지 src값의 증가하는 숫자의 범위는 0000~9999 까지로 하며 파일명 또한 0000~9999까지로 만든다. (네자리 숫자)
* imgname0000.jpg | imgname-0001.gif | imgname_0002.png...
* 이미지 확장자는 png/jpg/gif 로 한다.
* @var rePath; [첫번째 문자] ~ [4자리 숫자.] 전까지의 값을 반환
* (4자리 숫자.png/jpg/gif ([ex] 0000.jpg)는 반환값에 포함되지 않는다.)

```javascript
;(function(global, $){
  'use strict';

  //플러그인 이름 설정
  var plugin_name = 'animationImg';

  if (!$.fn[plugin_name]) {
    $.fn[plugin_name] = function(settings) {
      var $this = $(this);
      var path = $this.attr('src');
      var rePath = /.+(?=[0-9]{4}.)/gm; //[첫번째 문자] ~ [4자리 숫자.] 전까지의 값을 반환
      var matchPath = path.match(rePath); //4자리 숫자.확장자를 제외한 경로부분 반환
      var reversePath = path.replace(rePath,''); //4자리 숫자.확장자 반환
      matchPath = matchPath || ['null']; //에러 방지
      var imgPath = matchPath[0]; //배열에서 값 가져오기
      var reExtn = /[0-9]+/gm; //모든 숫자 선택
      var imgExtn = reversePath.replace(reExtn,''); //4자리숫자.확장자 값에서 확장자만 반환
      var arrImg = [];
      var i;

      //기본값 설정 & 사용자 설정과 병합
      var option = $.extend({
        start: 0,
        steps: 10,
        duration: 30,
        repeat: true,
        delay: 0
      }, settings);

      //이미지 담아두기
      for(i=option.start; i<option.steps+1; i++) {
        if (i < 10) {
          arrImg.push(imgPath + '000' + i + imgExtn);
        } else if (i < 100) {
          arrImg.push(imgPath + '00' + i + imgExtn);
        } else if (i < 1000) {
          arrImg.push(imgPath + '0' + i + imgExtn);
        } else {
          arrImg.push(imgPath + i + imgExtn);
        }
      }

      //올바른 값일때만 실행
      if (matchPath[0] !== 'null') {
        setTimeout(function(){
          var anim = setInterval(aniImg, option.duration);

          function aniImg() {
            option.start = option.start + 1;
            if (option.start > option.steps) {
              if (option.repeat) {
                option.start = 0; //반복
              } else {
                clearInterval(anim); //정지
              }
            } else {
                $this.attr('src',arrImg[option.start]);
            }
          }
        }, option.delay);
      } else {
        return false;
      }

      //jQuery 체이닝 설정
      return this;

    };
  }

})(window, window.jQuery);
```

> ### [github - jquery.animationImg](https://github.com/gutmate/animationJS)
