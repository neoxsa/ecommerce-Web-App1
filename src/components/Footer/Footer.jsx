import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp";

function Footer() {
  return (
    <>
      <div className="border-t-3 border-gray-300 px-4 md:px-10 lg:px-20 pt-10 pb-10 flex flex-col lg:flex-row w-full justify-center items-center gap-10 lg:gap-40">
        <div className="w-full lg:w-1/3 flex flex-col gap-4 mb-10 lg:mb-0">
          <span>
            <img className="w-35 h-25" src={logo} alt="logo" />
          </span>
          <div>
            <p className="text-gray-400 text-md ">
              400 University Drive Suite 200 Coral Gables,
            </p>
            <p className="text-gray-400 text-md ">FL 33134 USA</p>
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex  md:flex-row flex-wrap lg:flex-nowrap gap-20 lg:gap-30 justify-center items-start">
          <div className="flex flex-col gap-8 mb-10 md:mb-0">
            <h4 className="text-gray-400 text-md font-medium">Link</h4>
            <ul className="flex flex-col gap-8 font-medium">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 mb-10 md:mb-0">
            <h4 className="text-gray-400 text-md font-medium">Help</h4>
            <ul className="flex flex-col gap-8 font-medium">
              <li>Payment Options</li>
              <li>Return</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-gray-400 text-md font-medium">Newsletter</h4>
            <div className="flex flex-wrap gap-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-60 border-b-1 focus:outline-none"
              />
              <button className="border-b-1 font-medium cursor-pointer">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-left text-gray-500 text-sm lg:text-md border-gray-300 border-t-2 pt-5 lg:p-5">
        © 2025 Nguyen | E-commerce All rights reserved.
      </div>
    </>
  );
}

export default Footer;
