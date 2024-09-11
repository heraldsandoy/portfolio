"use client"

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const mobileMenuClasses = `mobile-toggled-menu ${menuOpen ? "show-m-flex" : "hide-mobile"} bg-[#fff] fixed w-full left-0 top-[0px] z-[999] flex flex-col justify-center items-center`;

  return (
    <nav className="fixed w-full z-[9999]">
      <div className="w-[95%] flex justify-between items-center min-h-[120px] mx-auto ">
        <div className="logo-place">
          <Image src="/logo.png" width={118} height={55} alt="logo" />
        </div>

        <div className="main-menu flex font-pexico hide-mobile">
          <Link href="#projects">Portfolio</Link>
          {/* <Link href="/">About</Link> */}
          <Link href="mailto:sandoyherald1993@gmail.com">Contact</Link>
        </div>

        <div className="resume">
          <div className="open-menu relative top-[-5px] pr-5 show-mobile" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-[#3e566f] text-3xl" />
          </div>

          <Link href="/resume_herald.pdf" target="_blank" className={`hide-mobile ${menuOpen ? "hide-mobile" : ""}`}>
            <div className="relative bg-blue-bg text-white cta-prop">
              <div className="skew-top bg-blue-bg"></div>
              <p className="z-10 font-pexico">RESUME</p>
              <div className="skew-bottom bg-blue-bg"></div>
            </div>
          </Link>
        </div>

        <div className={mobileMenuClasses}>
          <div className="absolute top-[25px] w-full flex justify-between items-center max-w-[95%] mx-auto">
            <div className="logo-place">
              <Image src="/logo.png" width={118} height={55} alt="logo" />
            </div>

            <div className="close-menu pr-5 relative top-1" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faTimes} className="text-[#00386f] text-4xl" />
            </div>
          </div>

          <div className="main-menu font-pexico flex flex-col">
            <Link href="#projects">Portfolio</Link>
            <Link href="mailto:sandoyherald1993@gmail.com">Contact</Link>
          </div>

          <div className="resume">
            <Link href="/resume_herald.pdf" target="_blank">
              <div className="relative bg-blue-bg text-white cta-prop">
                <div className="skew-top bg-blue-bg"></div>
                <p className="z-10 font-pexico">RESUME</p>
                <div className="skew-bottom bg-blue-bg"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
