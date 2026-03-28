# Gorro Project Structure

## Overview
Gorro is a Next.js application for savings and treasury management built for Nigerian communities.

## Directory Structure

```
gorro/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   └── favicon.ico        # Favicon
│   ├── assets/                # Static assets
│   │   ├── images/            # PNG/JPG images
│   │   ├── icons/             # Icon files
│   │   └── svg/               # SVG files
│   ├── components/            # React components
│   │   ├── Navbar.tsx         # Navigation component
│   │   └── Footer.tsx         # Footer component
│   ├── lib/                   # Utility libraries
│   │   └── cloudinary.ts      # Cloudinary configuration
│   └── asset/                 # Remote assets configuration
│       └── remoteAsset.ts     # Asset URLs and references
├── public/                    # Public static files
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── html-project/              # Original HTML reference (can be removed)
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration
├── postcss.config.mjs         # PostCSS configuration
├── eslint.config.mjs          # ESLint configuration
└── README.md                  # Project documentation
```

## Key Files

### Components
- `src/components/Navbar.tsx` - Main navigation bar
- `src/components/Footer.tsx` - Footer component

### Pages
- `src/app/page.tsx` - Home page with all sections
- `src/app/layout.tsx` - Root layout with metadata

### Assets
- `src/assets/svg/` - All SVG icons and illustrations
- `src/assets/images/` - PNG/JPG images
- `src/asset/remoteAsset.ts` - Remote asset URLs

### Configuration
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript settings
- `postcss.config.mjs` - PostCSS/Tailwind configuration
- `eslint.config.mjs` - ESLint rules

## Development

### Running the project
```bash
npm run dev
```

### Building for production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## Asset Management

All static assets are organized in `src/assets/`:
- SVG files: `src/assets/svg/`
- Images: `src/assets/images/`
- Icons: `src/assets/icons/`

Remote assets are configured in `src/asset/remoteAsset.ts`.

## Styling

The project uses Tailwind CSS for styling. Global styles are in `src/app/globals.css`.

## Notes

- The `html-project/` folder contains the original HTML reference design and can be removed once all assets are migrated
- All SVG assets have been moved to `src/assets/svg/`
- PNG images are in `src/assets/images/`
