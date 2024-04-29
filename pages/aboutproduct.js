import ProductDetails from "@/components/ProductDetails";
import React from "react";
import { useState } from "react";

const aboutproduct = () => {
  const images = [
    "/image1.webp",
    "/image2.webp",
    "/image3.webp",
    "/image4.webp",
  ];

  return (
    <div className=" ">
      <div className="w-11/12 m-auto">
        <ProductDetails images={images} />
      </div>
    </div>
  );
};

export default aboutproduct;
