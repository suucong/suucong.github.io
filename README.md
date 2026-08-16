# 노수진 · 프론트엔드 개발자 포트폴리오

> **https://suucong.github.io**

빌드 도구 없이 순수 HTML / CSS / JavaScript로 제작한 포트폴리오 웹사이트입니다.
`main` 브랜치에 push하면 GitHub Pages가 자동으로 반영합니다.

## 구조

```
├── index.html       # 페이지 전체 내용 (소개·기술·프로젝트·활동·가치관·연락처)
├── css/style.css    # 디자인 (색상 변수는 파일 상단 :root에 모여 있음)
├── js/main.js       # 내비게이션, 스크롤 애니메이션, 이메일 복사
└── assets/images/   # 프로젝트 로고 등 이미지
```

## 수정 방법

1. **내용 수정** — `index.html`에서 해당 섹션의 텍스트를 고칩니다.
   프로젝트 카드는 `<article class="project-card">` 블록 하나를 복사해 추가할 수 있습니다.
2. **색상 변경** — `css/style.css` 상단의 `:root` 변수(`--accent` 등)만 바꾸면 전체에 적용됩니다.
3. **로컬 확인** — `index.html`을 브라우저로 열면 바로 확인할 수 있습니다.

## 배포

```bash
git add .
git commit -m "내용 수정"
git push
```

push 후 1~2분 뒤 https://suucong.github.io 에 반영됩니다.
