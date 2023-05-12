import React from 'react'
import styles from "../common/mainBanner.module.css";
import {AiFillChrome } from "react-icons/ai";
const FeaturesBanner = () => {
  return (
    <div className='lg:h-[100vh] bg-gradient-to-r from-[#5DA1EA] to-[#2D5076]'>
    <div className="h-[100%] flex flex-col md:flex-row justify-center items-center">
    <div className="w-full md:w-1/2 py-6 px-6">
        <img src="assets/security.png" alt="" />
      </div>
      <div className="w-full text-white md:w-1/2 py-6 px-6 md:px-16 text-center md:text-left">
    <h1>Add Block At one Click</h1>
    <h1 className='text-[3.5rem] font-bold mb-4 text-white leading-[4rem]'>One Extension<br/> For All Unsecure Websites</h1>
    <h1>One Extention,Unlimited potential</h1>
    <p className='text-[10px] pt-2'>Network security is the practice of protecting computer networks from unauthorized access, attacks, and data breaches. It involves implementing various measures such as firewalls, encryption, intrusion detection systems, and access controls to ensure the confidentiality, integrity, and availability of network resources. Effective network security is essential for businesses, organizations, and individuals to prevent data theft, unauthorized access, and other cyber threats that can cause significant financial, reputational, and legal damages.</p>
    <a href="/home" className="border-2 flex justify-center items-center gap-3 lg:w-[50%] mt-12 md:mt-4 text-white rounded-tr-lg rounded-bl-lg px-8 py-1 bg-transparent font-bold">
          <AiFillChrome size={30} />
          Add to Chrome
        </a>  
      </div>
     
    </div>
  </div>
  )
}

export default FeaturesBanner