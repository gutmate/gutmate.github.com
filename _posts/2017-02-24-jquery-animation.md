---
layout: post
title:  'jQuery image animation'
author: formation.p
date: 2017-02-24 17:00
tags: [javscrpit,jQuery,prototype,animation]
---

# jQuery image animation

```js
/** 
 * 이미지 src값의 증가하는 숫자의 범위는 0000~9999 까지로 하며 파일명 또한 0000~9999까지로 만든다. (네자리 숫자)
 * imgname0000.jpg  imgname-0001.gif  imgname_0002.png...
 *
 * 이미지 확장자는 png/jpg/gif 로 한다.
 * @var rePath; 첫번째 문자 ~ 4자리 숫자.png/jpg/gif 의 전까지의 값을 반환 (4자리 숫자.png/jpg/gif(0000.jpg) 포함되지 않는다.)
 * @param {number} 이미지 컷 수
 * @param {number} 애니메이션 전환 속도
 * @param {number} 애니메이션 시작 대기시간
 */
(function($){
	$.fn.animationImg = function(steps, duration, delay) {
		var $this = $(this);
		var path = $this.attr('src');
		var rePath = /.+(?=[0-9]{4}.png)|.+(?=[0-9]{4}.jpg)|.+(?=[0-9]{4}.gif)/gm;
		var matchPath = path.match(rePath);
		matchPath = matchPath || ['null'];
		var imgPath = matchPath[0];
		var reExtn = /.png|.jpg|.gif/gm;
		var matchExtn = path.match(reExtn);
		matchExtn = matchExtn || ['null'];
		var imgExtn = matchExtn[0];
		var startNum = 0;
		var arrImg = [];
		steps = steps || 0;
		duration = duration || 100;
		delay = delay || 0;

		for(i=startNum; i<steps+1; i++) {
			if (i < 10) {
				arrImg.push(imgPath + '000' + i + imgExtn);
			} else if (i < 100) {
				arrImg.push(imgPath + '00' + i + imgExtn);
			} else if (i < 1000) {
				arrImg.push(imgPath + '0' + i + imgExtn);
			} else {
				arrImg.push(imgPath + i + imgExtn);
			}
		}

		//올바른 값일때만 실행
		if (matchPath[0] !== 'null') {
			setTimeout(function(){
				var anim = setInterval(aniImg, duration);

				function aniImg() {
					startNum = startNum + 1;
					if (startNum > steps) {
						clearInterval(anim);
					} else {
						$this.attr('src',arrImg[startNum]);
					}
				}
			}, delay);
		} else {
			return false;
		}
	};
})(jQuery);
```

## mod
