---
layout: post
title: 'Null Check'
author: jinnnh
date: '2018-11-08 09:30'
tags:
  - javascript
---

## Null Check

JavaScript에는 '없음'를 나타내는 값은 null와 undefined
두 값의 의미는 비슷하지만, 사용되는 목적과 장소가 다름

```javascript
let foo;
foo // undefined

const obj = {};
obj.prop; // undefined
```

```javascript
typeof null // 'object'
typeof undefined // 'undefined'
```

__프로그래머의 입장에서 명시적으로 부재를 나타내고 싶다면 항상 null을 사용__

```javascript
function printIfNotNull(input) {
    if (input !== null && input !== undefined) {
        console.log(input);
    }
}
```

```javascript
// 아래 세 개의 식은 완전히 같은 의미입니다.
input !== null && input !== undefined;
input != null;
input != undefined;

// 아래 세 개의 식은 완전히 같은 의미입니다.
input === null || input === undefined;
input == null;
input == undefined;
```

```javascript
null === undefined; // false
null == undefined;  // true

null == 1       // false
null == 'hello' // false
null == false   // false

undefined == 1       // false
undefined == 'hello' // false
undefined == false   // false
```

null check를 할때 만큼은 `==` 이 편리, 다른 모든 경우는 `===` 사용 권장


> 출처: [JAVASCRIPT로 만나는 세상 - null과 undefined](https://helloworldjavascript.net/pages/160-null-undefined.html)