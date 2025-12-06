# Setup Instructions

## 1. Contact Form Setup (Formspree)

The contact form is configured to use Formspree for email submissions. Follow these steps:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account (allows 50 submissions/month)
3. Create a new form and get your Form ID
4. Open `src/components/Contact.jsx`
5. Replace `YOUR_FORM_ID` on line 28 with your actual Formspree form ID:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
   Example: `https://formspree.io/f/xyzabc123`

### Alternative: Use EmailJS (More Features)

If you prefer EmailJS:
1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Install EmailJS: `npm install @emailjs/browser`
3. Follow their documentation to integrate

## 2. Social Media Preview Image (OG Image)

Create a professional preview image for social media sharing:

### Image Specifications:
- **Size:** 1200x630 pixels (Facebook/LinkedIn/Twitter recommended)
- **Format:** PNG or JPG
- **File name:** `og-image.png`
- **Location:** Save to `public/assets/og-image.png`

### Design Recommendations:
1. Include your name prominently
2. Add your title: "Full Stack Developer & AI Engineer"
3. Use your brand colors (black background works well)
4. Add a professional photo or your hero vector illustration
5. Include key technologies or a tagline

### Quick Design Tools:
- **Canva:** [https://www.canva.com/](https://www.canva.com/) - Use "Facebook Post" template (1200x630)
- **Figma:** Free design tool
- **Remove.bg:** To remove background from photos

### Example Layout:
```
┌─────────────────────────────────────┐
│  ADIL ALI LAKHAIR                   │
│  Full Stack Developer & AI Engineer │
│                                     │
│  [Your Photo/Illustration]          │
│                                     │
│  Python • React • AI/ML • Node.js   │
└─────────────────────────────────────┘
```

## 3. Update Deployment URL

Once deployed, update the canonical URL in `index.html`:
```html
<link rel="canonical" href="YOUR_ACTUAL_DEPLOYED_URL" />
<meta property="og:url" content="YOUR_ACTUAL_DEPLOYED_URL" />
```

## 4. Test Your Setup

### Test Contact Form:
1. Fill out the form on your site
2. Check Formspree dashboard for submission
3. Verify email arrives at your configured email

### Test Social Sharing:
1. Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
3. Use [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## 5. Environment Variables (Optional)

For better security, you can use environment variables:

Create `.env` file:
```env
VITE_FORMSPREE_ID=your_form_id_here
```

Update Contact.jsx:
```javascript
const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
```

Add `.env` to `.gitignore` to keep it private.

## Quick Start Checklist

- [ ] Sign up for Formspree and get Form ID
- [ ] Update Contact.jsx with your Form ID
- [ ] Create og-image.png (1200x630) and save to public/assets/
- [ ] Test contact form submission
- [ ] Test social media preview with debugging tools
- [ ] Update deployment URL after going live
