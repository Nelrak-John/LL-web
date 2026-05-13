# Lonely Legacy (LL) 브랜드 웹사이트

Lonely Legacy 브랜드를 위한 React 기반의 인터랙티브 웹사이트입니다.

## 프로젝트 개요

이 프로젝트는 다음 기능을 포함합니다:
- **Hero Section**: 메탈릭 루핑 비디오 배경 + Three.js 기반 Liquid Distortion 효과
- **CSS Scroll Snap**: 섹션별 마그네틱 스크롤
- **Scroll Indicator**: 우측 호버 인디케이터 (+ → x 애니메이션)
- **Artworks Section**: B/W 필터 + 호버 시 컬러 전환 효과
- **Grain Overlay**: 전체 화면 미세한 Grain 효과
- **폰트**: UnifrakturMaguntia (슬로건), Pretendard (본문)

## 섹션 구조

1. Hero - 메인 슬로건과 메탈릭 비디오
2. About - 브랜드 소개
3. Artworks - 작품 그리드
4. Projects - 프로젝트 리스트
5. Contact - 연락처 정보

## 설치 방법

### 1. Node.js 및 npm 설치

먼저 Node.js를 설치해야 합니다. [Node.js 공식 웹사이트](https://nodejs.org/)에서 LTS 버전을 다운로드하여 설치하세요.

### 2. 의존성 설치

프로젝트 폴더에서 다음 명령어를 실행하여 필요한 라이브러리를 설치하세요:

```bash
npm install
```

설치되는 라이브러리:
- react, react-dom
- three
- @react-three/fiber
- @react-three/drei
- gsap
- framer-motion

### 3. 개발 서버 시작

```bash
npm run dev
```

### 4. 빌드

```bash
npm run build
```

## 파일 구조

```
LL website/
├── public/
│   ├── videos/
│   │   └── metallic-loop.mp4  # 메탈릭 루핑 비디오 (플레이스홀더)
│   └── images/
│       └── artwork-*.jpg       # 작품 이미지 (플레이스홀더)
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero 섹션 (비디오 + Liquid Distortion)
│   │   ├── About.jsx          # About 섹션
│   │   ├── Artworks.jsx       # Artworks 섹션 (이미지 그리드)
│   │   ├── Projects.jsx       # Projects 섹션
│   │   ├── Contact.jsx        # Contact 섹션
│   │   ├── ScrollIndicator.jsx  # 우측 호버 인디케이터
│   │   └── GrainOverlay.jsx   # 전체 화면 Grain 효과
│   ├── App.jsx                # 메인 컴포넌트
│   ├── index.css              # 글로벌 스타일
│   └── main.jsx               # 엔트리 포인트
├── index.html
├── package.json
└── vite.config.js
```

## 커스터마이징

### 비디오 교체

`public/videos/metallic-loop.mp4` 파일을 실제 메탈릭 루핑 비디오로 교체하세요.

### 이미지 교체

`public/images/` 폴더의 `artwork-*.jpg` 파일들을 실제 작품 이미지로 교체하세요. `src/components/Artworks.jsx`에서 이미지 경로를 수정할 수 있습니다.

### 텍스트 수정

각 섹션 컴포넌트에서 텍스트 내용을 수정할 수 있습니다:
- `About.jsx`: 브랜드 소개 텍스트
- `Projects.jsx`: 프로젝트 정보
- `Contact.jsx`: 연락처 정보

### 스타일 수정

`src/index.css`에서 전역 스타일을 수정할 수 있습니다.

## 확장 가능성

이 프로젝트는 다음 확장을 위해 설계되었습니다:
- AI 챗봇 통합
- 음악 API 연동
- 추가 인터랙션 효과
- 반응형 디자인 개선

## 기술 스택

- React 18
- Vite
- Three.js / React Three Fiber
- GSAP
- Framer Motion
- CSS Scroll Snap

## 라이선스

© 2024 Lonely Legacy. All rights reserved.
