# eqcm

## 목차
- [프로젝트 소개](#프로젝트-소개)
- [프로젝트 목표](#프로젝트-목표)
- [프로젝트 실행방법](#프로젝트-실행방법)
- [Tech Stack](#tech-stack)
- [구현 기능](#구현-기능)
- [Project 구조](#project-구조)

<br />

## 프로젝트 소개
- 29cm mini clone coding project
- 팀 프로젝트 (FE 1명(@rarlala), BE 1명(@JisuNa))
  - [서버 git repo](https://github.com/JisuNa/eqcm)

<br />

## 프로젝트 목표
- 로그인 및 회원가입(OAuth, 이메일)부터 장바구니, 구매, 구매 정보확인까지 큰 flow 구현을 목표로 합니다.

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

- NextJS(v14.2.9) + React(v18) + TypeScript
- Terminal : Yarn Berry
- Form : react-hook-form + zod
- Formatter : ESLint + Prettier
- Style : TailwindCSS + classNames
- ETC : next-auth, data-fns, swiper

<br />

## 구현 기능
- react-hook-form과 zod를 사용한 form, form-validation 구현
- next-auth를 활용한 네이버 로그인 구현(OAuth)과 이메일 로그인 구현 및 JWT 처리
- swiper를 활용한 slider 구현
- useSuspenseQuery, Skeleton UI 구현
- mock data를 위한 msw 활용
- TailwindCSS를 활용한 반응형 UI 구현

<!-- - 상품 상세페이지 -->
<!-- - 상품 리스트 -->
<!-- - 장바구니 -->
<!-- - 결제창 -->
<!-- - 결제 로직 -->
<!-- - 마이페이지 -->

<!-- TODO: 화면에 대한 스크린샷 등을 추가 -->
<!-- 주요 기능에 대한 소개 -->
<!-- 기술에 대해 정리한 블로그 링크 추가 -->
<!-- Trouble shouting 기록 -->
<!-- useReducer를 활용한 옵션 추가 로직 -->

<br />

## Project 구조

```bash
├── app
│   ├── api
│   │   └── auth
│   │       └── [...nextauth]
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
│   ├── msw
│   └── next-auth
├── mocks
├── types
└── utils

<!-- ## Demo -->
