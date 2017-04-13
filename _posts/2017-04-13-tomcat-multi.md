---
layout: post
title: 'Tomcat 다중 서버 실행'
author: formation.p
date: '2017-04-13 10:00'
tags:
  - Tomcat
  - server
image: /files/covers/vscode-icon.jpg
---

# Tomcat 다중 서버 실행하기

## localhost:xxxx (port 구분으로 연결)

### example

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Server port="8005" shutdown="SHUTDOWN">
  <Listener className="org.apache.catalina.startup.VersionLoggerListener" />
  <Listener className="org.apache.catalina.core.AprLifecycleListener" SSLEngine="on" />
  <Listener className="org.apache.catalina.core.JreMemoryLeakPreventionListener" />
  <Listener className="org.apache.catalina.mbeans.GlobalResourcesLifecycleListener" />
  <Listener className="org.apache.catalina.core.ThreadLocalLeakPreventionListener" />
  <GlobalNamingResources>
    <Resource name="UserDatabase" auth="Container"
              type="org.apache.catalina.UserDatabase"
              description="User database that can be updated and saved"
              factory="org.apache.catalina.users.MemoryUserDatabaseFactory"
              pathname="conf/tomcat-users.xml" />
  </GlobalNamingResources>


<!-- 수정해야 되는 부분 -->

  <!-- 서비스 1 // http://localhost:5050/ -->
  <Service name="Catalina">
    <Connector port="5050" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="5443" />
    <Connector port="5009" protocol="AJP/1.3" redirectPort="5443" URIEncoding="UTF-8"/>

    <Engine name="Catalina" defaultHost="localhost">
        <Realm className="org.apache.catalina.realm.LockOutRealm">
            <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
                resourceName="UserDatabase"/>
        </Realm>

        <Host name="localhost"  appBase="c:/work.git/AgroTrade/"
            unpackWARs="true" autoDeploy="true">
            <!--<Context path="" docBase="AgroTrade/" reloadable="true"/>-->
        </Host>

    </Engine>
  </Service>
  <!-- [end]: 서비스 1 -->

  <!-- 서비스 2 // http://localhost:6050/ -->
  <Service name="Catalina"> <!-- aT-BMS -->
    <Connector port="6050" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="6443" />
    <Connector port="6009" protocol="AJP/1.3" redirectPort="6443" URIEncoding="UTF-8"/>

    <Engine name="Catalina" defaultHost="localhost">
        <Realm className="org.apache.catalina.realm.LockOutRealm">
            <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
                resourceName="UserDatabase"/>
        </Realm>

        <Host name="localhost"  appBase="c:/work.git/"
            unpackWARs="true" autoDeploy="true">
            <Context path="" docBase="aT-BMS/" reloadable="true"/>
        </Host>

    </Engine>
  </Service>
  <!-- [end]: 서비스 2 -->

  <!-- 서비스 3 // http://localhost:4050/ -->
  <Service name="Catalina"> <!-- koreaports -->
    <Connector port="4050" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="4443" />
    <Connector port="4009" protocol="AJP/1.3" redirectPort="4443" URIEncoding="UTF-8"/>

    <Engine name="Catalina" defaultHost="localhost">
        <Realm className="org.apache.catalina.realm.LockOutRealm">
            <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
                resourceName="UserDatabase"/>
        </Realm>

        <Host name="localhost"  appBase="c:/work.git/"
            unpackWARs="true" autoDeploy="true">
            <Context path="" docBase="koreaports/" reloadable="true"/>
        </Host>

    </Engine>
  </Service>
  <!-- [end]: 서비스 3 -->

<!-- [end]: 수정해야 되는 부분 -->

</Server>

```

위와 같이 설정 했을 경우에는 아래처럽 접속 하면 된다.

> `http://localhost:4050/` <br />
> `http://localhost:5050/` <br />
> `http://localhost:6050/` <br />

서버를 더 추가 하고 싶다면 `<Service name="Catalina">` 부분을 계속 추가한다.

위의 서비스1 부분 처럼 `<Context />` 부분을 만들지 않고 `<Host>` 에서 바로 경로를 설정 했다면 ROOT 폴더가 있어야 가능하다.

`/work.git/aaa/ROOT/index.html` <br />
`/work.git/bbb/index.html` <br />
`/work.git/ccc/index.html` <br />


## 도메인으로 연결하기
