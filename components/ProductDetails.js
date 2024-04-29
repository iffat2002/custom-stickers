import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ProductDetails = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <div className="flex justify-between mt-10">
      <div className="w-7/12 relative ">
        <div className="relative">
          <img src={images[currentImageIndex]} alt="Main" className="w-full" />
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-white bg-opacity-50 text-black px-2 py-1 rounded-full"
            onClick={handlePrevClick}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-white bg-opacity-50 text-black px-2 py-1 rounded-full"
            onClick={handleNextClick}
          >
            &gt;
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => handleThumbnailClick(index)}
              className={`w-16 h-16 mx-2 rounded-lg cursor-pointer ${
                currentImageIndex === index ? "border-2 border-blue-500" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl inline-block font-bold">Die-cut stickers </h1>
        <div className="flex  mt-2 mb-2">
          <FontAwesomeIcon className="text-yellow-300 w-5" icon={faStar} />
          <FontAwesomeIcon className="text-yellow-300 w-5" icon={faStar} />
          <FontAwesomeIcon className="text-yellow-300 w-5" icon={faStar} />
          <FontAwesomeIcon className="text-yellow-300 w-5" icon={faStar} />
          <FontAwesomeIcon className="text-yellow-300 w-5" icon={faStar} />
          <Link className="my-auto ml-2 " href="/reviews">
            112411 reviews
          </Link>
        </div>
        <h1 className="text-2xl font-bold inline-block text-orange-500">
          $13.69
        </h1>
        <form className="border-4 border-gray-300 rounded-2xl p-10 py-4 bg-[#F9F9F9] mt-10 ">
          <h1 className="font-bold mb-3">
            Sizes<span className="text-red-500"> *</span>
          </h1>
          <ul className="cursor-pointer mb-4">
            <li className="hover:bg-gray-300 p-1 ">
              {" "}
              <input
                type="radio"
                value="1"
                name="sizes"
                defaultChecked
                className="mr-3 "
              />
              <label className="cursor-pointer" htmlFor="sizes">
                2" x 2"
              </label>
            </li>
            <li className="hover:bg-gray-300 p-1 ">
              <input type="radio" value="2" name="sizes" className="mr-3" />
              <label className="cursor-pointer" htmlFor="sizes">
                3" x 3"
              </label>
            </li>
            <li className="hover:bg-gray-300 p-1 ">
              <input type="radio" value="3" name="sizes" className="mr-3" />
              <label className="cursor-pointer" htmlF or="sizes">
                4" x 4"
              </label>
            </li>
            <li className="hover:bg-gray-300 p-1 ">
              <input type="radio" value="4" name="sizes" className="mr-3" />
              <label className="cursor-pointer" htmlFor="sizes">
                4" x 4"
              </label>
            </li>
            <li className="hover:bg-gray-300 p-1 ">
              <input type="radio" value="5" name="sizes" className="mr-3" />
              <label className="cursor-pointer" htmlFor="sizes">
                Custom
              </label>
            </li>
          </ul>
          <h1 className="font-bold mb-4">
            Quantity<span className="text-red-500"> *</span>
          </h1>
          <ul>
            <li className="m-auto flex items-center mb-2">
              <input
                type="radio"
                value="5"
                name="quantity"
                defaultChecked
                className="mr-2"
              />
              <label className="cursor-pointer w-[55px]" htmlFor="quantity">
                5
              </label>
              <span className="ml-16 m-auto w-[55px]">$13.69</span>
            </li>
            <li className="m-auto flex items-center mb-2">
              <input
                type="radio"
                value="10"
                name="quantity"
                className="mr-2 "
              />
              <label className="cursor-pointer w-[55px]" htmlFor="quantity">
                10
              </label>
              <span className="ml-16 w-[55px] m-auto">$15</span>
              <span className="ml-16 w-[64px] h-[29px] bg-tagimg text-white p-1 text-center font-semibold">
                -23.4%
              </span>
            </li>
            <li className="m-auto flex items-center mb-2">
              <input type="radio" value="50" name="quantity" className="mr-2" />
              <label className="cursor-pointer w-[55px]" htmlFor="quantity">
                50
              </label>
              <span className="ml-16 w-[55px] m-auto">$43.23</span>
              <span className="ml-16 w-[64px] h-[29px] bg-tagimg text-white p-1 text-center font-semibold">
                -68.34%
              </span>
            </li>
            <li className="m-auto flex items-center mb-2">
              <input type="radio" value="10" name="quantity" className="mr-2" />
              <label className="cursor-pointer w-[55px]" htmlFor="quantity">
                10
              </label>
              <span className="ml-16 w-[55px] m-auto">$15</span>
              <span className="ml-16 w-[64px] h-[29px] bg-tagimg text-white p-1 text-center font-semibold">
                -23.4%
              </span>
            </li>
            <li className="m-auto flex items-center mb-2">
              <input type="radio" value="10" name="quantity" className="mr-2" />
              <label className="cursor-pointer w-[55px]" htmlFor="quantity">
                10
              </label>
              <span className="ml-16 w-[55px] m-auto">$15</span>
              <span className="ml-16 w-[64px] h-[29px] bg-tagimg text-white p-1 text-center font-semibold">
                -23.4%
              </span>
            </li>
            <li className="m-auto flex items-center mb-2">
              <input type="radio" value="10" name="quantity" className="mr-2" />
              <label className="cursor-pointer w-[55px]" htmlFor="quantity">
                10
              </label>
              <span className="ml-16 w-[55px] m-auto">$15</span>
              <span className="ml-16 w-[64px] h-[29px] bg-tagimg text-white p-1 text-center font-semibold">
                -23.4%
              </span>
            </li>
            <li className="m-auto flex items-center mb-2">
              <input type="radio" value="10" name="quantity" className="mr-2" />
              <label className="cursor-pointer w-[55px]" htmlFor="quantity">
                10
              </label>
              <span className="ml-16 w-[55px] m-auto">$15</span>
              <span className="ml-16 w-[64px] h-[29px] bg-tagimg text-white p-1 text-center font-semibold">
                -23.4%
              </span>
            </li>
            <li className="m-auto flex items-center mb-2">
              <input type="radio" value="10" name="quantity" className="mr-2" />
              <label className="cursor-pointer w-[55px]" htmlFor="quantity">
                10
              </label>
              <span className="ml-16 w-[55px] m-auto">$15</span>
              <span className="ml-16 w-[64px] h-[29px] bg-tagimg text-white p-1 text-center font-semibold">
                -23.4%
              </span>
            </li>
            <li className="m-auto flex items-center mb-2">
              <input type="radio" value="10" name="quantity" className="mr-2" />
              <label className="cursor-pointer w-[55px]" htmlFor="quantity">
                10
              </label>
              <span className="ml-16 w-[55px] m-auto">$15</span>
              <span className="ml-16 w-[64px] h-[29px] bg-tagimg text-white p-1 text-center font-semibold">
                -23.4%
              </span>
            </li>
            <li className="m-auto flex items-center mb-2">
              <input type="radio" value="10" name="quantity" className="mr-2" />
              <label className="cursor-pointer w-[55px]" htmlFor="quantity">
                10
              </label>
              <span className="ml-16 w-[55px] m-auto">$15</span>
              <span className="ml-16 w-[64px] h-[29px] bg-tagimg text-white p-1 text-center font-semibold">
                -23.4%
              </span>
            </li>
            <li className="m-auto flex items-center mb-2">
              <input type="radio" value="10" name="quantity" className="mr-2" />
              <label className="cursor-pointer w-[55px]" htmlFor="quantity">
                10
              </label>
              <span className="ml-16 w-[55px] m-auto">$15</span>
              <span className="ml-16 w-[64px] h-[29px] bg-tagimg text-white p-1 text-center font-semibold">
                -23.4%
              </span>
            </li>
            <li className="m-auto flex items-center mb-2">
              <input type="radio" value="10" name="quantity" className="mr-2" />
              <label className="cursor-pointer w-[55px]" htmlFor="quantity">
                10
              </label>
              <span className="ml-16 w-[55px] m-auto">$15</span>
              <span className="ml-16 w-[64px] h-[29px] bg-tagimg text-white p-1 text-center font-semibold">
                -23.4%
              </span>
            </li>
            <li className="m-auto flex items-center mb-2">
              <input type="radio" value="10" name="quantity" className="mr-2" />
              <label className="cursor-pointer w-[55px]" htmlFor="quantity">
                Custom
              </label>
            </li>
          </ul>
          <h1 className="font-bold my-4 ">
            Upload Artwork (or email Artwork later)
          </h1>
          <div
            className="h-[200px] cursor-pointer w-[350px] border-4 flex items-center justify-center
           bg-white border-gray-300 border-dashed flex-col"
          >
            <div className="bg-no-repeat w-24 h-24  bg-uploadimg "> </div>
            <p>Drop files here to upload</p>
          </div>
          <div className="w-[350px] my-5 inline-block">
            <p className="w-[100%] h-full inline-block">
              ✅ Our designer will check your artwork, verify the quality and
              send proof back to you before printing.
            </p>
            <p className="text-sm mt-5">Max file size: 50 MB</p>
            <p className="text-sm mb-6">
              Permitted file types: jpg jpeg jpe png gif pdf eps ai psd
            </p>
          </div>
        </form>
        <button className="bg-orange-500 mt-3 text-white w-full font-semibold hover:bg-orange-600 rounded-md h-14 p-4">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
