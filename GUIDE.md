# Lonely Legacy 웹사이트 수정 가이드

이 가이드는 웹사이트의 각 부분을 수정하는 방법을 설명합니다.

## 목차

1. [비디오 교체](#비디오-교체)
2. [이미지 교체](#이미지-교체)
3. [텍스트 수정](#텍스트-수정)
4. [스타일 수정](#스타일-수정)
5. [섹션 추가/삭제](#섹션-추가삭제)
6. [폰트 변경](#폰트-변경)
7. [색상 변경](#색상-변경)

## 비디오 교체

Hero 섹션의 메탈릭 루핑 비디오를 교체하려면:

1. 새로운 비디오 파일을 `public/videos/` 폴더에 넣으세요
2. `src/components/Hero.jsx`에서 비디오 경로를 수정하세요:

```jsx
<video className="hero-video" autoPlay loop muted playsInline>
  <source src="/videos/새로운-비디오.mp4" type="video/mp4" />
</video>
```

## 이미지 교체

Artworks 섹션의 이미지를 교체하려면:

1. 새로운 이미지 파일을 `public/images/` 폴더에 넣으세요
2. `src/components/Artworks.jsx`에서 이미지 경로를 수정하세요:

```jsx
const artworks = [
  { id: 1, title: '작품 제목', image: '/images/새로운-이미지.jpg' },
  // ...
];
```

## 텍스트 수정

### About 섹션

`src/components/About.jsx`에서 브랜드 소개 텍스트를 수정하세요:

```jsx
<p className="about-text font-body">
  여기에 브랜드 소개 텍스트를 작성하세요.
</p>
```

### Projects 섹션

`src/components/Projects.jsx`에서 프로젝트 정보를 수정하세요:

```jsx
const projects = [
  {
    id: 1,
    title: '프로젝트 제목',
    description: '프로젝트 설명',
  },
  // ...
];
```

### Contact 섹션

`src/components/Contact.jsx`에서 연락처 정보를 수정하세요:

```jsx
<a href="mailto:이메일주소@example.com" className="contact-link">
  이메일주소@example.com
</a>
```

### Hero 슬로건

`src/components/Hero.jsx`에서 메인 슬로건 텍스트를 수정하세요:

```jsx
<Text fontSize={2} color="white" anchorX="center" anchorY="middle">
  새로운 슬로건
</Text>
```

## 스타일 수정

### 글로벌 스타일

`src/index.css`에서 전역 스타일을 수정할 수 있습니다:

- 배경색 변경:
```css
body {
  background-color: #000000; /* 원하는 색상으로 변경 */
}
```

- 폰트 크기 변경:
```css
.hero-slogan {
  font-size: 120px; /* 원하는 크기로 변경 */
}
```

### Grain 효과 강도 조절

`src/index.css`에서 Grain 오버레이의 투명도를 조절하세요:

```css
.grain-overlay {
  opacity: 0.05; /* 0.01 ~ 0.1 사이로 조절 */
}
```

## 섹션 추가/삭제

### 섹션 추가

1. 새로운 섹션 컴포넌트를 `src/components/` 폴더에 생성하세요
2. `src/App.jsx`에서 새로운 섹션을 import 하고 추가하세요:

```jsx
import NewSection from './components/NewSection';

function App() {
  return (
    <>
      <GrainOverlay />
      <ScrollIndicator />
      <main>
        <Hero />
        <About />
        <NewSection /> {/* 새로운 섹션 추가 */}
        <Artworks />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
```

3. `src/components/ScrollIndicator.jsx`에서 섹션 이름을 추가하세요:

```jsx
const sections = ['Hero', 'About', 'NewSection', 'Artworks', 'Projects', 'Contact'];
```

### 섹션 삭제

1. `src/App.jsx`에서 해당 섹션을 제거하세요
2. `src/components/ScrollIndicator.jsx`에서 섹션 이름을 제거하세요

## 폰트 변경

### Google Fonts 사용

1. [Google Fonts](https://fonts.google.com/)에서 원하는 폰트를 선택하세요
2. `index.html`에서 폰트 링크를 추가하세요:

```html
<link href="https://fonts.googleapis.com/css2?family=폰트이름:wght@300;400;500;700&display=swap" rel="stylesheet">
```

3. `src/index.css`에서 폰트를 적용하세요:

```css
.custom-font {
  font-family: '폰트이름', sans-serif;
}
```

## 색상 변경

### 텍스트 색상

`src/index.css`에서 텍스트 색상을 수정하세요:

```css
body {
  color: #ffffff; /* 원하는 색상으로 변경 */
}
```

### 호버 효과 색상

```css
.contact-link:hover {
  color: #888; /* 원하는 색상으로 변경 */
}
```

## 추가 팁

### Liquid Distortion 효과 조절

`src/components/Hero.jsx`에서 Liquid Distortion의 강도를 조절할 수 있습니다:

```jsx
useFrame((state) => {
  if (meshRef.current) {
    const time = state.clock.getElapsedTime();
    if (hovered) {
      meshRef.current.position.x = Math.sin(time * 3) * 0.1; // 0.1을 조절하여 강도 변경
      meshRef.current.position.y = Math.cos(time * 2) * 0.05; // 0.05를 조절하여 강도 변경
    }
  }
});
```

### Artworks 그리드 레이아웃 변경

`src/index.css`에서 그리드 열 수를 변경할 수 있습니다:

```css
.artworks-grid {
  grid-template-columns: repeat(3, 1fr); /* 3을 원하는 열 수로 변경 */
}
```

### Scroll Snap 비활성화

Scroll Snap 기능을 비활성화하려면 `src/index.css`에서 다음을 제거하세요:

```css
html {
  scroll-snap-type: y mandatory; /* 이 줄 제거 */
}

section {
  scroll-snap-align: start; /* 이 줄 제거 */
}
```

## 문제 해결

### 비디오가 재생되지 않음

- 비디오 파일이 `public/videos/` 폴더에 있는지 확인하세요
- 비디오 파일 형식이 mp4인지 확인하세요
- 브라우저가 비디오 코덱을 지원하는지 확인하세요

### 이미지가 표시되지 않음

- 이미지 파일이 `public/images/` 폴더에 있는지 확인하세요
- 이미지 경로가 올바른지 확인하세요
- 이미지 파일 형식이 jpg, png 등 지원되는 형식인지 확인하세요

### Three.js 오류 발생

- npm install이 제대로 실행되었는지 확인하세요
- 브라우저가 WebGL을 지원하는지 확인하세요
- 콘솔 오류 메시지를 확인하세요

## 도움이 필요하시면

추가적인 도움이 필요하시면 프로젝트 문서를 참고하거나 개발팀에 문의하세요.
