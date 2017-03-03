---
layout: post
title: 'iOS position:fixed focus event issue'
author: formation.p
date: '2017-03-03 18:00'
tags:
  - javascript
  - iOS
  - focus
  - issue
---

```javascript
$.fn.mobileFix = function (options) {
    var $parent = $(this),
        $fixedElements = $(options.fixedElements);

    $(document)
    .on('focus', options.inputElements, function(e) {
        $parent.addClass(options.addClass);
    })
    .on('blur', options.inputElements, function(e) {
        $parent.removeClass(options.addClass);

        // Fix for some scenarios where you need to start scrolling
        setTimeout(function() {
            $(document).scrollTop($(document).scrollTop())
        }, 1);
    });

    return this; // Allowing chaining
};

// Only on touch devices
if (Modernizr.touch) {
    $("body").mobileFix({ // Pass parent to apply to
        inputElements: "input,textarea", // Pass activation child elements
        addClass: "fixfixed" // Pass class name
    });
}
```
