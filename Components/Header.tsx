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
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = (query: string) => {
  //   setSearchTerm(query.toLowerCase());
  // };

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Details", path: "/details" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar className="flex justify-between fixed top-0 left-0 w-full z-50 bg-gray-50  dark:bg-transparent dark:text-gray-50 shadow-md backdrop-blur-md">
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
      <div className="lg:hidden absolute right-0 flex items-center  dark:bg-gray-900 dark:text-gray-50">
        <button onClick={toggleMenu} className="p-2 z-50">
          {isMenuOpen ? (
            // <XIcon className="h-6 w-6" />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          ) : (
            // <MenuIcon className="h-6 w-6" />
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-50  dark:bg-gray-900 dark:text-gray-50 shadow-md transition-all duration-300 transform z-40 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ maxHeight: "calc(100vh - 50px)" }}
      >
        <div className="flex flex-col items-center p-12">
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
      <NavbarContent
        className="hidden lg:flex gap-4 p-5 dark:bg-transparent dark:text-gray-50"
        justify="center"
      >
        <NavbarItem>
          {links.map((link, index) => (
            <Link
              key={index}
              className={`p-3  hover:text-2xl hover:font-bold ${
                link.name === "Contact" ? "mr-1" : ""
              }`}
              color="foreground"
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </NavbarItem>
      </NavbarContent>
      <div className="w-2/3 flex items-center justify-end gap-8 lg:flex-row md:flex-row xs:flex-col">
        <div>
          <SearchBar />
        </div>
        <div className="flex gap-3">
          <NavIcons />
          <ThemeToggle />
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
