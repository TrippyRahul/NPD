import React from "react";
import styles from "../common/mainBanner.module.css";
import Header from "./Header";
import { AiFillChrome } from "react-icons/ai";
const MainBanner = () => {
  return (
    <div className="lg:h-[100vh] bg-gradient-to-r from-[#5DA1EA] to-[#2D5076]">
      <Header />
      <div className="lg:h-[80%] flex flex-col md:flex-row justify-center items-center sm:flex flex-col-reverse">
        <div className="w-full md:w-1/2 py-6 px-6 lg:leading-10 md:px-16 text-center md:text-left">
          {/* <h6 className="font-bold mb-4 text-white">This is Future Now</h6> */}
          <h1 className="text-[3.5rem] font-bold mb-4 text-white leading-[4rem]">
            Be more focused and avoid distractions
          </h1>
          <p className="text-white text-xs">
          Utilize Network Privacy Defender to get rid of distracting apps and websites and maintain attention

          </p>
          <a
            href="/home"
            className="mt-8 border-2 flex justify-center items-center gap-3 lg:w-[50%] lg:mt-12 md:mt-4 text-white rounded-tr-lg rounded-bl-lg px-8 py-1 bg-transparent font-bold"
          >
            <AiFillChrome size={30} />
            Add to Chrome
          </a>
        </div>
        <div className="w-full md:w-1/2 py-6 px-6 flex justify-center">
          <img src="assets/banner.png" alt="" className="rounded-xl shadow" />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
