---
layout: post
title: 'background-image animation keyframes'
author: jinnnh
date: '2017-02-21 16:00'
tags:
  - css
  - animation
  - keyframes
---

# background-image @keyframes 이용해서 animation 구현하기 (gif)

## 적용방법

### 무한반복 (infinite)

- n = 총 frame 수
- STEPS = n
- PERCENT = ( ( 100 / (n-1) ) + 100) %

```css
div {
  animation: gifAnimation 1s steps(STEPS) infinite;
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

- n = 총 frame 수
- STEPS = n-1
- PERCENT = 100% //fix 100%

```css
div {
  animation: gifAnimation 1s steps(STEPS) 1 forwards;
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

- n = 총 frame 수 //5
- STEPS = n //5
- PERCENT = ( ( 100 / (5-1) ) + 100) % //125%

```css
div {
  animation: gifAnimation 1s steps(5) infinite;
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

- n = 총 frame 수 //5
- STEPS = n-1 //4
- PERCENT = 100% //fix 100%

```css
div {
  animation: gifAnimation 1s steps(4) 1 forwards;
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
