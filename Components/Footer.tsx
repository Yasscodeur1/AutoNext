"use client"
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import ButtonCookieSession from "../app/(home)/setting/ButtonCookieSession";
import CarouselProducts from "./carousel.products";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-600 border-t dark:bg-gray-900 dark:text-gray-50">
        <CarouselProducts/>
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between item-center lg:flex-row  mb-8 md:space-y-4">
                <Link
                    href="/"
                    className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-0"
                >
                    CAR DEALER
                </Link>
                <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm">
                    <div className="mb-4 md:mb-0">
                        <span>
                            © 2021 Yasscodeur. All rights reserved.
                            <Link href={"/terms"} className="ml-4 hover:text-gray-900">
                            Terms
                            </Link>
                            <Link href={"#"} className="ml-4 hover:text-gray-900">
                            Privacy
                            </Link>
                            {/* <Link href={"#"} className="ml-4 hover:text-gray-900"> */}
                            <ButtonCookieSession/>
                            {/* </Link> */}
                        </span>
                    </div>
                </div>
                <div className="md:flex lg:flex xl:flex gap-4 mt-4 md:mt-0 ">
                    <Link href={"#"} className="hover:text-gray-900">
                    <FaTwitter className="w-5 h-5" />
                    </Link>
                    <Link href={"#"} className="hover:text-gray-900">
                    <FaFacebook className="w-5 h-5" />
                    </Link>
                    <Link href={"#"} className="hover:text-gray-900">
                    <FaInstagram className="w-5 h-5" />
                    </Link>
                    <Link href={"#"} className="hover:text-gray-900">
                    <FaLinkedin className="w-5 h-5" />
                    </Link>
                    <Link href={"#"} className="hover:text-gray-900">
                    <FaGithub className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
