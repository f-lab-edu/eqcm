# eqcm

## 목차
- [eqcm](#eqcm)
  - [목차](#목차)
  - [프로젝트 소개](#프로젝트-소개)
  - [프로젝트 목표](#프로젝트-목표)
  - [프로젝트 실행방법](#프로젝트-실행방법)
  - [Tech Stack](#tech-stack)
  - [구현 기능](#구현-기능)
  - [구현 화면](#구현-화면)
  - [작업하며 학습한 내용](#작업하며-학습한-내용)
  - [Trouble Shouting](#trouble-shouting)
  - [Project 구조](#project-구조)

<br />

## 프로젝트 소개
- 29cm mini clone coding project
- 팀 프로젝트 (FE 1명(@rarlala), BE 1명(@JisuNa))
  - [서버 git repo](https://github.com/JisuNa/eqcm)

<br />

## 프로젝트 목표
- 로그인 및 회원가입(OAuth, 이메일)부터 장바구니, 구매, 구매 정보 확인까지 쇼핑몰 구현 시 기본적인 큰 flow 구현을 목표로 합니다.

<br />

## 프로젝트 실행방법
1. repository clone
``` bash
  git clone https://github.com/f-lab-edu/eqcm.git
  cd eqcm
  yarn
```

2. development server 실행
```bash
  yarn dev
```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000)를 열어주세요.

<br />

## Tech Stack

- NextJS(v14.2.9) + React(v18) + TypeScript + Jotai
- Terminal : Yarn Berry
- Form : react-hook-form + zod
- Formatter : ESLint + Prettier
- Style : TailwindCSS + classNames
- ETC : data-fns, swiper, msw

<br />

## 구현 기능
- react-hook-form과 zod를 사용한 form, form-validation 구현
- 네이버 로그인 구현(OAuth)과 이메일 로그인 구현 및 세션 유지 처리(JWT)
- swiper를 활용한 slider 구현
- useSuspenseQuery, Skeleton UI 구현
- mock data를 위한 msw 활용
- TailwindCSS를 활용한 반응형 UI 구현
  - 메인, 상품 상세, 장바구니 UI 구현
- 상품 상세 페이지 내 useReducer를 활용한 옵션 선택 상태 관리

<br />

## 구현 화면
<!-- TODO: 화면에 대한 스크린샷 등을 추가 -->

<!-- - 상품 리스트 -->
<!-- - 결제창 -->
<!-- - 결제 로직 -->
<!-- - 마이페이지 -->


<br />

## 작업하며 학습한 내용
<!-- 기술에 대해 정리한 블로그 링크 추가 -->

<br />


## Trouble Shouting

- 문제: 상품 상세 페이지 내 옵션 선택 시 상태 관리에 대한 고민
- 해결: useReducer 활용
  - 복잡한 상태 관리를 위해 여러개의 useState를 사용하는 것이 아닌 useReducer 활용함
  - 추가적으로 코드의 복잡성을 낮추기 위한 방안을 고려한 결과 useRedux와 redux-toolkit을 결합해 사용
- 결과 : useReducer에서도 발생하는 redux pattern의 보일러 플레이트 코드를 줄여 코드의 복잡성을 낮춤

<br />

- 문제: 협업 시 백엔드와의 간극 발생
- 해결: MSW 도입
  - 필요한 항목들을 정의한 후 백엔드 작업자와 공유하여 수정이 필요한 항목에 대해 협의를 진행한 뒤 해당 항목에 대한 mock data를 생성해 UI를 작업함
- 결과 : 작업 진행 속도에 크게 영향받지 않고 프론트엔드 개발이 가능해짐



<br />

## Project 구조

```bash
├── app
│   ├── fonts
│   │   └── campton
│   ├── join
│   ├── login
│   │   └── email
│   └── product
│       └── [id]
├── components
├── constants
├── fetch
├── lib
│   └── msw
├── mocks
├── types
└── utils
```
