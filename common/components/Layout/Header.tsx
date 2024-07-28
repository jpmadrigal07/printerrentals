"use client";
import Link from "next/link";
import Image from "next/image";
import main_logo from "@/common/assets/main_logo.png";
import { Typography } from "../ui/Typography";
import {
  LucideChevronDown,
  LucideChevronUp,
  LucideMenu,
  LucideX,
} from "lucide-react";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "HOME", link: "/" },
  {
    name: "PRINTERS",
    link: "/printers",
    subMenu: [
      {
        name: "Brother InkJet",
        link: "/printer",
      },
      {
        name: "Brother LaserJet",
        link: "/printer",
      },
      {
        name: "Epsone InkJet",
        link: "/printer",
      },
    ],
  },
  { name: "ABOUT", link: "/about", isActive: false },
  { name: "BLOG", link: "/blog", isActive: false },
  { name: "CONTACT", link: "/contact", isActive: false },
];

const Header = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubMenuClick = (e: React.MouseEvent, name: string) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setOpenSubMenu(openSubMenu === name ? null : name);
    }
  };

  return (
    <nav className="bg-gray-50 flex justify-between items-center px-4 md:px-10 py-1">
      <Link href="/">
        <Image src={main_logo} alt="logo" width={140} height={140} />
      </Link>
      <div className="md:hidden" onClick={handleMenuClick}>
        <div
          className={`transition-transform duration-500 ease-in-out transform ${
            isMenuOpen ? "rotate-90" : ""
          }`}
        >
          {isMenuOpen ? <LucideX /> : <LucideMenu />}
        </div>
      </div>
      <div
        className={`transition-all duration-200 ease-in-out transform origin-top ${
          isMenuOpen ? "scale-y-100" : "scale-y-0"
        } md:scale-y-100 fixed md:relative top-16 inset-x-0 md:top-auto bg-gray-50 p-5 md:p-0 md:bg-transparent md:flex z-[999]`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 list-none">
          {links.map((link) => (
            <li key={link.name} className="group">
              <Link href={link.link}>
                <div
                  className="flex justify-between items-center hover:text-orange-400 transition-colors duration-200"
                  onClick={(e) =>
                    link.subMenu && handleSubMenuClick(e, link.name)
                  }
                >
                  <div className="w-full">
                    <Typography
                      variant="h5"
                      fontWeight="semibold"
                      className={`text-blue-950 hover:text-orange-400 transition-colors duration-200 ${
                        pathName === link.link ? "text-orange-400" : ""
                      }`}
                    >
                      {link.name}
                    </Typography>
                  </div>
                  {link.subMenu && (
                    <div className="inline-block md:hidden">
                      {openSubMenu === link.name ? (
                        <LucideChevronUp />
                      ) : (
                        <LucideChevronDown />
                      )}
                    </div>
                  )}
                </div>
              </Link>
              {link.subMenu && openSubMenu === link.name && (
                <div
                  className={`absolute bg-white shadow-lg right-36 mt-2 py-2 px-4 w-56 rounded-lg transition-all duration-300 ease-in-out transform origin-top scale-y-0 lg:group-hover:scale-y-100 pt-2 pb-2 hidden lg:block`}
                >
                  {link.subMenu.map((subLink, index) => (
                    <Link href={subLink.link} key={subLink.name}>
                      <Typography
                        variant="h5"
                        fontWeight="semibold"
                        className={`text-blue-950 hover:text-blue-900 transition-colors duration-200 ${
                          index < link.subMenu.length - 1 ? "mb-5" : ""
                        }`}
                      >
                        {subLink.name}
                      </Typography>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
