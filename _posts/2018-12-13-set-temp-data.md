---
layout: post
title: '임시 데이터 만들기'
author: jinnnh
date: '2018-12-13 14:30'
tags:
  - javascript
---

```javascript
var tempData = [];
var firstNames = [
    '지훈', '지혜', '성민', '지은', '현우', '수진', '정훈', '혜진', '동현', '은지', '유진', '수빈', '지원', '준호', '지현', '민준', '서연', '지민', '민서', '준서', '서현', '우진', '서윤', '서준', '주원', '하준', '예준'
];
var lastNames = [
    '김', '이', '박', '최', '구', '강', '조', '윤', '장', '임', '한', '신', '오', '서', '권', '황', '송'
];
var productNames = [
    "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
];
var priceValues = [
    "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
];
for (var i = 0; i < 1000; i++) {
    var row = {};
    var productIdx = Math.floor(Math.random() * productNames.length);
    var price = parseFloat(priceValues[productIdx]);
    var quantity = 1 + Math.round(Math.random() * 10);

    row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    row.fullName = row.lastName + row.firstName;
    row.productName = productNames[productIdx];
    row.price = price;
    row.quantity = quantity;
    row.total = (price * quantity).toFixed(2) * 1;

    tempData[i] = row;
}
```
