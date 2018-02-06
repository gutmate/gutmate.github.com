---
layout: post
title: 'git 히스토리 삭제하기(초기화)'
author: jinnnh
date: '2017-03-22 22:00'
tags:
  - git
---

1. 기존의 히스토리 삭제

```bash
$ rm -rf .git
```

2. 파일정리 후 새로운 git 설정

```bash
$ git init
$ git add .
$ git commit -m 'first commit'
```

3. git 저장소 연결 후 강제 push

```bash
$ git remote add origin {git remote url}
$ git push -u --force origin master
```