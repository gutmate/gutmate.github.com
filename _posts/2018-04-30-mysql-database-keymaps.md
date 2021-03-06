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

|    옵션         |          명령어          |
|:--------------:|-------------------------|
| DB 생성         | `CREATE DATABASE {name};` |
| DB 삭제         | `DROP DATABASE {name};` |
| DB 확인         | `SHOW DATABASES;` |
| DB 사용         | `USE {name};` |
| TABLE 생성      | `CREATE TABLE {name};` |
| TABLE 확인      | `SHOW TABLES;` |
| TABLE 상세      | `DESC {name};` |
| TABLE 이름 변경 | `RENAME TABLE {name} TO {name2};` |
| 내용 추가       | `INSERT INTO {name} (title_a, title_b) VALUES('aaa', 'bbb');` |
| 내용 읽기       | `SELECT * FROM {name}` |

#### TABLE 생성

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
