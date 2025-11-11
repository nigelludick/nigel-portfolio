# 📋 Portfolio Setup Guide

Follow these steps to personalize your portfolio website.

## Step 1: Add Your Photos & Files

### Profile Photo
1. Take or choose a professional headshot
2. Crop it to a square (400x400px recommended)
3. Save as `assets/profile.jpg`
4. Alternative: Click the profile image on the website to upload

### Resume
1. Export your resume as PDF
2. Save as `assets/resume.pdf`
3. The download button will automatically work

### Certificates
1. Save certificate images as JPG or PNG
2. Place in `assets/certificates/` folder
3. Name them: cert1.jpg, cert2.jpg, cert3.jpg, etc.
4. Alternative: Use the upload button on the website

## Step 2: Update Personal Information

Open `index.html` and update these sections:

### Contact Information (Multiple Locations)
Search for these and replace with your info:
- `nigelludick88@gmail.com` → Your email
- `github.com/nigelludick` → Your GitHub username
- `linkedin.com/in/nigelludick` → Your LinkedIn username

### Home Section
```html
<h1 class="main-title">Hi, I'm <span class="highlight">YOUR NAME</span></h1>
```

### Stats (Around line 60)
```html
<div class="stat-number" data-target="15">0</div> <!-- Projects -->
<div class="stat-number" data-target="5">0</div>  <!-- Certifications -->
<div class="stat-number" data-target="3">0</div>  <!-- Years Experience -->
```

### About Section Bio
Update the paragraphs in the About section with your story.

### Experience Timeline
Update each timeline item with your actual work experience:
```html
<div class="timeline-date">2022 - Present</div>
<h3>Your Job Title</h3>
<h4>Company Name</h4>
<p>Description of your role...</p>
```

### Certificate Details
For each certificate card, update:
```html
<h3>Certificate Name</h3>
<p class="cert-issuer">Issuing Organization</p>
<p class="cert-date">Issued: Month Year</p>
<a href="verification-url">Verify Certificate</a>
```

## Step 3: Add Your Projects

Open `projects.js` and edit the projects array:

```javascript
{
    title: "Your Project Name",
    description: "Detailed description explaining what the project does, technologies used, and impact...",
    techStack: ["Python", "React", "API", "etc"],
    githubLink: "https://github.com/yourusername/project-repo",
    category: "ai" // Options: ai, web, automation, trading
}
```

### Project Categories
- `ai` - AI & Machine Learning projects
- `web` - Web applications
- `automation` - Automation tools
- `trading` - Trading bots and financial tools

## Step 4: Customize Skills

In `index.html`, update the skill bars:

```html
<div class="skill-bar">
    <div class="skill-info">
        <span>Your Skill</span>
        <span>85%</span> <!-- Your proficiency -->
    </div>
    <div class="skill-progress">
        <div class="skill-fill" data-width="85"></div>
    </div>
</div>
```

Update skill tags:
```html
<span class="skill-tag"><i class="fas fa-check"></i> Your Tool</span>
```

## Step 5: Customize Typing Animation

In `script.js`, find the `textArray` and update:

```javascript
const textArray = [
    'Your Skill 1',
    'Your Skill 2',
    'Your Skill 3',
    'Your Skill 4',
    'Your Skill 5'
];
```

## Step 6: Test Locally

1. Open `index.html` in your browser
2. Check all sections load correctly
3. Test all links work
4. Verify images display
5. Test contact form
6. Check mobile responsiveness (resize browser)

## Step 7: Deploy

### GitHub Pages
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio website"

# Create main branch
git branch -M main

# Add remote (create repo on GitHub first)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git push -u origin main

# Enable GitHub Pages in repository settings
# Settings → Pages → Source: main branch
```

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

### Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Drag and drop your entire project folder
4. Get instant live URL
5. Optional: Connect custom domain

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Auto-deploys on every push

## Step 8: Share Your Portfolio

Add your portfolio URL to:
- ✅ LinkedIn profile
- ✅ GitHub profile README
- ✅ Resume
- ✅ Email signature
- ✅ Business cards
- ✅ Social media bios

## Common Issues & Solutions

### Images Not Showing
- Check file paths are correct
- Ensure images are in `assets/` folder
- Verify file names match exactly (case-sensitive)

### Contact Form Not Working
- Make sure email is updated in `script.js`
- Test in different browsers
- Check browser allows mailto: links

### Animations Not Working
- Clear browser cache (Ctrl+F5)
- Check JavaScript console for errors (F12)
- Ensure all files are in correct locations

### Mobile Menu Not Opening
- Check JavaScript is loading
- Verify hamburger icon is visible
- Test in different browsers

## Maintenance Tips

### Regular Updates
- Add new projects as you complete them
- Update certificates when you earn new ones
- Keep experience timeline current
- Refresh stats numbers periodically

### Performance
- Compress images before uploading
- Keep file sizes reasonable
- Test loading speed regularly

### SEO
- Update meta description in `index.html`
- Add relevant keywords
- Keep content fresh and updated

## Need Help?

- Check browser console (F12) for errors
- Review README.md for detailed documentation
- Test in different browsers
- Verify all file paths are correct

---

**You're all set! 🎉**

Your professional portfolio is ready to impress recruiters and showcase your amazing work!