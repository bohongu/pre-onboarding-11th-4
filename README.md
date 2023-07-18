# 원티드 프리온보딩 인턴십 4주차 개인 과제

## 구현 목표

### [한국임상정보](https://clinicaltrialskorea.com/) 사이트의 검색영역을 클론하기

<p align="center">
<img src='https://github.com/dugeun-dugeun-project/Attic-Bookstore/assets/91203029/3384432b-01a6-4872-bb2c-8b7f896d1a78' width='600px' height='600px'/>
</p>

## 참고 자료

### [API Repository](https://github.com/walking-sunset/assignment-api)

## 폴더 구조

```
src
├─components
├─constants
├─hooks
├─types
└─utils
```

## 기능 구현 & 과제 수행 내용

### 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

- 검색어가 없을 시 **검색어 없음** 표출

### API 호출별로 로컬 캐싱 구현

- 로컬 캐싱 구현
  - CacheStorage를 사용하여 로컬 캐싱 구현
    > HTTP 통신시 임시 저장된 캐시가 있다면 불필요한 데이터 전송을 줄이고 서버에 불필요한 요청을 줄여주어 빠른 통신이 가능해지며 페이지 로딩 속도를 개선
  - `keyword`가 바뀔 때 마다 해당 `keyword`에 매칭되는 CacheStorage에 key값(요청 url) 유무 확인
  - 매칭되는 key값이 있으면 CacheStorage의 값을 사용
  - 매칭되는 key값이 없으면 api 호출, 요청 url, response를 key, value에 저장
- Expire time 구현
  - 캐싱 헤더에 `Cache-Control(캐시 유효 시간)`과 `Cached-Date(캐싱한 시간)` 을 저장
  - 캐싱된 값을 사용할 때 `expireTime(캐시 만료 시간) = Cache-Control + Cached-Date` 과 현재 시간을 비교하여 `expireTime`이 현재시간 보다 작거나 같다면 api 재호출하는 방식
  - 편의를 위해 현재는 `Cache-Control`을 1시간으로 지정

### 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

- **Debounce** 사용

```
debounce : 짧은 간격으로 연속된 이벤트가 발생하면 이벤트 핸들러를 호출하지 않다가 일정 시간이 경과한 이후 한 번만 호출
```

<p align="center">
<img src='https://github.com/dugeun-dugeun-project/Attic-Bookstore/assets/91203029/1476a3b0-cff9-4e9c-8c6c-ed68982ca712' width='600px' height='500px'/>
</p>

- 매번 호출하는 것이 아니라 0.5초 뒤에 해당 함수 호출
- `cleanup`함수를 사용하여 `setTimeout` 정리

### API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

- 캐싱된 값은 api호출을 하지않는다

<p align="center">
<img src='https://github.com/dugeun-dugeun-project/Attic-Bookstore/assets/91203029/556ff4cd-4960-4963-8589-d040a05f82da' width='600px' height='500px'/>
</p>

### 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- 방향기 ↑
  - 추천 검색어 위로 이동
- 방향기 ↓
  - 추천 검색어 아래로 이동
- Enter
  - 해당 검색어 alert창 띄우기

### RecommandItem 최적화

- 적용 전(왼) 적용 후(오) 비교

| ![image.jpg1](https://github.com/pre-onboarding-11th-5/pre-onboarding-11th-3-5/assets/91203029/5d8326f8-20fa-42a9-876c-ea45143a480f) | ![image.jpg2](https://github.com/pre-onboarding-11th-5/pre-onboarding-11th-3-5/assets/91203029/37d7a425-6048-4a18-8a0d-73dcda0d2b96) |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |

## 데모 영상

<p align="center">
<img src='https://github.com/dugeun-dugeun-project/Attic-Bookstore/assets/91203029/da93a4ba-49bb-4e5e-ac69-da58fe55afbc' width='600px' height='800px'/>
</p>

## 프로젝트 실행 방법

[API Repository](https://github.com/walking-sunset/assignment-api) 실행 후 아래 명령어 실행

```
$ git clone https://github.com/bohongu/pre-onboarding-11th-4.git
$ npm install
$ npm start
```

## 기술 스택

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
