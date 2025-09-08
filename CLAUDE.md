# Claude Code Configuration

# Rubato Host

React + TypeScript 기반의 Module Federation을 활용한 Micro Frontend 호스트 애플리케이션

## Project Context

### 기술 스택
- **React 18** with TypeScript
- **Vite** - 빠른 빌드 도구 및 개발 서버
- **Module Federation** - 마이크로 프론트엔드 구현
- **TanStack Router** - 타입 안전한 라우팅 시스템
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **Radix UI** - 접근성이 보장된 UI 컴포넌트
- **SWC** - 빠른 JavaScript/TypeScript 컴파일
- **ESLint** - 코드 품질 관리

### Module Federation 구조
- **호스트**: `host` (현재 애플리케이션)
- **원격 모듈**: `remote/reviews` - 리뷰 관련 마이크로 프론트엔드
- **공유 의존성**: React, React-DOM
- **환경변수**: `REMOTE_REVIEWS_URL` - 원격 모듈 진입점

## Available Commands

- `pnpm dev` - 개발 서버 시작 (with host enabled)
- `pnpm build` - 프로덕션 빌드 (TypeScript 컴파일 + Vite 빌드)
- `pnpm lint` - ESLint 실행
- `pnpm preview` - 프로덕션 빌드 미리보기

## File Structure

```
src/
├── components/          # 공통 UI 컴포넌트
│   ├── header/         # 헤더 컴포넌트
│   ├── navigation/     # 네비게이션 컴포넌트
│   ├── mode-toggle/    # 다크/라이트 모드 토글
│   └── ui/            # 기본 UI 컴포넌트 (Radix UI 기반)
├── hooks/              # 커스텀 훅 (use-mobile 등)
├── provider/           # Context Provider들 (ThemeProvider)
├── routes/             # TanStack Router 라우트 정의
│   ├── __root.tsx     # 루트 레이아웃
│   ├── index.tsx      # 홈 페이지
│   └── reviews.tsx    # 리뷰 페이지 (원격 모듈 로드)
├── lib/               # 유틸리티 함수
├── main.tsx           # 애플리케이션 진입점
├── remotes.d.ts       # 원격 모듈 타입 정의
└── routeTree.gen.ts   # 자동 생성된 라우트 트리
```

## 주요 설정 파일

- `vite.config.ts` - Module Federation 및 빌드 설정
- `components.json` - shadcn/ui 컴포넌트 설정
- `tailwind.config.js` - Tailwind CSS 설정
- `tsconfig.json` - TypeScript 설정

## Git Commit Convention

```
type: subject

body
```

### Types

- `feat` - 새로운 기능 추가
- `fix` - 버그 수정
- `docs` - 문서 변경
- `style` - 코드 포맷팅, 세미콜론 누락 등
- `refactor` - 코드 리팩토링
- `test` - 테스트 코드 추가/수정
- `chore` - 빌드 프로세스 또는 보조 도구 변경

### Examples

```
feat: Add user authentication module

- Implement login/logout functionality
- Add JWT token management
- Create protected route components
```

```
fix: Resolve memory leak in component unmount

Update useEffect cleanup to properly remove event listeners
```

```
refactor: Extract common validation logic

Move shared form validation to utils/validation.js
```

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

## Notes

- Module Federation을 통한 마이크로 프론트엔드 아키텍처
- TypeScript strict mode 활성화
- TanStack Router로 타입 안전한 라우팅 구현
- ErrorBoundary를 통한 원격 모듈 오류 격리
- 반응형 디자인 및 다크/라이트 모드 지원
