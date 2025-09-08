# Rubato Host

React + TypeScript 기반의 Module Federation을 활용한 Micro Frontend 아키텍처의 호스트 애플리케이션입니다.

## 개요

Rubato Host는 마이크로 프론트엔드 아키텍처에서 중앙 집중식 호스트 역할을 하며, 공통 UI 컴포넌트와 라우팅을 관리합니다. Module Federation을 통해 원격 마이크로 프론트엔드 모듈을 동적으로 로드하여 통합된 사용자 경험을 제공합니다.

## 주요 특징

### Module Federation을 통한 Micro Frontend 구현
- **동적 모듈 로딩**: 런타임에 원격 모듈(`remote/reviews`)을 동적으로 로드
- **독립적 배포**: 각 마이크로 프론트엔드를 독립적으로 개발, 테스트, 배포 가능
- **공유 의존성**: React, React-DOM 등 주요 라이브러리를 호스트와 원격 모듈 간 공유
- **오류 격리**: ErrorBoundary를 통한 마이크로 프론트엔드 오류 격리

### 기술 스택
- **React 18** with TypeScript
- **Vite** - 빠른 빌드 도구 및 개발 서버
- **Module Federation** - 마이크로 프론트엔드 구현
- **TanStack Router** - 타입 안전한 라우팅
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **Radix UI** - 접근성이 보장된 UI 컴포넌트
- **SWC** - 빠른 JavaScript/TypeScript 컴파일

## 프로젝트 구조

```
src/
├── components/          # 공통 UI 컴포넌트
│   ├── header/         # 헤더 컴포넌트
│   ├── navigation/     # 네비게이션 컴포넌트
│   └── ui/            # 기본 UI 컴포넌트 (Radix UI 기반)
├── hooks/              # 커스텀 훅
├── provider/           # Context Provider들
├── routes/             # 라우트 정의 (TanStack Router)
├── lib/               # 유틸리티 함수
├── main.tsx           # 애플리케이션 진입점
├── remotes.d.ts       # 원격 모듈 타입 정의
└── routeTree.gen.ts   # 자동 생성된 라우트 트리
```

## 사용 가능한 명령어

```bash
# 개발 서버 시작
pnpm dev

# 프로덕션 빌드
pnpm build

# ESLint 실행
pnpm lint

# 프로덕션 빌드 미리보기
pnpm preview
```

## Module Federation 설정

### 호스트 설정 (vite.config.ts)
```typescript
federation({
  name: "host",
  remotes: {
    remote: {
      type: "module",
      name: "remote",
      entry: env.REMOTE_REVIEWS_URL,
      entryGlobalName: "remote",
      shareScope: "default",
    },
  },
  filename: "remoteEntry.js",
  shared: ["react", "react-dom"],
})
```

### 원격 모듈 사용
```typescript
// 지연 로딩으로 원격 모듈 import
const Reviews = lazy(() => import("remote/reviews"));

// ErrorBoundary와 Suspense로 안전한 렌더링
<ErrorBoundary fallback={<div>Error</div>}>
  <Suspense fallback={<div>Loading...</div>}>
    <Reviews />
  </Suspense>
</ErrorBoundary>
```

## 환경 변수

- `REMOTE_REVIEWS_URL`: 원격 리뷰 모듈의 진입점 URL
  - 개발 환경 (`.env.development`): `https://dev-reviews.rubato.dev/remoteEntry.js`
  - 프로덕션 환경 (`.env.production`): `https://reviews.rubato.dev/remoteEntry.js`

## 개발 가이드

### 새로운 원격 모듈 추가
1. `vite.config.ts`에서 `remotes` 설정에 새 모듈 추가
2. `src/remotes.d.ts`에 타입 정의 추가
3. 라우트에서 지연 로딩으로 모듈 import
4. ErrorBoundary와 Suspense로 안전하게 렌더링

### 공통 컴포넌트 개발
- `src/components/ui/`: 재사용 가능한 기본 UI 컴포넌트
- `src/components/`: 비즈니스 로직이 포함된 복합 컴포넌트
- Radix UI와 Tailwind CSS를 활용한 일관된 디자인 시스템

## Git 커밋 컨벤션

```
type: subject

body
```

### 타입
- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅, 세미콜론 누락 등
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가/수정
- `chore`: 빌드 프로세스 또는 보조 도구 변경
