import React, { useState } from "react";
const sidenavigation = () => {
  const [activeItem, setActiveItem] = useState("item1");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="w-screen h-screen  content-center flex flex-wrap justify-center flex-row m-auto bg-gray-100 ">
      <div className="w-[80%] h-[87%] bg-white flex shadow-xl shadow-gray-500/50 mt-[33px]  ">
        {/* Content */}
        <div className="relative ml-auto w-[70%]">
          {activeItem === "item1" && (
            <div className="p-12 pl-3 ">
              <h1 className="text-xl font-bold">AI Development</h1>
              <p className="text-gray-500 mt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                eius nobis tempore iusto laboriosam aperiam, nam fugiat
                accusantium autem quae debitis fuga quasi odio placeat accusamus
                ut? Quisquam, ex quod. Lorem ipsum dolit.
              </p>
              <h2 className="font-bold mt-5 text-gray-500">
                Business Benifits of Choosing Us
              </h2>
              <ul className="list-[square] marker:text-3xl p-7 pt-3">
                <li>
                  {" "}
                  <span className="marker-square"></span>
                  <p className="text-medium font-bold text-gray-500">
                    {" "}
                    Cutting-Edge Expertise:{" "}
                    <span className="font-thin text-gray-500 text-base">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Inventore laudantium ut id amet iste quibusdam autem
                      fugiat.
                    </span>
                  </p>
                </li>
                <li>
                  {" "}
                  <span className="marker-square"></span>
                  <p className="text-medium font-bold text-gray-500">
                    {" "}
                    Seamless Integration{" "}
                    <span className="font-thin text-gray-500 text-base">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Inventore laudantium ut id amet iste quibusdam autem
                      fugiat.
                    </span>
                  </p>
                </li>
                <li>
                  {" "}
                  <span className="marker-square"></span>
                  <p className="text-medium font-bold text-gray-500">
                    {" "}
                    Comprehensive AI Development service{" "}
                    <span className="font-thin text-gray-500 text-base">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Inventore laudantium ut id amet iste quibusdam autem
                      fugiat.
                    </span>
                  </p>
                </li>
                <li>
                  {" "}
                  <span className="marker-square"></span>
                  <p className="text-medium font-bold text-gray-500">
                    {" "}
                    Empowering Organizational Capabilities:{" "}
                    <span className="font-thin text-gray-500 text-base">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Inventore laudantium ut id amet iste quibusdam autem
                      fugiat.
                    </span>
                  </p>
                </li>
              </ul>
              <div className="flex justify-end">
                <button className=" rounded-sm  border-0 text-sm bg-gradient-to-r from-purple-500 via-purple-400 to-purple-400 p-3  text-white">
                  Read More
                </button>
              </div>
            </div>
          )}
          {activeItem === "item2" && (
            <div>
              <h1 className="text-2xl font-bold">Item 2 Content</h1>
              <p>This is the content for Item 2.</p>
            </div>
          )}
          {activeItem === "item3" && (
            <div>
              <h1 className="text-2xl font-bold">Item 3 Content</h1>
              <p>This is the content for Item 3.</p>
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#000036] w-80 h-[88%] text-white shadow-2xl absolute top-[4%] left-[7%] p-[32px]">
        <ul className="w-80 relative text-white font-semibold text-sm ">
          <li
            className={` h-11 p-3 w-80  cursor-pointer ${
              activeItem === "item1"
                ? "bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 "
                : ""
            }`}
            onClick={() => handleItemClick("item1")}
          >
            AI Development
          </li>
          <li
            className={` h-11 p-3 w-80  cursor-pointer ${
              activeItem === "item2"
                ? "bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 "
                : ""
            }`}
            onClick={() => handleItemClick("item2")}
          >
            AI Chatbot Development
          </li>
          <li
            className={` h-11 p-3 w-80  cursor-pointer ${
              activeItem === "item3"
                ? "bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 "
                : ""
            }`}
            onClick={() => handleItemClick("item3")}
          >
            ChatGPT Integration
          </li>
          <li
            className={` h-11 p-3 w-80  cursor-pointer ${
              activeItem === "item4"
                ? "bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 "
                : ""
            }`}
            onClick={() => handleItemClick("item4")}
          >
            Machine & Deep Learning
          </li>
          <li
            className={` h-11 p-3 w-80  cursor-pointer ${
              activeItem === "item5"
                ? "bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 "
                : ""
            }`}
            onClick={() => handleItemClick("item5")}
          >
            Computer Vision
          </li>
          <li
            className={` h-11 p-3 w-80  cursor-pointer ${
              activeItem === "item6"
                ? "bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 "
                : ""
            }`}
            onClick={() => handleItemClick("item6")}
          >
            Big Data Analytics
          </li>
          <li
            className={` h-11 p-3 w-80  cursor-pointer ${
              activeItem === "item7"
                ? "bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 "
                : ""
            }`}
            onClick={() => handleItemClick("item7")}
          >
            Predictive Modeling
          </li>
          <li
            className={` h-11 p-3 w-80  cursor-pointer ${
              activeItem === "item8"
                ? "bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 "
                : ""
            }`}
            onClick={() => handleItemClick("item8")}
          >
            Custom Software Development
          </li>
          <li
            className={` h-11 p-3 w-80  cursor-pointer ${
              activeItem === "item9"
                ? "bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 "
                : ""
            }`}
            onClick={() => handleItemClick("item9")}
          >
            Digital Marketing
          </li>
          <li
            className={` h-11 p-3 w-80  cursor-pointer ${
              activeItem === "item10"
                ? "bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 "
                : ""
            }`}
            onClick={() => handleItemClick("item10")}
          >
            Natural Language Processing
          </li>
          <li
            className={` h-11 p-3 w-80  cursor-pointer ${
              activeItem === "item11"
                ? "bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 "
                : ""
            }`}
            onClick={() => handleItemClick("item11")}
          >
            DevOps
          </li>
          <li
            className={` h-11 p-3 w-80  cursor-pointer ${
              activeItem === "item12"
                ? "bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 "
                : ""
            }`}
            onClick={() => handleItemClick("item12")}
          >
            UI/UX
          </li>
        </ul>
      </div>
    </div>
  );
};

export default sidenavigation;
