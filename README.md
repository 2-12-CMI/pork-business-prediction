# pork-business-prediction
돼지고기 가격 예측 시스템 (졸업작품)

## ✋Team Members
- [![title](https://img.shields.io/badge/DEVLOPER-노기진-123456)](https://github.com/nohgijin)
- [![title](https://img.shields.io/badge/DEVLOPER-조정제-123456)](https://github.com/jaryapp)

------
## 🐖Demo
뉴스 데이터, Topic modeling

![Oct-28-2020 21-20-49](https://user-images.githubusercontent.com/38103082/97435295-8fcd8680-1963-11eb-95a7-1d44ed34f008.gif)

가격, 수출, 수입량 데이터를 차트로 보여줌

![Oct-28-2020 21-16-45](https://user-images.githubusercontent.com/38103082/97434849-f7370680-1962-11eb-8ae7-f5451abb5d57.gif)

기간별 Topic modeling, Topic들을 csv로 변환

![Oct-28-2020 21-23-46](https://user-images.githubusercontent.com/38103082/97435560-ec30a600-1963-11eb-90ed-d2d9917b6a09.gif)


## 🧞Quick Start

### 1. Clone & Install Packages
```bash
git clone https://github.com/2-12-CMI/pork-business-prediction.git

cd pork-business-prediction

npm install
```

### 2. Run develop server
```bash
npm run dev
```

Then, you can access to your server http://localhost:8080

------

## 기술 스택

**Frontend**
- ![title](https://img.shields.io/badge/-React-skyblue?&logo=React&logoColor=white)
- ![title](https://img.shields.io/badge/-Redux-purple?&logo=Redux&logoColor=white)

- ![title](https://img.shields.io/badge/-HTML5-E34F26?&logo=html5&logoColor=white)
- ![title](https://img.shields.io/badge/-SCSS-CC6699?&logo=Sass&logoColor=white)
- ![title](https://img.shields.io/badge/-Vanila_javascript-EDD63F?&logo=javascript&logoColor=white)
- ![title](https://img.shields.io/badge/-Webpack-7ac5f1?&logo=Webpack&logoColor=white)
- ![title](https://img.shields.io/badge/-Babel-eece4f?&logo=Babel&logoColor=white)

**Backend**
- ![title](https://img.shields.io/badge/-Node.js-339933?&logo=Node.js&logoColor=white)
- ![title](https://img.shields.io/badge/-Express-191919?&logo=Node.js&logoColor=white)
- ![title](https://img.shields.io/badge/-MySQL-4479A1?&logo=MySQL&logoColor=white)

**ETC**
- ![title](https://img.shields.io/badge/-EC2-232F3E?&logo=Amazon-AWS&logoColor=white)
- ![title](https://img.shields.io/badge/-Github-181717?&logo=Github&logoColor=white)
- ![title](https://img.shields.io/badge/-Slack-4A154B?&logo=Slack&logoColor=white)


------

## 프로젝트 구조

```bash
|--pork-business-prediction
    |-- config  
    |
    |-- public  // Frontend
    |   |-- images
    |   |   ...
    |   |
    |   |-- javascripts
    |   |   |-- api
    |   |   |   ...  // api 호출 함수 모음
    |   |   |
    |   |   |-- components
    |   |   |   ...  // 컴포넌트 파일
    |   |   |
    |   |   |-- utils
    |   |   |   ...  // 유틸 함수 모음
    |   |   |
    |   |   |-- index.js  // webpack entry point
    |   |
    |   |-- stylesheets
    |       |-- common
    |       |   ...  // scss 변수, mixin 등 공통 스타일
    |       |
    |       |-- components
    |           ...  // 컴포넌트별 스타일
    |         
    |-- src  // Backend
    |   |-- controller.js  // 라우터 요청에 따른 작업 처리
    |   |-- model.js  // 데이터베이스 작업 처리
    |   |-- router.js
    |
    |-- views
        ...  // pug 파일
```
