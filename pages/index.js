import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCartShopping,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(0);
  const handleMouseEnter = (num) => {
    setIsDropdownOpen(num);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(0);
  };
  return (
    <>
      <Head>
        <title>Custom Stickers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white-300 h-14 ">
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
                <Link href="/">Home</Link>
              </li>
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <Link className="text-orange-500" href="/customproducts">
                  Custom products
                </Link>
                {isDropdownOpen === 1 && (
                  <div className="h-40 w-64 absolute top-full left-0 mt-0">
                    <div className=" bg-white border w-full border-gray-200 p-2 shadow-lg mt-3">
                      <ul className="font-thin">
                        <li className="p-2 hover:text-orange-500">
                          <Link href="/customproducts/category1">
                            Category 1
                          </Link>
                        </li>
                        <li className="p-2 hover:text-orange-500">
                          <Link href="/customproducts/category2">
                            Category 2
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li className="hover:text-orange-500">
                <Link href="/collections">CustomAny Collections</Link>
              </li>
              <li className="hover:text-orange-500">
                {" "}
                <Link href="/blog">Blog</Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                {" "}
                <Link className="hover:text-orange-500" href="/support">
                  Support
                </Link>
                {isDropdownOpen === 2 && (
                  <div className="h-40 w-64 absolute top-full  mt-0">
                    <div className=" bg-white border w-full border-gray-200 p-2 shadow-lg mt-3">
                      <ul className="font-thin">
                        <li className="p-2 hover:text-orange-500">
                          <Link href="/customproducts/category1">tag 1</Link>
                        </li>
                        <li className="p-2 hover:text-orange-500">
                          <Link href="/customproducts/category2">tag 2</Link>
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
                      className="font-thin p-2 inline-block w-11/12 focus:border-0"
                    />
                    <FontAwesomeIcon
                      className="w-5 inline-block"
                      icon={faSearch}
                    />
                  </div>
                </div>
              )}
            </div>
            <div>
              <FontAwesomeIcon className="w-5" icon={faCartShopping} />
            </div>

            <div>
              <p>$0.00</p>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="w-full m-auto h-40 bg-orange-img text-white  inline-block text-center font-bold bg-center">
          <div className="p-5">
            <h1 className="text-4xl inline-block">Custom Stickers</h1>
            <div className="flex justify-center align-center mt-2 mb-5">
              <FontAwesomeIcon className="text-yellow-300 w-5" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-300 w-5" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-300 w-5" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-300 w-5" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-300 w-5" icon={faStar} />
              <Link className="my-auto ml-2 " href="/reviews">
                112411 reviews
              </Link>
            </div>
            <span> 👉 From only&nbsp;</span>
            <span className="bg-white border my-0 mx-2 border-black p-1 text-orange-500">
              $0.0366
            </span>
            <span>per sticker when ordering in bulk! 🔥</span>
          </div>
        </div>
      </main>
    </>
  );
}
