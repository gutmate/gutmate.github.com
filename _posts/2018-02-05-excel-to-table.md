---
layout: post
title: '엑셀로 테이블 만들기'
author: jinnnh
date: '2018-02-05 16:00'
tags:
  - javascript
  - excel
---

# 엑셀로 테이블 만들기

## 1. excel2json 활용
[link](https://github.com/coolengineer/excel2json)

## 2. json to table (ajax)
json 파일을 테이블로 생성하기 위해서 ajax를 이용

```javascript
$.ajax({
    type: 'GET',
    url: 'table.json', //파일경로
    dataType: 'json',
    cache: false,
    success: function (data) {
        var tableData = data.a0; //a0 = 임의의 카테고리 이름
        var _table = [];

        //테이블 생성
        for (var i = 0; i < tableData.length; i++) {
            _table.push('<tr>');
            _table.push('    <th scope="row">'+ tableData[i].year +'</th>');
            _table.push('    <td>'+ tableData[i].position +'</td>');
            _table.push('</tr>');
        }

        _tableHtml = _table.join('\n');

        $('div').append(_tableHtml); //코드 삽입
    },
    error: function (info, xhr) {
        if (info.readyState == '4') {
            console.log('문제가 발생했습니다.\n상태코드 : ' + info.status + '\n\n' + info.responseText);
        } else {
            console.log('문제가 발생했습니다.\n잠시후 다시 시도해 주세요.\n 상태코드 : ' + info.status);
        }
    },
    timeout: 3000
});
```
