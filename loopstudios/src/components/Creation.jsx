import React, { useEffect, useState } from "react";
import { interactive } from "../assets/images";
import { creationLarge, creationSmall } from "../constant";

const Creation = () => {
  const [image, setImage] = useState(
    window.innerWidth < 760 ? creationSmall : creationLarge
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setImage(creationSmall);
    } else {
      setImage(creationLarge);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("reisze", handleVideoSrcSet);
    };
  }, []);
  return (
    <>
      <div className="w-full my-20 relative max-sm:flex max-sm:flex-col max-sm:text-center">
        <img src={interactive} alt="img" width={580} height={580} />
        <div className="lg:w-[60%] w-full  lg:absolute top-28 left-[29rem] p-5 lg:p-11 bg-white">
          <h2 className="lg:text-5xl  max-sm:ml-0 text-3xl lg:ml-10 mb-8 leading-tight opacity-60 text-black font-josefinSans max-sm:text-xl">
            THE LEADER IN INTERACTIVE VR
          </h2>

          <p className="text-DarkGray font-alata text-md lg:ml-10 max-sm:ml-0">
            VR Founded in 2011, Loopstudios has been producing world-class
            virtual reality projects for some of the best companies around the
            globe. Our award-winning creations have transformed businesses
            through digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      <div className="w-full lg:my-36">
        <div className="flex justify-between w-full lg:my-20 max-sm:text-center">
          <h3 className="lg:text-5xl text-2xl max-sm:m-auto  font-thin">
            OUR CREATIONS
          </h3>
          <button className=" max-sm:hidden px-6  py-1 font-alata cursor-pointer text-center tracking-[5px] text-black border-2  border-VeryDarkGray hover:text-white hover:bg-black">
            SEE ALL
          </button>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 my-10 m-auto ">
          {image.map((item) => (
            <li
              key={item.id}
              className=" list-none relative h-full w-full z-10 cursor-pointer"
            >
              <span className="absolute bg-DarkGray top-0 left-0 right-0 bottom-0 z-10 opacity-0 hover:opacity-70"></span>
              <img src={item.imgURL} alt="img" className="object-contain w-full" />
              <p className=" absolute  lg:top-[80%] top-[60%] max-sm:top-[30%] max-sm:left-4  max-sm:w-[10%] left-8 text-white z-10 max-sm:leading-[20px] text-md  lg:text-3xl w-[50%] font-thin">
                {item.text}
              </p>
            </li>
          ))}
        </div>
        <div className="w-full m-auto lg:hidden text-center my-10">
          <button className="px-6  py-1  font-alata cursor-pointer text-center tracking-[5px] text-black border-2  border-VeryDarkGray hover:text-white hover:bg-black">
            SEE ALL
          </button>
        </div>
      </div>
    </>
  );
};

export default Creation;
