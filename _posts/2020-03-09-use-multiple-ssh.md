---
layout: post
title: 'ssh를 사용해서 동일한 컴퓨터에서 GitHub에 여러개의 계정 연결(use multiple ssh-keys for different accounts)'
author: jinnnh
date: '2020-03-09 17:30'
tags:
  - git
  - github
  - ssh
---

## 1. 로컬에 SSH 키 생성하기

### 1) .ssh 폴더로 이동하기(기본적으로 저장되는 디렉토리) -없다면 키를 생성할 때 자동으로 생성된다. (따로 직접 만들어도 된다.)

```bash
$ cd ~/.ssh
```

### 2) .ssh 디렉토리가 존재한다면 기존의 키를 확인하자.


```bash
$ ls

id_rsa.pub				id_rsa
```
.pub가 붙은 파일은 공개 키, 아닌 것은 개인 키


### 3) ssh 키 생성하기

```bash
$ ssh-keygen -t rsa -C '{username}@gamil.com' //계정의 이메일 주소
```
> 여기서 새로운 키를 저장할 경로를 묻는다.<br>
> ex) username01_gmail_rsa // 계정_메일호스트_rsa

```bash
Enter file in which to save the key (/Users/USERNAME/.ssh/id_rsa): /Users/USERNAME/.ssh/username_gmail_rsa
```

이후 암호를 두번 입력해야 하는데 그냥 엔터를 쳐서 넘어가도 무방하다. (암호를 입력하게 되면 다른 PC에 복사해서 쓸 때 암호를 입력해줘야 한다. 암호입력하지 않는 것을 추천한다.)

**생성완료**

### 4) SSH키 로컬에 등록하기

```bash
$ eval "$(ssh-agent -s)" // ssh agent 시작

$ ssh-add ~/.ssh/username_gmail_rsa
```

### 5) 생성한 ssh 공개 키 복사하기

```bash
$ cat username_gmail_rsa.pub //파일내용 보기

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDIFCYRPso/ username@gamil.com  //이부분 복사 (실제로는 굉장히 길다)
```

## 2. 서버에 SSH키 등록하기

### 1) 해당 서버에 키를 등록해주도록 한다

> Settings > SSH and GPG keys > New SSH key 버튼 클릭 > Title에는 구분할 수 있는 텍스트 입력, Key에는 복사해두었던 공개키를 넣어준다. > Add SSH key 버튼 클릭

**등록완료**

## 3. Config 파일 생성하기

서버에 ssh 인증을 할 때 여러개의 키가 존재할 때 어떤 키를 참조해야 하는지에 대한 옵션을 정해주어야 한다.

### 1) config 파일 생성

```bash
$ touch confing //0byte 의 config 파일 생성
```

config 파일이 있는 폴더를 열어 에디터로 내용을 추가 해준다


```
# Default account
Host USERNAME01.github.com #임의로 지정하는 곳(허나 서버와 연결할 때 써줘야 하는 닉네임 같은 것이기 때문에 사용하는 서버이름(계정)과 동일하게 해주면 알아보기 편할 것이다.
  HostName github.com #호스트 지정
  User git
  IdentityFile ~/.ssh/USERNAME01_gmail_rsa #기존에 생성했던 파일 이름 (이곳에는 기존에 생성해서 존재하는 키 파일명을 그대로 써주어야 한다.)

# Second account
  Host USERNAME02.github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/USERNAME02_gmail_rsa

# third account
  Host USERNAME03.github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/USERNAME03_hotmail_rsa
```

계속해서 추가가 가능

### 2) 서버와 연결이 잘 되었는지 확인

```bash
$ ssh -T USERNAME01.github.com

Hi USERNAME01! You've successfully authenticated, but GitHub does not provide shell access.

$ ssh -T USERNAME02.github.com

Hi USERNAME02! You've successfully authenticated, but GitHub does not provide shell access.
```

## 4. 새 계정으로 push해보기

```bash
$ git init

$ git commit -am 'first commit'

$ git remote add origin git@USERNAME01.github.com:USERNAME01/REPOSITORY.git

$ git push origin master
```

## 5. 사용중에 갑자기 git access denied 메시지가 뜨면서 실패한다면?

```bash
$ ssh-add ~/.ssh/USERNAME01_gmail_rsa
```

위에서 입력했듯이 ssh 등록 명령어를 재입력해서 다시 등록해보고 연결을 시도해보자.