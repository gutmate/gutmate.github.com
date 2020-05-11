---
layout: post
title: 'Git 디버깅(git bisect)'
author: jinnnh
date: '2020-05-11 11:00'
tags:
  - git
  - debug
---

# Git 디버깅(git bisect)

- `git bisect start` // git bisect 시작
- `git bisect good <rev>` // 단어는 good 이지만 의미는 old(과거 시점 or 시작 시점)
- `git bisect bad <rev>` // 단어는 bad 이지만 의미는 new(최근 시점 or 종료 시점)
- `git bisect <bad rev> <good rev>` // `git bisect good <rev>`, `git bisect bad <rev>` 한 번에 실행
- `git bisect reset` // git bisect 종료

```
git bisect start
git bisect good 3a72849
git bisect bad 6aab2f2
```
or
```
git bisect start
git bisect 6aab2f2 3a72849
```

> 반드시 `git bisect good`을 먼저 설정해야 하며 `git bisect bad` 시점보다 과거 시점으로 설정해야 한다.<br>
> `good`, `bad` 명령어는 일반 코드와 오류 코드의 의미로 이해하기보다 과거와 현재의 시점을 나타낸다고 보는 것이 더 옳은 것으로 보인다.

시작 시점과 종료 시점을 정해두면 그 뒤부터는 `<rev>` 빼고 `git bisect good` or `git bisect bad` 만 입력해주면 된다.

해당 커밋시점이 과거(good)로 설정했던 것과 같다면 `git bisect good`
해당 커밋시점이 최근(bad)으로 설정했던 것과 같다면 `git bisect bad`

`git bisect good` or `git bisect bad`을 실행하게 되면 비교가 끝날 때까지 파일 비교가 필요한 시점으로 checkout을 해준다.

> 파일의 비교는 수동으로 직접해야 한다. (파일을 열어서 코드변경여부를 본다거나 파일의 유무를 본다거나 하는)

몇번 하다보면 종료 된다.

종료된 시점이 설정해둔 과거와 현재의 변경이 발생한 시점.