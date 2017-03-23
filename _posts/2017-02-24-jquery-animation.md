---
layout: post
title: 'jQuery image animation'
author: formation.p
date: '2017-02-24 17:00'
tags:
  - javascript
  - jQuery
  - prototype
  - animation
---

## plugin

* 이미지 src값의 증가하는 숫자의 범위는 0000~9999 까지로하며 파일명 또한 0000~9999까지로 만든다. (네자리 숫자)
* imgname0000.jpg  imgname-0001.gif  imgname_0002.png...
* 이미지 확장자는 png/jpg/gif 로 한다.
* @var rePath; [첫번째 문자] ~ [4자리 숫자.] 전까지의 값을 반환
* (4자리 숫자.png/jpg/gif ([ex] 0000.jpg)는 반환값에 포함되지 않는다.)

```javascript
/**
 * @param {number} steps //이미지 컷 수
 * @param {number} duration //애니메이션 전환 속도
 * @param {string} repeat //반복 설정 default: no-repeat
 * @param {number} delay //애니메이션 시작 대기시간
 */
;(function($){

  $.fn.animationImg = function(settings) {
    var $this = $(this);
    var path = $this.attr('src');
    var rePath = /.+(?=[0-9]{4}.)/gm;
    var matchPath = path.match(rePath); //4자리 숫자.확장자를 제외한 경로부분 반환
    var reversePath = path.replace(rePath,''); //4자리 숫자.확장자 반환
    matchPath = matchPath || ['null']; //에러 방지
    var imgPath = matchPath[0]; //배열에서 값 가져오기
    var reExtn = /[0-9]+/gm; //모든 숫자 선택
    var imgExtn = reversePath.replace(reExtn,''); //4자리숫자.확장자 값에서 확장자만 반환
    var arrImg = [];

    //기본값 설정
    var option = $.extend({
      startNum: 0,
      steps: 10,
      duration: 30,
      repeat: true,
      delay: 0
    }, settings );

    for(i=option.startNum; i<option.steps+1; i++) {
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
          option.startNum = option.startNum + 1;
          if (option.startNum > option.steps) {
            if (option.repeat) {
              option.startNum = 0; //반복
            } else {
              clearInterval(anim); //정지
            }
          } else {
              $this.attr('src',arrImg[option.startNum]);
          }
        }
      }, option.delay);
    } else {
      return false;
    }
  };

})(jQuery);
```

## 실행

```html
<img src="../images/animation_0000.png" class="animation_img">
```

```javascript
$(document).ready(function(){
    $('.animation_img').animationImg({
      steps: 43,
      duration: 100,
      repeat: false
    });
});
```
