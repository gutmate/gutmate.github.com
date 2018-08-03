---
layout: post
title: '라인별 컬럼 높이 동일하게 맞추기'
author: jinnnh
date: '2018-08-03 15:30'
tags:
  - javascript
---

### 라인별 컬럼 높이 동일하게 맞추기

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

/**
 * 컬럼 높이 균일
 * @param {String} element 대상 컬럼
 * @param {Number} n 한 라인 컬럼 개수
 */
function equalHghtCol(element, n) {
    var el = getHght(element)[0];
    var _h = getHght(element)[1].division(n);

    // 최대 값 정렬
    for (var i = 0; i < _h.length; i++) {
        _h[i].sort(function (a, b) {
            return b - a;
        });
    }

    setHght(el, n, _h);
}

/**
 * @param {String} element
 * @return {Array} 대상 요소 배열, 대상 높이 배열
 */
function getHght(element) {
    var el = document.querySelectorAll(element);
    var h_arr = [];

    for (var i = 0; i < el.length; i++) {
        h_arr.push(el[i].offsetHeight);
    }

    return [el, h_arr];
}

/**
 * @param {Object} el
 * @param {Number} n
 * @param {Array} maxHeight 최대값 정렬 배열
 */
function setHght(el, n, maxHeight) {
    var len = el.length;
    var cnt = Math.floor(len / n);
    var el_i = [];

    for (var h = 0; h < len; h++) {
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
```

```html
    <script>
        equalHghtCol('.sitemap li', 4);
    </script>
```
