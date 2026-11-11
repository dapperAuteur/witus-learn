// The no-FOUC script: applies the saved (or system) theme to <html> before the page paints. Shared by
// the root layout and global-error.tsx (which replaces that layout), so both stay in step.
export const THEME_SCRIPT =
  "(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var d=t==='dark'||(t!=='light'&&m);var e=document.documentElement;e.classList.toggle('dark',d);e.style.colorScheme=d?'dark':'light';}catch(e){}})();";
