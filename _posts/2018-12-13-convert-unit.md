---
layout: post
title: '단위 변환(convert unit)'
author: jinnnh
date: '2018-12-13 10:00'
tags:
  - javascript
---

## 설정

```javascript
/**
 * 데이터 단위 변환
 * @param {string} currentUnit 현재 실제 데이터 단위(G, M, k ...) standardUnit 배열에 있는 단위, 없으면 추가해서 사용. 단, 10^3 기준의 단위만 사용
 * @param {string} useUnit 사용할 단위(ohm, P, F, mHz ...)
 * @return {string} ex) {345} + {k} + {ohm} = '345kohm'
 */
Number.prototype.convertUnit = function (currentUnit, useUnit) {
    useUnit = useUnit || '';
    var convertValue, resultUnit, result;
    var _v = this; // 현재 값
    var n = 0; // 현재 위치 계산용
    var sign = 1; // 음수 체크
    var setDecimal = 5; // 소수점 표현 자릿수
    var standardUnit = ['G', 'M', 'k', '', 'm', 'u', 'n', 'p']; // 표현하고 싶은 단위(10^3 기준, 큰 단위부터 나열)
    var crtU = standardUnit.indexOf(currentUnit); // 기준 단위
    var chkCalRange = {
        min: crtU - n,
        max: (standardUnit.length - 1) - crtU
    }; // 범위 설정

    // 음수 체크
    if (0 > _v) {
        _v = Math.abs(_v);
        sign = -1;
    }

    // 단위 변환 - 정해진 단위(standardUnit) 범위를 넘어가면 정해놓은 범위의 마지막 단위 유지
    function cvt(value) {
        if (value >= 1000 && n + chkCalRange.min > 0) {
            value = value / 1000;
            n--;

            return cvt(value);
        } else if (1 > value && n < chkCalRange.max) {
            value = value * 1000;
            n++;

            return cvt(value);
        } else {
            return value.toFixed(setDecimal);
        }
    }

    convertValue = cvt(_v) * sign; // 최종 값 {number}
    resultUnit = crtU + n; // standardUnit 배열 순서 = 최종 변환 단위 {number}
    result = convertValue + standardUnit[resultUnit] + useUnit; // {number} + {string} + {string} = {345}{k}{ohm} = 345kohm

    return result;
};
```

## 실행

```javascript
Number('1').convertUnit('u', 'H'); // "1uH"
Number('0.1').convertUnit('u', 'H'); // "100nH"
Number('0.00001').convertUnit('u', 'H'); // "10pH"

Number('0.0000000001').convertUnit('k', 'ohm'); // "100nohm"
Number('0.00001').convertUnit('k', 'ohm'); // "10mohm"
Number('1').convertUnit('k', 'ohm'); // "1kohm"
Number('100000').convertUnit('k', 'ohm'); // "100Mohm"

Number('0.99123').convertUnit('', 'Hz'); // "991.23mHz"
Number('10').convertUnit('', 'Hz'); // "10Hz"
Number('1000').convertUnit('', 'Hz'); // "1kHz"
Number('100000000').convertUnit('', 'Hz'); // "100MHz"

var num = 0.12342;
num.convertUnit('u', 'F'); // "123.42nF"

var num = 10000;
num.convertUnit('u', 'F'); // "10mF"
```