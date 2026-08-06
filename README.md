# Tailwind Project — AI Landing Page

A modern, fully responsive landing page built with **React**, **Vite**, and **Tailwind CSS**. The page showcases a fictional AI brand with sections for hero content, AI types, benefits, and contact.

## ✨ Features

- Responsive layout (mobile-first) with a collapsible navbar
- Smooth-scroll anchor navigation
- Hero section with avatars and gradient typography
- AI types section with interactive cards
- AI benefits section
- Contact section with contact details
- Newsletter subscription in the footer
- Custom Tailwind CSS v4 theme with branded colors and Inter font
- Custom reusable component classes defined in `App.css`

## 🛠️ Tech Stack

- [React](https://react.dev) 19
- [Vite](https://vite.dev) 8
- [Tailwind CSS](https://tailwindcss.com) 4 (via `@tailwindcss/vite`)
- [Bootstrap](https://getbootstrap.com) 5
- [react-icons](https://react-icons.github.io/react-icons)
- [Oxlint](https://oxc.rs) for linting

## 📁 Project Structure

```
src/
├── App.jsx               # App entry
├── App.css               # Tailwind theme + custom component classes
├── main.jsx              # React root render
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx    # Fixed navbar with mobile menu
│   │   └── Footer.jsx    # Footer with newsletter & links
│   ├── HeroSection.jsx   # Hero section
│   ├── AiTypes.jsx       # AI types grid
│   ├── AiBenefits.jsx    # Benefits section
│   ├── Contact.jsx       # Contact section
│   └── ...data files     # Static content & data
└── pages/
    └── Home.jsx          # Landing page composition
```

## 👨‍💻 Developer

Developed by **Eng. Seif Eldeen Mohamed**

- **LinkedIn:** [Seif Eldeen Mohamed](https://www.linkedin.com/in/seifeldeen-div/)
