github로 배포하기
================

<hr />

1. yarn add gh-pages
2. package.json 파일 수정
    - 추가할 내용
```
 "hompage": "https://깃허브 유저 이름.github.io/깃허브 프로젝트 이름"
```
        * 홈페이지 주소 입력하기!
```
"scrips": {
    "deploy": "react-app"
}
```
        * deploy 명령어 추가
3. npm run build
    - 지금까지 만든 프로젝트를 build하기!
4. 3번의 문장을 자동으로 실행하도록 predeploy 작성
```
"predeploy": "npm run build"
```
5. deploy를 통해서 하단의 명령들이 자동적으로 실행함
```
"deploy": "gh-pages -d build"
```