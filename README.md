# Muthujothi – Portfolio Website

A professional portfolio website built with **React.js + Vite**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output goes to the `dist/` folder — ready to deploy on Netlify, Vercel, or GitHub Pages.

## 🌐 Deployment (Netlify – Free)

1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)
3. Done — your site is live!

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .css
│   ├── Hero.jsx / .css
│   ├── About.jsx / .css
│   ├── Skills.jsx / .css
│   ├── Experience.jsx / .css
│   ├── Projects.jsx / .css
│   └── Contact.jsx / .css
├── App.jsx / .css
├── main.jsx
└── index.css
```

## 🎨 Customization

All content is in the component files. To update:
- **Your info**: Edit text in each component
- **Projects**: Edit the `projects` array in `Projects.jsx`
- **Skills**: Edit the `skillGroups` array in `Skills.jsx`
- **Colors**: Change CSS variables in `src/index.css`
