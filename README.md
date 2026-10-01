# Mazent Website

Single-page marketing site for Mazent (React + Vite + Tailwind CSS).

## Run locally
```
npm install
npm run dev
```

## Build for production
```
npm run build
```
Upload the contents of the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, cPanel, etc.) and point your `.in` domain at it.

## Contact form
Enquiries are emailed to mazent.5960@gmail.com using FormSubmit. The very first submission sends a one-time
activation email to that inbox — click "Activate" once, and all future enquiries arrive normally.
To change the address, edit `NOTIFY_EMAIL` in `src/components/Contact.jsx`.
