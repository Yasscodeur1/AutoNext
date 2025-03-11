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
import AcmeLogo from "./ui/AcmeLogo";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Importez les icônes
import { ShoppingCart } from "lucide-react";
import CartIcon from "./ui/carteIcon";

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
        {/* <AcmeLogo /> */}
        <Image
          className=" rounded-4xl"
          src={"/LogoAuto.png"}
          width={110}
          height={30}
          alt={""}
        />
        {/* <p className="font-bold text-inherit">AUTO</p> */}
      </NavbarBrand>

      {/* Menu Burger Button */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="p-2">
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-50 shadow-md transition-all duration-300 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ maxHeight: "calc(100vh - 56px)" }} // Limiter la hauteur du menu mobile
      >
        <div className="flex flex-col items-center p-5">
          <NavbarItem>
            <Link
              className="p-5 hover:border-b-2 hover:border-b-cyan-900"
              color="foreground"
              href="/"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="p-5 hover:border-b-2 hover:border-b-cyan-900"
              aria-current="page"
              href="products"
            >
              Products
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="p-5 hover:border-b-2 hover:border-b-cyan-900"
              color="foreground"
              href="#"
            >
              Details
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </div>
      </div>

      {/* Menu Desktop */}
      <NavbarContent className="hidden lg:flex gap-4 p-5" justify="center">
        <NavbarItem>
          {links.map((link, index) => (
          <Link
            key={index}
            className={`p-3 hover:border-b-2 hover:border-b-cyan-900 ${
              link.name === "Contact" ? "mr-40" : ""}`}
            color="foreground"
            href={link.path}
            
          >
            {link.name}
          </Link>
          ))}
        </NavbarItem>
      </NavbarContent>
      <CartIcon/>
    </Navbar>
  );
};

export default NavBar;
