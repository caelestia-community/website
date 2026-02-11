'use client';

import { usePathname } from "next/navigation";
import { JSX, useState } from "react";

interface NavItemData {
  label: string;
  href: string;
}

interface NavItemProps {
  navItems: NavItemData[];
  isMobile?: boolean;
}

