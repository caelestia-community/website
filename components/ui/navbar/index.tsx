'use client';

interface NavItemData {
  label: string;
  href: string;
}

interface NavItemProps {
  navItems: NavItemData[];
  isMobile?: boolean;
}

