# Images

This folder contains image assets for the EmeritaClinical platform.

## Logo Files
EmeritaClinical now uses an all-text wordmark (`components/logo-wordmark.tsx`) rendered live with gradients, so no static logo file is required. If you add alternative artwork later, place it here and import it via `next/image` when needed.

## Usage in Next.js
Import images in your components:

```tsx
import Image from 'next/image'

<Image 
  src="/images/logo.svg" 
  alt="EmeritaClinical Logo" 
  width={200} 
  height={50}
/>
```

## Recommended Formats
- **SVG**: Preferred for any future illustrations or icons (scalable, small file size)
- **PNG**: For images with transparency
- **WebP**: For photos and complex graphics (better compression)
- **JPEG**: For photos without transparency
