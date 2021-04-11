# Typescript_CRUD
nestjs에서 typescript를 이용해 CRUD 구현입니다. (스터디)
- docker 적용


## Spec
1. node : v10.24.0
2. npm : v6.7.0
3. nestjs : v7.6.0
4. typescript: v4.2.4


## 설치
1. `npm install -g @nestjs/cli`
    - nestjs 설치
2. `nest new project-name`
    - 프로젝트 생성 (해당 디렉토리 경로에서 실행할 경우, nest new ./)
3. `npm run start:dev`
    - 개발 모드 


## 구조
- app.controller.spec.ts : pec 이 붙은 파일들은 테스트 파일
- app.controller.ts : 앱의 request 와 response 를 담당하는 라우팅 관련 파일
- app.module.ts : 앱을 구성하는 구조의 메타데이터를 담당하는 파일
- app.service.ts : 앱의 비지니스 로직을 담당하는 파일



## 개발 과정
1. nest g res users