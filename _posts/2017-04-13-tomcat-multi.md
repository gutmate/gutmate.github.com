---
layout: post
title: 'Tomcat 다중 서버 실행'
author: jinnnh
date: '2017-04-13 10:00'
tags:
  - Tomcat
  - server
image: /files/covers/tomcat-icon.jpg
---

# Tomcat 다중 서버 실행하기

## 1. localhost:xxxx (port 구분으로 연결)

### example

#### `tomcat/conf/server.xml`

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

        <Host name="localhost"  appBase="c:/work/aaa/"
            unpackWARs="true" autoDeploy="true">
            <!--<Context path="" docBase="aaa/" reloadable="true"/>-->
        </Host>

    </Engine>
  </Service>
  <!-- [end]: 서비스 1 -->

  <!-- 서비스 2 // http://localhost:6050/ -->
  <Service name="Catalina">
    <Connector port="6050" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="6443" />
    <Connector port="6009" protocol="AJP/1.3" redirectPort="6443" URIEncoding="UTF-8"/>

    <Engine name="Catalina" defaultHost="localhost">
        <Realm className="org.apache.catalina.realm.LockOutRealm">
            <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
                resourceName="UserDatabase"/>
        </Realm>

        <Host name="localhost"  appBase="c:/work/"
            unpackWARs="true" autoDeploy="true">
            <Context path="" docBase="bbb/" reloadable="true"/>
        </Host>

    </Engine>
  </Service>
  <!-- [end]: 서비스 2 -->

  <!-- 서비스 3 // http://localhost:4050/ -->
  <Service name="Catalina">
    <Connector port="4050" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="4443" />
    <Connector port="4009" protocol="AJP/1.3" redirectPort="4443" URIEncoding="UTF-8"/>

    <Engine name="Catalina" defaultHost="localhost">
        <Realm className="org.apache.catalina.realm.LockOutRealm">
            <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
                resourceName="UserDatabase"/>
        </Realm>

        <Host name="localhost"  appBase="c:/work/"
            unpackWARs="true" autoDeploy="true">
            <Context path="" docBase="ccc/" reloadable="true"/>
        </Host>

    </Engine>
  </Service>
  <!-- [end]: 서비스 3 -->

<!-- [end]: 수정해야 되는 부분 -->

</Server>

```

* `<Host appBase="{path}">` 에 해당 서버의 폴더경로를 설정한다. `<Context>` 를 사용할 경우 `<Context codBase="{path}">` 에 해당 서버의 폴더경로를 설정한다.
(`<Context>` 를 지정하지 않을 경우 default 값으로 ROOT가 지정이 되어 하위에 ROOT폴더가 필요한 것으로 보인다.)

* 위의 서비스1 부분 처럼 `<Context />` 부분을 만들지 않고 `<Host>` 에서 바로 경로를 설정 했다면 ROOT 폴더가 있어야 가능하다. <br /><br />
`/work/aaa/ROOT/index.html` <br />
`/work/bbb/index.html` <br />
`/work/ccc/index.html` <br />

* 위와 같이 설정 했을 경우에는 아래처럽 접속 하면 된다. <br /><br />
`http://localhost:4050/` <br />
`http://localhost:5050/` <br />
`http://localhost:6050/` <br />

* 서버를 더 추가 하고 싶다면 `<Service name="Catalina">` 부분을 계속 추가한다.


## 2. 도메인으로 연결

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
  <Service name="Catalina"> <!-- port를 기본 port인 80으로 설정한다 -->
    <Connector port="80" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" />
    <Connector port="8009" protocol="AJP/1.3" redirectPort="8443" URIEncoding="UTF-8"/>

    <Engine name="Catalina" defaultHost="localhost">
        <Realm className="org.apache.catalina.realm.LockOutRealm">
            <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
                resourceName="UserDatabase"/>
        </Realm>

        <!-- 서비스 1 // http://www.aaa.com/ -->
        <Host name="www.aaa.com"  appBase="c:/work/aaa/"
            unpackWARs="true" autoDeploy="true">
        </Host>
        <!-- [end]: 서비스 1 -->

        <!-- 서비스 2 // http://www.bbb.com/ -->
        <Host name="www.bbb.com"  appBase="c:/work/"
            unpackWARs="true" autoDeploy="true">
            <Context path="" docBase="bbb/" reloadable="true"/>
        </Host>
        <!-- [end]: 서비스 2 -->

        <!-- 서비스 3 // http://www.ccc.com/ -->
        <Host name="www.ccc.com"  appBase="c:/work/"
            unpackWARs="true" autoDeploy="true">
            <Context path="" docBase="ccc/" reloadable="true"/>
        </Host>
        <!-- [end]: 서비스 3 -->

    </Engine>
  </Service>

<!-- 수정해야 되는 부분 -->
</Server>
```

* `<Service><Connector port="80">` 의 port를 80으로 설정한다.

* 위의 서비스1 부분 처럼 `<Context />` 부분을 만들지 않고 `<Host>` 에서 바로 경로를 설정 했다면 ROOT 폴더가 있어야 가능하다. <br /><br />
`/work/aaa/ROOT/index.html` <br />
`/work/bbb/index.html` <br />
`/work/ccc/index.html`

* 위와 같이 설정 했을 경우에는 아래처럽 접속 하면 된다. <br /><br />
`http://www.aaa.com/` <br />
`http://www.bbb.com/` <br />
`http://www.ccc.com/` <br />

* 서버를 더 추가 하고 싶다면 `<Host>` 부분을 계속 추가한다.
