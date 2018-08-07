---
layout: post
title: '레이어 영역 프린트(modal)'
author: jinnnh
date: '2018-06-28 14:00'
tags:
  - javascript
  - print
  - modal
---

### 레이어 영역 프린트

```javascript
var layerPrint = function layerPrint() {
    var printCont = $('.ly-wrap.active>div').clone(); // 활성화된 레이어 영역 복제

    $('body').append('<div class="print-div">'); // 프린트 영역 생성
    $('.print-div').append(printCont); // 프린트 영역에 레이어 영역 복사
    $('.wrap, .ly-wrap.active').hide();
    window.print();
    $('.print-div').remove(); // 사용이 끝난 영역 삭제
    $('.wrap, .ly-wrap.active').removeAttr('style');
}
```