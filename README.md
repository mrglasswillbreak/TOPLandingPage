# TOP Landing Page

A professional, multi-page landing site template built with **HTML, CSS, and vanilla JavaScript**.
It includes reusable page structure, responsive layouts for desktop/mobile, dark mode, and lightweight interactive behaviors.

## Live Demo
- **GitHub Pages:** https://mrglasswillbreak.github.io/TOPLandingPage/

## Features
- Multi-page structure (`index`, `about`, `features`, `contact`)
- Centralized assets (`assets/css`, `assets/js`, `assets/images`)
- Responsive desktop/mobile layout
- Theme toggle with `localStorage` persistence
- Mobile navigation toggle with ARIA state updates
- Newsletter + contact form client-side validation feedback
- Back-to-top button and dynamic footer year

## Folder Structure

```text
TOPLandingPage/
├── index.html
├── pages/
│   ├── about.html
│   ├── contact.html
│   └── features.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── 01.png
│       ├── 02.png
│       └── untitled.jpeg.png
└── README.md
```

## Runtime Screenshots

### Home (Desktop)
![Runtime screenshot of home page on desktop](https://image.thum.io/get/width/1400/https://mrglasswillbreak.github.io/TOPLandingPage/)

### Features Page (Desktop)
![Runtime screenshot of features page on desktop](https://image.thum.io/get/width/1400/https://mrglasswillbreak.github.io/TOPLandingPage/pages/features.html)

### Contact Page (Mobile)
![Runtime screenshot of contact page on mobile viewport](https://image.thum.io/get/width/390/https://mrglasswillbreak.github.io/TOPLandingPage/pages/contact.html)

## Tech Stack
- HTML5
- CSS3
- JavaScript (ES6+)

## Core Pages
- `index.html` — marketing-style landing page with CTA and newsletter form
- `about.html` — organization overview and mission content
- `features.html` — product features and boilerplate pricing cards
- `contact.html` — contact form and support entry point

## Accessibility & UX Notes
- Navigation controls include ARIA labels/states
- Form areas use semantic labels and validation handling
- Layout adapts to narrow viewports with responsive breakpoints

## Roadmap Ideas
- Add real backend integration for form submissions
- Add favicon, SEO metadata, and Open Graph tags
- Add automated linting/format checks
- Add componentized architecture (e.g., with a build tool)

## Getting Started

### 1) Clone the repository
```bash
git clone https://github.com/mrglasswillbreak/TOPLandingPage.git
cd TOPLandingPage
```

### 2) Run locally
Use any static server. Example:

```bash
python3 -m http.server 8080
```

Open:
- `http://127.0.0.1:8080/index.html`

## Author
**Moe**  
Aspiring Full-Stack Developer

---
If this project helped you, consider giving it a ⭐ on GitHub.
