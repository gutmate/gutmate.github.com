---
layout: post
title: '임시 데이터 만들기'
author: jinnnh
date: '2018-12-13 14:30'
tags:
  - javascript
---

```javascript
function generateData(n) {
    var tempData = [];
    var firstNames = [
        '지훈', '지혜', '성민', '지은', '현우', '수진', '정훈', '혜진', '동현', '은지', '유진', '수빈', '지원', '준호', '지현', '민준', '서연', '지민', '민서', '준서', '서현', '우진', '서윤', '서준', '주원', '하준', '예준'
    ];
    var lastNames = [
        '김', '이', '박', '최', '구', '강', '조', '윤', '장', '임', '한', '신', '오', '서', '권', '황', '송'
    ];
    var productNames = [
        "홍차", "녹차", "에스프레소", "에스프레소 더블샷", "카페라떼", "화이트 초콜릿 모카", "카라멜 라뗴", "아메리카노", "카푸치노", "에스프레소 트리플", "에스프레소 콘파냐", "페퍼민트"
    ];
    var priceValues = [
        "3200", "3300", "3600", "3900", "4200", "4500", "4500", "4300", "4700", "4400", "4600", "4100"
    ];
    for (var i = 0; i < n; i++) {
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

    return tempData;
}
```
