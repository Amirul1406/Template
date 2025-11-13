# Fullscreen Loading Component Setup

## Files Created

1. **Component**: `src/components/loaders/fullscreen-loading.tsx`
   - Template file ready for you to write your Loading component code
   - Follow the pattern from TGR-Penang's `Loading.tsx`

2. **Styles**: `src/scss/components/_loading.scss`
   - Placeholder for your loading styles
   - Copy your `_loading.scss` content here

3. **Assets**: Already copied to `public/assets/loading/`
   - background.webp
   - logo.png
   - Group 1.png, Group 2.png, Group 3.png, Group 4.png

## What You Need to Do

### 1. Write the Preview Component
In `fullscreen-loading.tsx`, replace the Preview component with your Loading component code.

**Key Points:**
- Make it standalone (no `useAppContext` dependency)
- Use `useState` for progress demo (0-100%)
- Import assets from `/assets/loading/` path
- Make it auto-animate progress for the demo

### 2. Add Your Styles
Copy your `_loading.scss` content into `src/scss/components/_loading.scss`

**Note:** The styles are imported in `src/index.css`. If you prefer inline styles or Tailwind classes, you can remove the SCSS import.

### 3. Write Code Snippets
Fill in the `ReactCode`, `VueCode`, and `HtmlCode` constants with your component code.

## Example Structure

```typescript
const Preview = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Auto-increment progress for demo
    const interval = setInterval(() => {
      setProgress(prev => prev >= 100 ? 0 : prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="loading">
      {/* Your loading component JSX */}
    </div>
  );
};
```

## Asset Paths

Use these paths in your component:
- `/assets/loading/background.webp`
- `/assets/loading/logo.png`
- `/assets/loading/Group 1.png`
- etc.

Good luck! 🚀

