---
layout: post
title: 'dpi에 따른 이미지 파일명과 대응 모바일기기'
author: jinnnh
date: '2018-04-26 14:00'
tags:
  - 해상도
  - 모바일
---

### dpi

`mdpi` 1px = 1dp

|  | ldpi | mdpi | tvdpi | hdpi | xhdpi | xxhdpi | xxxhdpi |
|-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| mdpi | 0.75 | 1 | 1.33 | 1.5 | 2 | 3 | 4 |
| dpi | 120 | 160 | 213 | 240 | 320 | 480 | 640 |
| 크기 예 | 36 x 36 | 48 x 48 | 64 x 64 | 72 x 72 | 96 x 96 | 144 x 144 | 192 x 192 |
| iOS | | 3GS | | | 4~8, iPad3~ | 6+~8+, X | |
| Android | | | | S2 | S3, NOTE3 | S4, S5, NOTE4 | S6~S9, G3~G6 |
| image | | img.png | | | img@2x.png | img@3x.png | |

### 이미지 파일명 예

![](/files/dpi_image_exmaple.jpg)

```css
@media (-webkit-min-device-pixel-ratio: 2) {
  .icon-git {
    background-image: url(icon_git@2x.png);
  }
}

@media (-webkit-min-device-pixel-ratio: 3) {
  .icon-git {
    background-image: url(icon_git@3x.png);
  }
}
```
