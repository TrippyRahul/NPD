import React from "react";
import styles from "../common/mainBanner.module.css";
import { AiFillChrome } from "react-icons/ai";
const FeaturesBanner = () => {
  return (
    <div className="lg:h-[100vh] bg-gradient-to-r from-[#5DA1EA] to-[#2D5076]">
      <div className="h-[100%] flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 py-6 px-6 flex justify-center">
          <img src="assets/banner2.png" alt="" className="rounded-xl shadow" />
        </div>
        <div className="w-full text-white md:w-1/2 py-6 px-6 md:px-16 text-center md:text-left">
          <h1>Add Block At one Click</h1>
          <h1 class="text-[2.5rem] font-bold mb-4 text-white leading-[3rem] md:text-[3.5rem] md:leading-[4rem]">
            With one single click, block all unnecessary websites
          </h1>

          <h1>Be effective at work</h1>
          <p className="text-sm pt-2">
            Learn how Network Privacy Defender has aided professionals all over
            the world to boost their attention and productivity at work.
          </p>
          <a
        target="_blank"
        href="https://chrome.google.com/webstore/detail/network-privacy-defence/jcfohjogleiklndicglfeeccckkdgbdn?hl=en-US"
            className="mt-12 flex justify-center items-center gap-3 lg:w-[50%] md:text-white rounded-tr-lg rounded-bl-lg px-10 py-2 bg-[#5CA0E9] font-bold"
          >
            <AiFillChrome size={30} />
            Add to Chrome
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;
