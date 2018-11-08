---
layout: post
title: '클로저 패턴(closure pattern)'
author: jinnnh
date: '2018-11-08 11:00'
tags:
  - javascript
---

```javascript
var closure = (function () {
    var name = 'jinh'; // private variable

    var that = this;
    var exports = {
        // setter
        setName: function (name) {
            that.name = name;
        },
        //getter
        getName: function () {
            return that.name;
        }
    };

    return exports;
})();
````