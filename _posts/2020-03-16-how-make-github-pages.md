---
layout: post
title: 'Git 블로그 시작하기(How to make GitHub Pages)'
author: jinnnh
date: '2020-03-16 11:00'
tags:
  - git
  - github
  - github_pages
---

# {git 블로그 :zap:시작하기}

#### :mag_right: 목차

1. [GitHub pages 장점](#GitHub-pages-장점)
1. [git 설치](#git-설치)
1. [git 명령어](#git-명령어)
1. [GitHub에서 간단하게 페이지 만들기](#GitHub에서-간단하게-페이지-만들기)
1. [jekyll을 사용하여 블로그 만들기](#jekyll을-사용하여-블로그-만들기)
1. [GitHub를 이용한 블로그](#GitHub를-이용한-블로그)
1. [참고 사이트](#참고-사이트)

## :thumbsup: GitHub pages 장점

|  | 구축형 (Wordpress) | 가입형 (Tistory) | GitHub Pages |
|:--:|:--:|:--:|:--:|
| 비용 | 유료(서버) | 무료 | 무료 |
| 서버 구축 | 필요함 | 필요없음 | 필요없음 |
| 네트워크 설정 | 필요함 | 필요없음 | 필요없음 |
| Markdown | 가능 | 불가능(제한적) | 가능 |
| HTML 편집 | 가능 | 불가능(제한적) | 가능 |

> Markdown이란?<br><br>
> 마크다운은 HTML 보다 더 빨리 입력할 수 있고, 배우는데 드는 시간도 적으며 일반적인 글자 서식을 적용하는데 사용할 수 있다. 기울이기, 인용문 넣기, 여러 수준의 제목 추가(h1, h2, h3...), 숫자/글 머리 기호 목록 작성, 취소선 긋기 같은 서식들. URL 링크, 이메일 링크, 이미지, 주석과 주석 링크, 간단한 표를 넣는데도 사용 가능하다.<br><br>
> 마크다운은 지원하는 환경이라면 어디서든 쓸 수 있으며 복사해서 옮겨도 서식이 깨지지 않는다.

## :cd: git 설치

>[Git](https://git-scm.com/)

## :computer: git 명령어

#### 최초 설정(필수)

	$ git config --global user.name '<user name>'
	$ git config --global user.name 'gutmate'

	$ git config --global user.email '<user.email@example.domain>'
	$ git config --global user.email 'gutmate@github.com'

#### 기본 명령어

|  | command |
|-|-|
| 전체 설정 확인 |  `git config --global -l` |
| 저장소 url 변경 |  `git remote set-url <name> <url>` <br> `git remote set-url origin https://github.com/gutmate/gutmate.github.io.git` |
| 상태 확인 |  `git status` |
| 파일을 추적 대상에 등록 |  `git add <file name>` <br> `git add index.html`|
| 파일을 추적 대상에 등록(전체) |  `git add .` |
| 커밋 |  `git commit -m '<commit message>'` <br> `git commit -m 'first commit'`|
| 서버에 업로드 |  `git push <repogitory> <branch>` <br> `git push origin master` |
| 서버에서 다운로드 |  `git clone <repository> <directory>` <br> `git clone https://github.com/gutmate/gutmate.github.io.git github-gutmate`|
| 변경 이력 보기 |  `git log` |


>[누구나 쉽게 이해할 수 있는 Git](https://backlog.com/git-tutorial/kr/)

## :page_facing_up: GitHub에서 간단하게 페이지 만들기

1. repository 생성(Github Pages로 이용할 repository 이름은 반드시 {account}.github.io 로 생성 ex)theuberuid.github.io)
1. 해당 repository > Settings > GitHub Pages > Choose a theme
1. 테마 선택

## :book: jekyll을 사용하여 블로그 만들기

#### jekyll?

- 위에서 다룬 Markdown 포맷을 지원하기 위해서 GitHub에서는 [Jekyll(:kr:)](https://jekyllrb-ko.github.io/)이라는 정적 사이트 생성기(Static Site Generator)를 사용한다.
- Markdown 문법으로 작성된 파일을(*.md) 정적 사이트 생성기가 알아서 HTML로 바꾸어 준다.

> **정적**이라는 단어는 그 동안에 웹 어플리케이션이 발전해 온 데 있어서 **정반대**의 위치에 있는 단어다.<br>
> **정적인 페이지**란 말그대로 이미 **완성된 HTML**이다. 클라이언트의 요청을 받는 서버의 역할은 단순히 이렇게 완성되어 있는 HTML을 보내주는 역할을 할 뿐이다. 이러한 모델은 **우편부**를 통해서 비유하기에 아주 적절하다.<br>
> 그렇다면 웹이 **동적**으로 발전해왔다는 건 어떤 걸 의미할까?<br>
> 여기서 **동적**이란 화려한 **시각적 효과**나 **움직임**을 지칭하는 단어가 **아니다**. 좀 더 정확히 말하자면 **HTML 페이지**를 클라이언트의 요청에 따라서 **실시간으로 생성해서 보내준다**는 의미를 가지고 있다. 즉 **서버는 완성된 HTML을 가지고 있지 않다**. 거의 완성되어있거나, 심지어는 아무것도 없이도 **요청에 따라 실시간으로 완성된 문서**를 다시 보내준다.

> [정적 웹사이트 생성기의 역습 - 동적 스크립트를 넘어 다시 정적 컨텐츠로](https://blog.nacyot.com/articles/2014-01-15-static-site-generator/)

#### jekyll theme

> [jekyll themes download](http://jekyllthemes.org/)

> [jekyll themes download 2](http://themes.jekyllrc.org/)

#### 구조

가장 기본적인 Jekyll 폴더 구조

```
├── _config.yml
├── _data
|   └── members.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.md
|   └── on-simplicity-in-technology.md
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
|   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass
|   ├── _base.scss
|   └── _layout.scss
├── _site
├── .jekyll-metadata
└── index.html
```

<div class="mobile-side-scroller">
    <table>
        <thead>
            <tr>
                <th>파일 / 디렉토리</th>
                <th>설명</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p><code>_config.yml</code></p>
                </td>
                <td>
                    <p>
                        환경설정 정보를 보관한다. 명령어를
                        실행할 때 여러가지 옵션들을 추가할 수도 있지만, 그렇게 따로 외우는
                        것보다 이 파일에 정의해두는게 더 편리하다.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><code>_drafts</code></p>
                </td>
                <td>
                    <p>
                        초안이란 아직 게시하지 않은 포스트를 말한다. 파일명 형식에 날짜가
                        없다: <code>title.MARKUP</code>. 사용 방법은 초안 활용하기를 참고하라.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><code>_includes</code></p>
                </td>
                <td>
                    <p>
                        재사용하기 위한 파일을 담는 디렉토리로서, 필요에 따라 포스트나
                        레이아웃에 쉽게 삽입할 수 있다.
                        <code>{% raw %}{% include file.ext %}{% endraw %}</code> 와 같이
                        Liquid 태그를 사용하면 <code>_includes/file.ext</code> 파일에 담긴
                        코드가 삽입된다.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><code>_layouts</code></p>
                </td>
                <td>
                    <p>
                        포스트를 포장할 때 사용하는 템플릿이다. 각 포스트 별로
                        레이아웃을 선택하는 기준은
                        YAML 머리말이며, 자세한 내용은 다음
                        섹션에서 설명한다.
                        <code>{% raw %}{{ content }}{% endraw %}</code> 와 같이 Liquid 태그를
                        사용하면 페이지에 컨텐츠가 주입된다.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><code>_posts</code></p>
                </td>
                <td>
                    <p>
                        한마디로 말하면, 당신의 컨텐츠다. 중요한 것은 파일들의 명명규칙인데,
                        반드시 이 형식을 따라야 한다:
                        <code>YEAR-MONTH-DAY-title.MARKUP</code>.
                        고유주소는 포스트 별로 각각 정의할 수
                        있지만, 날짜와 마크업 언어 종류는 오로지 파일명에 의해
                        결정된다.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><code>_data</code></p>
                </td>
                <td>
                    <p>
                        사이트에 사용할 데이터를 적절한 포맷으로 정리하여 보관하는 디렉토리.
                        Jekyll 엔진은 이 디렉토리에 있는 (확장자와 포맷이 <code>.yml</code>
                        또는 <code>.yaml</code>, <code>.json</code>, <code>.csv</code> 인)
                        모든 데이터 파일을 자동으로 읽어들여 `site.data` 로 사용할 수 있도록
                        만든다. 만약 이 디렉토리에 <code>members.yml</code> 라는 파일이
                        있다면, <code>site.data.members</code> 라고 입력하여 그 컨텐츠를
                        사용할 수 있다.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><code>_sass</code></p>
                </td>
                <td>
                    <p>
                        Sass 조각파일들로, 프로젝트의 <code>main.scss</code> 에 임포트할 수 있으며
                        임포트 후에는 다시 하나의 스타일시트(<code>main.scss</code>)로 가공되어
                        사이트에 사용되는 스타일들을 정의한다.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><code>_site</code></p>
                </td>
                <td>
                    <p>
                        Jekyll 이 변환 작업을 마친 뒤 생성된 사이트가 저장되는 (디폴트)
                        경로이다. 대부분의 경우, 이 경로를 <code>.gitignore</code> 에
                        추가하는 것은 괜찮은 생각이다.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><code>.jekyll-metadata</code></p>
                </td>
                <td>
                    <p>
                        Jekyll 은 이 파일을 참고하여, 마지막으로 빌드한 이후에 한번도 수정되지
                        않은 파일은 어떤 것인지, 다음 빌드 때 어떤 파일을 다시 생성해야 하는지
                        판단할 수 있다. 생성된 사이트에 이 파일이 복사되지는 않는다. 대부분의
                        경우, 이 파일을 <code>.gitignore</code> 에 추가하는 것은 괜찮은
                        생각이다.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p><code>index.html</code> 또는 <code>index.md</code> 및 다른 HTML,
                        마크다운, Textile 파일</p>
                </td>
                <td>
                    <p>
                        Jekyll 은 YAML 머리말 섹션을 가진 모든
                        파일을 찾아 변환 작업을 수행한다. 위에서 언급하지 않은 다른 디렉토리나
                        사이트의 루트 디렉토리에 있는 모든 <code>.html</code>,
                        <code>.markdown</code>, <code>.md</code>, <code>.textile</code> 이
                        여기에 해당한다.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>다른 파일/폴더</p>
                </td>
                <td>
                    <p>
                        <code>css</code> 나 <code>images</code> 폴더, <code>favicon.ico</code>
                        파일같이 앞서 언급하지 않은 다른 모든 디렉토리와 파일들은 있는 그대로
                        생성된 사이트에 복사한다. 다른 사람들이 만든 사이트는 어떤식으로
                        생겼는지 궁금하다면, Jekyll 을 사용하는 사이트들이 이미 많이 있으니 살펴보도록 한다.
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div>

> [디렉토리 구조 | jekyll(ko)](https://jekyllrb-ko.github.io/docs/structure/)




#### 포스팅하기

##### 1. 파일 생성

- 파일 이름 `_posts/YYYY-MM-DD-name-of-post.md`
- 기본 문법 MARKDOWN(*.md)

##### 2. 머리말 설정

- 머리말 설정

```markdown
---
layout: post
title: git 블로그 시작하기
date: 2018-12-25 20:00:00 +0900
image: github.png
tags: Git
---
```

##### 3. 본문 작성

- 마크다운을 이용해서 본문 작성

```markdown
# 제목

## 부제목

- 내용 A
- 내용 B
- 내용 C

[링크제목](https://링크주소.com/)
```

##### 4. github서버에 전송

```
$ git add .
$ git -m 'Add post'
$ git push origin master
```

## :link: 참고 사이트

> [누구나 쉽게 이해할 수 있는 Git](https://backlog.com/git-tutorial/kr/)

> [윈도우에서 지킬 설치 및 블로그 생성하기](https://shryu8902.github.io/jekyll/jekyll-on-windows/)

> [정적 웹사이트 생성기의 역습 - 동적 스크립트를 넘어 다시 정적 컨텐츠로](https://blog.nacyot.com/articles/2014-01-15-static-site-generator/)
