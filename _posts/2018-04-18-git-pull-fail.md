---
layout: post
title: 'git pull 실패 해결 - You have not concluded your merge (MERGE_HEAD exists)'
author: jinnnh
date: '2018-04-18 16:00'
tags:
  - git
---

### 증상
`You have not concluded your merge (MERGE_HEAD exists)`

### 해결방법

1. 머지 취소
```bash
git merge --abort
```

2. 충돌 해결

3. 병합을 추가 하고 커밋
```bash
git status
git commit -am "커밋 내용"
```

> 커밋을 제대로 하지 않았을 경우 아래 메세지가 뜰 수 있음.<br>
> `Pulling is not possible because you have unmerged files`


4. 다시 내려 받기
```bash
git pull
```
