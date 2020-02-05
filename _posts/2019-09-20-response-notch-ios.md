---
layout: post
title: '아이폰X 노치 대응하기'
author: jinnnh
date: '2019-09-20 16:00'
tags:
  - css
  - iOS
---

```html
<!-- 기존 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes">
<!-- 수정 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes, viewport-fit=cover">
```

```css
/* 공통 헤더 */
.logo {
	position: absolute;
	top: 14px;
	left: 25px;
	left: calc(25px + env(safe-area-inset-left));
}

/* 우측 전체메뉴 버튼 */
.btn-menu-open {
	position: absolute;
	top: 0;
	right: 6px;
	right: calc(6px + env(safe-area-inset-right));
}

/* 본문 내용 */
.common-content {
	margin: 0 auto;
	padding: 40px 25px 52px;
	padding-left: calc(25px + env(safe-area-inset-left));
	padding-right: calc(25px + env(safe-area-inset-right));
}

/* 공통 푸터 */
.common-footer {
	padding-top: 28px;
	padding-left: env(safe-area-inset-left);
	padding-right: env(safe-area-inset-right);
}
```