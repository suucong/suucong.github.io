// ===== 헤더: 스크롤 그림자 =====
const header = document.getElementById('siteHeader');

const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== 모바일 내비게이션 토글 =====
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const open = header.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
});

siteNav.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    header.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// ===== 현재 섹션 내비게이션 하이라이트 =====
const navLinks = [...siteNav.querySelectorAll('a[href^="#"]')].filter(
  (a) => !a.classList.contains('nav-cta')
);
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) =>
        a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`)
      );
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach((s) => sectionObserver.observe(s));

// ===== 스크롤 리빌 =====
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');

if (reduceMotion) {
  revealEls.forEach((el) => el.classList.add('visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
}

// ===== 이메일 복사 =====
const emailCopy = document.getElementById('emailCopy');
const toast = document.getElementById('toast');
let toastTimer;

emailCopy.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('jungozzim@gmail.com');
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  } catch {
    window.location.href = 'mailto:jungozzim@gmail.com';
  }
});

// ===== 연도 자동 갱신 =====
document.getElementById('year').textContent = new Date().getFullYear();
