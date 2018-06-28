---
layout: post
title: '웹 접근성 정리'
author: jinnnh
date: '2018-06-28 14:00'
tags:
  - wa
  - aria
  - accessibility
---

### 레이어 영역 프린트 (해당 부분은 웹 접근성과 관련 없는 항목입니다.)

```javascript
var layerPrint = function layerPrint() {
    var printCont = $('.ly-wrap.active>div').clone(); // 활성화된 레이어 영역 복제

    $('body').append('<div class="print-div">'); // 프린트 영역 생성
    $('.print-div').append(printCont); // 프린트 영역에 레이어 영역 복사
    $('.wrap, .ly-wrap.active').hide();
    window.print();
    $('.print-div').remove();
    $('.wrap, .ly-wrap.active').removeAttr('style');
}
```

> 주의사항: body 영역 안에 printCont 영역이 존재하지 않을 시에 IE에서 프린트가 되지 않음. <br>
> 예를들어 printCont영역을 html 영역 내, body영역 밖에 만들어 두고 body를 숨기는 방법으로
> 레이어영역 프린트 처리를 할 경우 IE에서는 내용이 뜨지 않는다.


