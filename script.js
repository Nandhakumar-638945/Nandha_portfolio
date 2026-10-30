/* ============================================================
   NANDHA KUMAR PORTFOLIO — SCRIPT
   ============================================================ */

/* ── Theme Toggle ───────────────────────────────────────── */
(function () {
  const toggle = document.getElementById('themeToggle');
  const icon   = document.getElementById('themeIcon');
  const root   = document.documentElement;

  // Default: dark mode
  let isDark = true;
  root.setAttribute('data-theme', 'dark');

  toggle.addEventListener('click', () => {
    isDark = !isDark;
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    icon.textContent = isDark ? '☀️' : '🌙';
  });
})();

/* ── Sticky Header Shadow ───────────────────────────────── */
(function () {
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
})();

/* ── Mobile Menu ────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
    }
  });
}

function closeMobileMenu() {
  if (mobileMenu) mobileMenu.classList.remove('open');
}

/* ── Floating Particles ─────────────────────────────────── */
(function () {
  const container = document.getElementById('particles');
  if (!container) return;
  const COUNT = 18;
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 3;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 15 + 12;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${left}%;
      animation-duration:${duration}s;
      animation-delay:${delay}s;
      opacity:${Math.random() * 0.3 + 0.1};
    `;
    container.appendChild(p);
  }
})();

/* ── Active Nav Link on Scroll ──────────────────────────── */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('a.nav-link');
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = 'var(--primary-light)';
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
})();

/* ── Interactive Terminal ───────────────────────────────── */
const COMMANDS = {
  about:
`Nandha Kumar — Full Stack Developer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full stack developer with a strong foundation in Python, React,
and MySQL. B.E. CSE student at RVS College of Engineering (CGPA: 8.9).
Interested in CI/CD, scalable APIs, and Agile teams.
Location: Greater Coimbatore Area, India`,

  skills:
`Languages   : Python, JavaScript, HTML/CSS, SQL
Frontend    : React.js, Redux, JSX, Bootstrap
Backend     : Django, Flask, RESTful APIs, JWT Auth
Database    : MySQL, Schema Design, Query Optimization
Testing     : Unit Testing, Integration Testing, Debugging
Tools       : Git & GitHub, Postman, Agile, VS Code`,

  projects:
`[01] Terminal-Style Portfolio Website
     Stack : Python · React · MySQL · REST API · Flask
     Info  : Interactive CLI-style portfolio. 10+ commands.
     Live  : Deployed on Render

[02] Instagram Clone
     Stack : Python · React · SQL · JWT · Django
     Info  : Full-stack social app. Auth, posts, likes, follows.
     Live  : Vercel (frontend) + Render (backend)`,

  education:
`RVS College of Engineering and Technology
B.E. Computer Science and Engineering (2023 – 2027)
CGPA : 8.9 / 10  (In Progress)`,

  contact:
`Email    : nandhakumar20062008@gmail.com
Phone    : +91 6381918145
LinkedIn : linkedin.com/in/nandhakumar-b7a0812a5
GitHub   : github.com/Nandhakumar-cyber`,

  clear: '__CLEAR__',

  help:
`Available commands:
  about      — Learn about Nandha Kumar
  skills     — List technical skills
  projects   — View projects
  education  — Academic background
  contact    — Get contact info
  clear      — Clear terminal`
};

function runCommand(cmd) {
  const output = document.getElementById('termOutput');
  if (!output) return;

  const trimmed = cmd.trim().toLowerCase();
  const response = COMMANDS[trimmed];

  if (trimmed === 'clear') {
    output.innerHTML = '';
    return;
  }

  // Print command line
  const line = document.createElement('div');
  line.className = 'term-line';
  line.innerHTML = `<span class="prompt">nandha@portfolio</span><span class="prompt-path"> ~/dev</span> $ <span class="term-cmd">${escapeHtml(cmd)}</span>`;
  output.appendChild(line);

  // Print result
  const result = document.createElement('div');
  result.className = 'term-out';
  result.textContent = response
    ? response
    : `Command not found: ${cmd}. Type 'help' for available commands.`;
  output.appendChild(result);

  // Scroll to bottom
  output.scrollTop = output.scrollHeight;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Terminal keyboard input
const termInput = document.getElementById('termInput');
const history   = [];
let historyIdx  = -1;

if (termInput) {
  termInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = termInput.value.trim();
      if (!val) return;
      history.unshift(val);
      historyIdx = -1;
      runCommand(val);
      termInput.value = '';
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      historyIdx = Math.min(historyIdx + 1, history.length - 1);
      termInput.value = history[historyIdx] || '';
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      historyIdx = Math.max(historyIdx - 1, -1);
      termInput.value = historyIdx === -1 ? '' : (history[historyIdx] || '');
    }
  });
}

/* ── Copy to Clipboard ──────────────────────────────────── */
function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const prev = btn.textContent;
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = prev;
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = '✓ Copied!';
    setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
  });
}

/* ── Animate sections on scroll ─────────────────────────── */
(function () {
  const cards = document.querySelectorAll(
    '.stat-card, .skill-card, .project-card, .training-card, .contact-card, .timeline-content, .about-photo-wrap'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    observer.observe(card);
  });
})();
