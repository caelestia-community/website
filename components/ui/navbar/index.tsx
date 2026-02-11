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

const Navbar = ({ navItems, isMobile }: NavItemProps) => {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  function generateNav(
    navData: NavItemData[],
    isMobile?: boolean
  ): JSX.Element[] | string {
    let menu: JSX.Element[] | string = '';

    menu = navData.map((item) => (

    ))
  }
}
