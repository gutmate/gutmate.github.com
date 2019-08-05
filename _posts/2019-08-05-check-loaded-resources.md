---
layout: post
title: '페이지 리소스 로드 후 실행(execute function after complete page load)'
author: jinnnh
date: '2019-08-05 16:00'
tags:
  - javascript
---

```javascript
document.addEventListener('readystatechange', function () {
    if (event.target.readyState === "interactive") {
        //same as:  document.addEventListener("DOMContentLoaded"...
        // same as  jQuery.ready
        console.log("All HTML DOM elements are accessible");
    }

    if (event.target.readyState === "complete") {
        console.log("Now external resources are loaded too, like css,src etc... ");
    }
});
```

> [execute function after complete page load](https://stackoverflow.com/questions/11936816/execute-function-after-complete-page-load)
