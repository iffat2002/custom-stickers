import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const iconStyle = {
    position: "relative",
    cursor: "ponter",
  };
  const countStyle = {
    position: "absolute",
    top: "-7px",
    right: "-8px",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "darkorange",
    color: "white",
    fontSize: "12px",
    textAlign: "center",
    lineHeight: "16px",
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(0);
  const handleMouseEnter = (num) => {
    setIsDropdownOpen(num);
  };
  const handleMouseLeave = () => {
    setIsDropdownOpen(0);
  };
  return (
    <div className="w-full ">
      <nav className="bg-white-300 h-14 scroll:fixed ">
        <div className="flex justify-between w-11/12 h-full m-auto items-center  border-gray-300 ">
          <Link href="/">
            <Image
              class="w-55"
              src="/logo.png"
              alt="header logo"
              width={245}
              height={36}
            />
          </Link>
          <div className="relative font-semibold text-gray-700 font-Roboto">
            <ul className="flex gap-5">
              <li className="hover:text-orange-500">
                {" "}
                <Link href="#">Home</Link>
              </li>
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <Link className="text-orange-500" href="#">
                  Custom products
                </Link>
                {isDropdownOpen === 1 && (
                  <div className="h-40 w-60 absolute top-full left-0 mt-0">
                    <div className=" bg-white border w-full border-gray-200 p-2 shadow-lg mt-5">
                      <ul className="font-thin text-sm">
                        <li className="p-2 hover:text-orange-500">
                          <Link href="#">Custom Stickers</Link>
                        </li>
                        <li className="p-2 hover:text-orange-500">
                          <Link href="#">Custom Labels</Link>
                        </li>
                        <li className="p-2 hover:text-orange-500">
                          <Link href="#">Custom Packaging</Link>
                        </li>
                        <li className="p-2 hover:text-orange-500">
                          <Link href="#">Custom Posters</Link>
                        </li>
                        <li className="p-2 hover:text-orange-500">
                          <Link href="#">Custom Photo Stickers</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li className="hover:text-orange-500">
                <Link href="#">CustomAny Collections</Link>
              </li>
              <li className="hover:text-orange-500">
                {" "}
                <Link href="#">Blog</Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                {" "}
                <Link className="hover:text-orange-500" href="#">
                  Support
                </Link>
                {isDropdownOpen === 2 && (
                  <div className="h-40 w-60 absolute top-full  mt-0">
                    <div className=" bg-white border w-full border-gray-200 p-2 shadow-lg mt-5">
                      <ul className="font-thin">
                        <li className="p-2 hover:text-orange-500">
                          <Link href="#">Pricing</Link>
                        </li>
                        <li className="p-2 hover:text-orange-500">
                          <Link href="#">How to order</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className="flex gap-5">
            <div
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              className="w-10"
            >
              <FontAwesomeIcon className="w-5" icon={faSearch} />
              {isDropdownOpen === 3 && (
                <div className="h-40 w-72 absolute pt-3 right-40 mt-0">
                  <div className=" bg-white border w-full border-gray-200 p-2 shadow-lg mt-3">
                    <input
                      type="text"
                      placeholder="Search for products"
                      className="font-thin p-2 inline-block w-11/12 focus:border-0 focus:outline-none"
                    />
                    <FontAwesomeIcon
                      className="w-5 inline-block"
                      icon={faSearch}
                    />
                  </div>
                </div>
              )}
            </div>
            <div style={iconStyle}>
              <FontAwesomeIcon className="w-6" icon={faCartShopping} />
              <span style={countStyle}>0</span>
            </div>

            <div className="hover:text-gray-400 font-bold cursor-pointer">
              <p>$0.00</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
