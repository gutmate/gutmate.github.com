---
layout: post
title: 'DATABASE 명령어'
author: jinnnh
date: '2018-04-30 14:00'
tags:
  - database
  - mysql
---

### 명령어

|    옵션    |          명령어          |
|:---------:|-------------------------|
| DB 생성    | `CREATE DATABASE {name};` |
| DB 확인    | `SHOW DATABASES;` |
| DB 사용    | `USE {name};` |
| TABLE 생성 | `CREATE TABLE {topic};` |
| TABEL 확인 | `SHOW TABLES;` |
|  |  |

#### TABEL 생성

```
CREATE TABLE {tbl}(
  c1 datatype(length)
  c2 datatype(length)
  ...
  PRIMARY KEY(c1)
);
```

- 예시

```
CREATE TABLE topic(
  id INT(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description TEXT NULL,
  created DATETIME NOT NULL,
  author VARCHAR(30) NULL,
  profile VARCHAR(100) NULL,
  PRIMARY KEY(id)
);
```
