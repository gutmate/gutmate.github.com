---
layout: post
title: '자주쓰는 git 명령어'
author: jinnnh
date: '2017-03-21 16:00'
tags:
  - git
---

## git 명령어

|  | command |
|-|-|
| 전체 설정 확인 |  `git config --global -l` |
| 저장소 url 변경 |  `git remote set-url <name> <url>` <br> `git remote set-url origin https://github.com/gutmate/gutmate.github.io.git` |
| 사용자 이름 변경 |  `git config --global user.name <user.name>` |
| 사용자 이메일 변경 |  `git config --global user.email <user.email>` |
| 상태 확인 |  `git status` |
| 파일을 추적 대상에 등록 |  `git add <file name>` <br> `git add index.html`|
| 파일을 추적 대상에 등록(전체) |  `git add .` |
| 커밋 |  `git commit -m '<commit message>'` <br> `git commit -m 'first commit'`|
| 서버에 업로드 |  `git push <repogitory> <branch>` <br> `git push origin master` |
| 서버에서 다운로드 |  `git clone <repository> <directory>` <br> `git clone https://github.com/theUBERuid/theUBERuid.github.io.git theUBERuid`|
| 변경 이력 보기 |  `git log` |