# Portfolio Customization Guide

This guide will help you personalize your portfolio with your actual information, projects, and content.

## 📝 Quick Customization Checklist

### 1. Personal Information

Update these files with your details:

#### Header.js

- Change "Adarsh Sahu" to your name in the logo

#### Hero.js

- Update the greeting and name
- Modify the subtitle (currently "Software Developer")

#### Contact.js

- Update email address
- Update phone number
- Update location
- Update LinkedIn and GitHub URLs

### 2. About Section (About.js)

- Replace the about text with your personal story
- Update the statistics (projects completed, client satisfaction, years of experience)

### 3. Skills Section (Skills.js)

- Add/remove skills based on your expertise
- Current skills: HTML5, CSS3, JavaScript, React, Node.js, Python, MongoDB, Express.js, Git, GitHub, SQL, Bootstrap, Tailwind CSS, Figma

### 4. Projects Section (Projects.js)

Replace the placeholder projects with your actual projects:

```javascript
const projects = [
  {
    title: "Your Project Name",
    description: "Detailed description of what the project does",
    technologies: ["React", "Node.js", "MongoDB"], // Technologies used
    github: "https://github.com/yourusername/project-name",
    live: "https://yourproject.com", // Live demo URL
    image: "/project-image.jpg", // Add project screenshots to public folder
  },
  // Add more projects...
];
```

### 5. Services Section (Services.js)

Update the services to match what you offer:

```javascript
const services = [
  {
    icon: <FaCode />,
    title: "Your Service Title",
    description: "Detailed description of the service you provide",
  },
  // Add more services...
];
```

### 6. Profile Photo

- Replace `public/profile-photo.jpg` with your professional photo
- Recommended size: 400x400 pixels
- Format: JPG or PNG

### 7. Resume

- Replace `public/Adarsh-sahu resume1.pdf` with your updated resume
- The "My resume" button will automatically link to this file

## 🎨 Styling Customization

### Colors

To change the color scheme, update these values in `App.css`:

```css
/* Primary orange color */
.orange-accent {
  color: #ff6b35;
}
.orange-bg {
  background-color: #ff6b35;
}

/* Background colors */
background-color: #0a0a0a; /* Dark background */
background-color: #1a1a1a; /* Slightly lighter background */

/* Text colors */
color: #ffffff; /* White text */
color: #cccccc; /* Light gray text */
```

### Fonts

The portfolio uses the Inter font family. To change fonts, update the `font-family` in `App.css`:

```css
body {
  font-family: "Your-Font-Name", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
```

## 📁 File Structure

```
portfolio/
├── public/
│   ├── profile-photo.jpg          # Your profile photo
│   ├── Adarsh-sahu resume1.pdf    # Your resume
│   └── project-images/            # Add project screenshots here
├── src/
│   ├── components/
│   │   ├── Header.js              # Navigation and logo
│   │   ├── Hero.js                # Hero section with photo
│   │   ├── Skills.js              # Skills showcase
│   │   ├── Services.js            # Services offered
│   │   ├── About.js               # About section
│   │   ├── Projects.js            # Projects portfolio
│   │   └── Contact.js             # Contact form and info
│   ├── App.js                     # Main application
│   └── App.css                    # Global styles
```

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 📱 Adding Project Images

1. Add project screenshots to the `public` folder
2. Update the `image` property in your projects array
3. Recommended image size: 400x300 pixels
4. Format: JPG or PNG

## 🔧 Advanced Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.js`
3. Add corresponding CSS file
4. Update navigation in `Header.js`

### Adding Animations

The portfolio uses Framer Motion. To add more animations:

```javascript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content here
</motion.div>;
```

### Contact Form Integration

To make the contact form functional:

1. Use services like Formspree, Netlify Forms, or EmailJS
2. Update the `handleSubmit` function in `Contact.js`
3. Add form validation if needed

## 📞 Support

If you need help customizing your portfolio:

1. Check the React documentation
2. Review the Framer Motion documentation for animations
3. Use browser developer tools to inspect and modify styles

## 🎯 Tips for Success

1. **Keep it simple**: Don't overcrowd your portfolio
2. **Show your best work**: Quality over quantity
3. **Make it personal**: Tell your story authentically
4. **Test on mobile**: Ensure it looks great on all devices
5. **Keep it updated**: Regularly update projects and skills
6. **Optimize images**: Compress images for faster loading
7. **Add analytics**: Use Google Analytics to track visitors

Happy customizing! 🚀


