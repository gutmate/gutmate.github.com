---
layout: post
title: 'SSH 권한 설정'
author: jinnnh
date: '2017-07-29 15:40'
tags:
  - SSH
  - server
  - git
---

# SSH 권한 설정

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
chmod 644 ~/.ssh/authorized_keys
chmod 644 ~/.ssh/known_hosts
```