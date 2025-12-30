# Robert Gleim - Professional Profile

A modern, responsive React profile page built for deployment on Vercel.

## Features

- 🎨 Modern, professional design with gradient header
- 📱 Fully responsive (mobile, tablet, desktop)
- 📧 Contact form with validation
- 🤖 Placeholder for n8n AI chat integration
- ⚡ Built with Vite for fast development and builds
- 🚀 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Build for production
npm run build
```

### Preview Production Build

```bash
# Preview production build locally
npm run preview
```

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

## Adding n8n AI Chat Integration

The profile page includes a placeholder for your n8n AI chat agent. To integrate it:

1. Set up your n8n workflow with a webhook
2. Add the chat widget code to `src/App.jsx`
3. Update the placeholder section in the Contact area
4. Configure any necessary API endpoints

## Customization

### Update Profile Information

Edit the `profileData` object in `src/App.jsx` to update:
- Name and title
- About section
- Experience entries
- Skills list
- Contact information

### Styling

- `src/App.css` - Component styles
- `src/index.css` - Global styles

### Colors

The color scheme uses:
- Primary: `#667eea` (purple)
- Secondary: `#764ba2` (darker purple)
- Adjust in `src/App.css` as needed

## Project Structure

```
profile/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.css
└── README.md
```

## Technologies Used

- React 18
- Vite 5
- CSS3 with Flexbox & Grid
- Vercel (deployment)

## License

© 2025 Robert Gleim. All rights reserved.
