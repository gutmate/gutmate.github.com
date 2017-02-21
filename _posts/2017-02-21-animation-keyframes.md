---
layout: post
title:  'background-image animation keyframes '
author: formation.p
date: 2017-02-21 16:00
tags: [css,animation,keyframes]
image: /files/covers/solid-state-logic.jpg
cover:
  title: '80-channel Solid State Logic (SSL) XL 9000 K Series Console at Audio Mix House, Studio B'
  link: https://flic.kr/p/j1DcB
  author:
    name: 'Audio Mix House'
    link: https://www.flickr.com/photos/audiomixhouse/
---

# 백그라운드 이미지 css @keyframes 이용해서 animation 구현하기 (gif)

## 적용방법
### 무한반복 (infinite)
* n = 총 frame 수
* PERCENT = ( ( 100 / (n) ) + 100) %

```css
div {
  anmation: gifAnimation 1s steps(n) infinite;
}

@keyframes gifAnimation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: PERCENT 0;
  }
}
```

### 한번만 실행 (1)
* n = 총 frame 수 - 1
* PERCENT = 100% //fix 100%

```css
div {
  anmation: gifAnimation 1s steps(n) 1 forwards;
}

@keyframes gifAnimation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: PERCENT 0;
  }
}
```

## 실제적용사례
### 무한반복 (infinite)
* n = 총 frame 수 //5
* PERCENT = ( ( 100 / (5-1) ) + 100) % //125%

```css
div {
  anmation: gifAnimation 1s steps(5) infinite;
}

@keyframes gifAnimation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 125% 0;
  }
}
```

### 한번만 실행 (1)
* n = 총 frame 수 //5
* PERCENT = 100% //fix 100%

```css
div {
  anmation: gifAnimation 1s steps(4) 1 forwards;
}

@keyframes gifAnimation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}
```

