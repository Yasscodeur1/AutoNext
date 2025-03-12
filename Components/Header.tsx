"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import CartIcon from "./ui/carteIcon";
import ThemeToggle from "./ButtonDarkMode";
import ButtonFavoris from "./ui/ButtonFavoris";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Details", path: "/details" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/dashboard/FormData" },
    { name: "Sign up", path: "/dashboard/FormData" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar className="flex justify-between fixed top-0 left-0 w-full z-50 bg-gray-50 shadow-md backdrop-blur-md">
      <NavbarBrand className="ml-20">
        <Image
          className=" rounded-4xl"
          src={"/LogoAuto.png"}
          width={110}
          height={30}
          alt={""}
        />
      </NavbarBrand>

      {/* Menu Burger Button */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="p-2 z-50">
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-50 shadow-md transition-all duration-300 transform z-40 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ maxHeight: "calc(100vh - 56px)" }}
      >
        <div className="flex flex-col items-center p-5">
          {links.map((link, index) => (
            <NavbarItem key={index}>
              <Link
                className="p-5 hover:border-b-2 hover:text-2xl"
                color="foreground"
                href={link.path}
              >
                {link.name}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </div>

      {/* Menu Desktop */}
      <NavbarContent className="hidden lg:flex gap-4 p-5" justify="center">
        <NavbarItem>
          {links.map((link, index) => (
            <Link
              key={index}
              className={`p-3  hover:text-2xl hover:font-bold ${
                link.name === "Contact" ? "mr-40" : ""
              }`}
              color="foreground"
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </NavbarItem>
      </NavbarContent>
      <div className="flex gap-7">
      <CartIcon />
      <ButtonFavoris isFavorited={false}/>
      <ThemeToggle />
      </div>
      
    </Navbar>
  );
};

export default NavBar;