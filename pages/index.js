import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Custom Stickers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <div className="w-full m-auto h-40 bg-orange-img text-white  inline-block text-center font-bold bg-center">
            <div className="p-5">
              <h1 className="text-4xl inline-block">Custom Stickers</h1>
              <div className="flex justify-center align-center mt-2 mb-5">
                <FontAwesomeIcon
                  className="text-yellow-300 w-5"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="text-yellow-300 w-5"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="text-yellow-300 w-5"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="text-yellow-300 w-5"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="text-yellow-300 w-5"
                  icon={faStar}
                />
                <Link className="my-auto ml-2 " href="/reviews">
                  112411 reviews
                </Link>
              </div>
              <span className="text-xl font-light"> 👉 From only&nbsp;</span>
              <span className="bg-white border my-0 text-xl font-bold p-1 mx-2 border-black  text-orange-500">
                $0.0366
              </span>
              <span className="text-xl font-light">
                per sticker when ordering in bulk! 🔥
              </span>
            </div>
          </div>
          <div className="w-10/11 m-auto">
            <div className="flex flex-wrap justify-center">
              <div className=" text-center ">
                <Link href="/">
                  <Image
                    className="min-w-52"
                    src="/img1.png"
                    alt="products"
                    width={320}
                    height={300}
                  ></Image>
                  <span className="font-bold text-gray-600">
                    Die-cut Sticker
                  </span>
                </Link>
              </div>
              <div className=" text-center ">
                <Link href="/">
                  <Image
                    className="min-w-52"
                    src="/img2.png"
                    alt="products"
                    width={320}
                    height={300}
                  ></Image>
                  <span className="font-bold text-gray-600">
                    Kiss-Cut Stickers
                  </span>
                </Link>
              </div>
              <div className=" text-center ">
                <Link href="/">
                  <Image
                    className="min-w-52 mt-2"
                    src="/img3.png"
                    alt="products"
                    width={320}
                    height={300}
                  ></Image>
                  <span className="font-bold text-gray-600">
                    Circle Stickers
                  </span>
                </Link>
              </div>
              <div className=" text-center mt-2">
                <Link href="/">
                  <Image
                    className="min-w-52"
                    src="/img4.png"
                    alt="products"
                    width={320}
                    height={300}
                  ></Image>
                  <span className="font-bold text-gray-600">
                    Square Stickers
                  </span>
                </Link>
              </div>
              <div className=" text-center mt-2 ">
                <Link href="/">
                  <Image
                    className="min-w-52"
                    src="/img5.png"
                    alt="products"
                    width={320}
                    height={300}
                  ></Image>
                  <span className="font-bold text-gray-600">
                    Rectangle Stickers
                  </span>
                </Link>
              </div>
              <div className=" text-center mt-2">
                <Link href="/">
                  <Image
                    className="min-w-52"
                    src="/img6.png"
                    alt="products"
                    width={320}
                    height={300}
                  ></Image>
                  <span className="font-bold text-gray-600">Oval Stickers</span>
                </Link>
              </div>
              <div className=" text-center mt-2">
                <Link href="/">
                  <Image
                    className="min-w-52"
                    src="/img7.png"
                    alt="products"
                    width={320}
                    height={300}
                  ></Image>
                  <span className="font-bold text-gray-600">
                    Rounded Corner Stickers
                  </span>
                </Link>
              </div>
              <div className=" text-center mt-2">
                <Link href="/">
                  <Image
                    className="min-w-52"
                    src="/img8.png"
                    alt="products"
                    width={320}
                    height={300}
                  ></Image>
                  <span className="font-bold text-gray-600">
                    Sticker Sheets
                  </span>
                </Link>
              </div>
              <div className=" text-center mt-2">
                <Link href="/">
                  <Image
                    className="min-w-52"
                    src="/img9.png"
                    alt="products"
                    width={320}
                    height={300}
                  ></Image>
                  <span className="font-bold text-gray-600">
                    Bumper Stickers (Car Stickers)
                  </span>
                </Link>
              </div>
              <div className=" text-center mt-2">
                <Link href="/">
                  <Image
                    className="min-w-52"
                    src="/img10.png"
                    alt="products"
                    width={320}
                    height={300}
                  ></Image>
                  <span className="font-bold text-gray-600">
                    Clear Stickers
                  </span>
                </Link>
              </div>
              <div className=" text-center mt-2 ">
                <Link href="/">
                  <Image
                    className="min-w-52"
                    src="/img11.png"
                    alt="products"
                    width={320}
                    height={300}
                  ></Image>
                  <span className="font-bold text-gray-600">
                    Transfer Stickers
                  </span>
                </Link>
              </div>
              <div className=" text-center mt-2 ">
                <Link href="/">
                  <Image
                    className="min-w-52"
                    src="/img12.png"
                    alt="products"
                    width={320}
                    height={300}
                  ></Image>
                  <span className="font-bold text-gray-600">
                    Holographic Stickers
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="h-60 bg-orange-100 mt-11">
            <div className=" w-10/12 m-auto text-center p-10">
              <h1 className="text-orange-500 inline-block text-2xl font-bold">
                Subscribe to our newsletter
              </h1>
              <p className="text-lg">
                Get the latest updates on new products and amazing offers!
              </p>
              <div className="flex flex-row justify-center mt-4 w-full">
                <input
                  type="text"
                  placeholder="Email"
                  className="p-3 w-6/12 min-w-11 border border-orange-500 text-lg focus:outline-none focus:shadow-xl"
                />

                <button className="text-white bg-orange-500 border-0 font-bold h-auto p-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
