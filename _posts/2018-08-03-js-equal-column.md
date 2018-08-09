---
layout: post
title: '컬럼 높이 균일하게 맞추기'
author: jinnnh
date: '2018-08-03 15:30'
tags:
  - javascript
---

```javascript
/**
 * 배열 분리
 * @param {Number} n 나눠야 할 개수
 * @return {Array}
 */
Array.prototype.division = function (n) {
    var arr = this;
    var len = arr.length;
    var cnt = Math.floor(len / n);
    var tmp = [];

    for (var i = 0; i <= cnt; i++) {
        tmp.push(arr.splice(0, n));
    }

    return tmp;
};

/* 컬럼 높이 균일 */
var equalHghtCol = {
    /**
     * 렌더링
     * @param {String} element 대상 컬럼
     * @param {Number} n 한 라인 컬럼 개수
     */
    render: function (element, n) {
        var el = this.getHeight(element)[0];
        var _h = this.getHeight(element)[1].division(n);

        // row 최대 높이 get
        for (var i = 0; i < _h.length; i++) {
            _h[i].sort(function (a, b) {
                return b - a;
            });
        }

        this.setHeight(el, n, _h);
    },
    /**
     * 컬럼/로우 높이 구하기
     * @param {String} element
     * @return {Array} 대상 요소 배열, 대상 높이 배열
     */
    getHeight: function (element) {
        var el = document.querySelectorAll(element);
        var h_arr = [];

        for (var i = 0; i < el.length; i++) {
            h_arr.push(el[i].offsetHeight);
        }

        return [el, h_arr];
    },
    /**
     * 높이 값 부여
     * @param {Object} el
     * @param {Number} n
     * @param {Array} maxHeight 최대값 정렬 배열
     */
    setHeight: function (el, n, maxHeight) {
        var len = el.length;
        var cnt = Math.floor(len / n);
        var el_i = [];

        for (var k = 0; k < len; k++) {
            el_i.push(h);
        }

        el_i = el_i.division(n);

        // 구간 최대값 set
        for (var i = 0; i <= cnt; i++) {
            for (var j = 0; j < el_i[i].length; j++) {
                var idx = el_i[i][j];
                el[idx].style.height = maxHeight[i][0] + 'px';
            }
        }
    }
};
```

#### 실행

`avascript equalHghtCol.render( string, number )`

> __string__ <br>
> Type: String <br>
> 정렬할 element 지정 값

> __number__ <br>
> Type: Number <br>
> row 당 column 개수

```javascript
equalHghtCol.render('.sitemap li', 4);
equalHghtCol.render('li', 2);
equalHghtCol.render('#gnb>li', 7);
```
