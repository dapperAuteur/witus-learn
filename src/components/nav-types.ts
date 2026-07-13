// Shared nav-item shape used by the desktop dropdowns (nav-menu.tsx), the mobile drawer
// (mobile-nav.tsx), and the item lists computed in site-header.tsx.
export interface NavItem {
  href: string;
  label: string;
  accent?: boolean;
}
