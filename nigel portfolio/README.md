# 🚀 Nigel Ludick - Professional Portfolio Website

A cutting-edge, dark-themed portfolio website featuring advanced animations, binary code background, and professional UI/UX design.

## ✨ Features

### Design & UI
- 🎨 **Dark Tech-Modern Theme** with neon blue/purple highlights
- 💻 **Animated Binary Code Background** for tech aesthetic
- ✨ **Smooth Animations** including typing effects, counters, and scroll reveals
- 📊 **Scroll Progress Bar** at the top of the page
- 🎯 **Interactive Hover Effects** on all elements
- 📱 **Fully Responsive** design (desktop, tablet, mobile)

### Sections
1. **Home** - Profile photo with animated ring, typing animation, stats counter, social links
2. **About** - Bio, animated skill bars with percentages, technology tags
3. **Experience** - Timeline view with work history and achievements
4. **Projects** - Filterable project grid with detailed descriptions
5. **Certificates** - Certificate showcase with upload functionality and modal viewer
6. **Contact** - Professional contact form with multiple contact methods

### Interactive Features
- 🔄 **Typing Animation** - Rotating text showing different skills
- 📈 **Animated Counters** - Stats that count up on scroll
- 🎯 **Project Filtering** - Filter projects by category (AI, Web, Automation, Trading)
- 🖼️ **Certificate Modal** - Click to view certificates in full screen
- 📤 **Certificate Upload** - Add new certificates directly from the website
- ⬆️ **Back to Top Button** - Smooth scroll to top
- 📧 **Email Integration** - Contact form opens email client

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive features and animations
├── projects.js         # Project data (easy to edit)
├── assets/
│   ├── profile.jpg     # Your headshot photo
│   ├── resume.pdf      # Your resume for download
│   └── certificates/   # Certificate images
│       ├── cert1.jpg
│       ├── cert2.jpg
│       └── cert3.jpg
└── README.md           # This file
```

## 🎯 Quick Start

### 1. Add Your Content

#### Profile Photo
- Add your headshot as `assets/profile.jpg`
- Recommended: 400x400px square image
- Click on the profile image to upload a new one

#### Resume
- Add your resume as `assets/resume.pdf`
- The download button will automatically link to it

#### Certificates
- Add certificate images to `assets/certificates/`
- Name them: cert1.jpg, cert2.jpg, cert3.jpg
- Update certificate details in `index.html` (lines with certificate info)
- Or use the upload button to add new ones

### 2. Customize Projects

Edit `projects.js` to add/modify projects:

```javascript
{
    title: "Your Project Title",
    description: "Detailed description of your project...",
    techStack: ["Tech1", "Tech2", "Tech3"],
    githubLink: "https://github.com/yourusername/project",
    category: "ai" // Options: ai, web, automation, trading
}
```

### 3. Update Personal Information

In `index.html`, search and replace:
- **Name**: "Nigel Ludick" → Your Name
- **Email**: nigelludick88@gmail.com → Your Email
- **GitHub**: github.com/nigelludick → Your GitHub
- **LinkedIn**: linkedin.com/in/nigelludick → Your LinkedIn
- **Bio Text**: Update the about section with your story
- **Stats Numbers**: Update data-target values in stats section
- **Experience**: Update timeline items with your work history

### 4. Customize Colors (Optional)

Edit CSS variables in `styles.css` (lines 8-20):

```css
:root {
    --primary-color: #6366f1;      /* Main purple */
    --neon-blue: #00d4ff;          /* Neon blue accent */
    --neon-purple: #b794f6;        /* Neon purple accent */
    /* ... more colors */
}
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```
Then enable GitHub Pages in repository settings.

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get instant live URL

### Option 3: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Auto-deploy on every push

### Option 4: Local Preview
Simply open `index.html` in your browser - no server needed!

## 🎨 Customization Guide

### Adding New Sections
1. Add HTML in `index.html`
2. Add navigation link in navbar
3. Style in `styles.css`
4. Add scroll behavior in `script.js`

### Changing Animations
- **Typing Text**: Edit `textArray` in `script.js`
- **Animation Speed**: Modify timing values in CSS animations
- **Binary Background**: Adjust `fontSize` and `drops` in `script.js`

### Adding More Certificates
1. Upload image to `assets/certificates/`
2. Copy a certificate card in `index.html`
3. Update the image path and details

### Modifying Skills
Edit the skill bars in `index.html`:
```html
<div class="skill-bar">
    <div class="skill-info">
        <span>Skill Name</span>
        <span>90%</span>
    </div>
    <div class="skill-progress">
        <div class="skill-fill" data-width="90"></div>
    </div>
</div>
```

## 🔧 Technical Details

- **No Build Process** - Pure HTML, CSS, JavaScript
- **No Dependencies** - Only Font Awesome CDN for icons
- **Lightweight** - Fast loading and performance
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Accessible** - ARIA labels and keyboard navigation
- **Cross-Browser** - Works on all modern browsers

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

© 2025 Nigel Ludick. All rights reserved.

Feel free to use this template for your own portfolio!

## 🤝 Support

For questions or issues:
- Email: nigelludick88@gmail.com
- GitHub: [@nigelludick](https://github.com/nigelludick)
- LinkedIn: [Nigel Ludick](https://www.linkedin.com/in/nigelludick)
---
LINK:https://nigelludickportfolio.netlify.app/
**Built with ❤️ by Nigel Ludick**

