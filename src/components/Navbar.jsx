import React, { useState } from "react";

import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, animateScroll as scroll } from "react-scroll";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px] bg-zinc-200 fixed z-10">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center pl-8">
          <img className="w-10 h-10" src={logoImg} alt="/" />
          <ul className="hidden md:flex font-bF">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Works
              </Link>
            </li>
            <li>
              <Link to="platforms" smooth={true} offset={-100} duration={500}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                My Resume
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <Bars3BottomRightIcon className="w-5" />
          ) : (
            <XMarkIcon className="w-5" />
          )}
        </div>
      </div>

      <ul
        className={!nav ? "hidden" : "absolute bg-zinc-100 w-full px-8 font-bF"}
      >
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Works
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            My Resume
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
