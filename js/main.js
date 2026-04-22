import footerHtml from '../partials/footer.html?raw';
import navbarHtml from '../partials/navbar.html?raw';

// Time-based M3 theme: dark at night, light during day.
const root = document.documentElement;

function resolveThemeFromTime(date = new Date()) {
  const hour = date.getHours();
  return hour >= 18 || hour < 6 ? 'dark' : 'light';
}

function applyTimeTheme() {
  root.setAttribute('data-theme', resolveThemeFromTime());
}

applyTimeTheme();
setInterval(applyTimeTheme, 60 * 1000);

function injectPartial(targetId, markup) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  target.innerHTML = markup;
}

function normalizePathname(pathname) {
  if (!pathname || pathname === '/') {
    return '/index.html';
  }

  if (pathname.endsWith('/')) {
    return `${pathname}index.html`;
  }

  return pathname;
}

function initNavigation() {
  const toggleBtn = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const expanded = navLinks.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', String(expanded));
    });
  }

  document.querySelectorAll('.nav__dropdown-toggle').forEach((dropdownToggleBtn) => {
    dropdownToggleBtn.addEventListener('click', () => {
      if (window.innerWidth > 600) {
        return;
      }

      const dropdown = dropdownToggleBtn.closest('.nav__dropdown');
      if (!dropdown) {
        return;
      }

      const menu = dropdown.querySelector('.nav__dropdown-menu');
      if (menu) {
        menu.classList.toggle('open');
      }
    });
  });

  const currentPath = normalizePathname(window.location.pathname);
  document.querySelectorAll('.nav__links a, .nav__dropdown-menu a').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) {
      return;
    }

    const url = new URL(href, window.location.origin);
    const normalizedLinkPath = normalizePathname(url.pathname);

    if (normalizedLinkPath === currentPath) {
      link.classList.add('active');
      const dropdown = link.closest('.nav__dropdown');
      if (dropdown) {
        const dropdownToggle = dropdown.querySelector('.nav__dropdown-toggle');
        if (dropdownToggle) {
          dropdownToggle.classList.add('active');
        }
      }
    }
  });
}

function initSmoothScroll() {
  const currentUrl = new URL(window.location.href);
  const currentPath = normalizePathname(currentUrl.pathname);

  document.querySelectorAll('a[href]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') {
        return;
      }

      const url = new URL(href, window.location.href);
      const isSameOrigin = url.origin === currentUrl.origin;
      const isSamePage = normalizePathname(url.pathname) === currentPath;

      if (!isSameOrigin || !url.hash || !isSamePage) {
        return;
      }

      const target = document.querySelector(url.hash);
      if (target) {
        event.preventDefault();
        window.history.replaceState(null, '', url.hash);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initLayoutPartials() {
  injectPartial('site-nav', navbarHtml);
  injectPartial('site-footer', footerHtml);
}

async function initPage() {
  initLayoutPartials();
  initNavigation();
  initSmoothScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
