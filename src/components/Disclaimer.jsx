import React from "react";

const Disclaimer = () => {
  const data = [
    {
      title: "",
      desc: "  Want to block unwanted sites from your browser? Network Privacy Defender blocks certain websites that can distract you during a specified amount of time. We will restrict access to a certain set of websites during business hours so that the user can only view such websites when they are free.",
    },
    
  ];
  return (
    <div className="bg-gradient-to-r from-[#5DA1EA] to-[#2D5076] text-white lg:h-auto pb-16">
      <div className="py-4">
        <h1 className="text-[54px] font-bold text-center">
        Disclaimer
        </h1>
      </div>
      {data.map((about) => {
        return (
          <>
            <div class="w-full px-4 lg:w-[50%] lg:mx-[5.5rem] lg:px-0 py-6">
              <h1 className="text-4xl font-bold">{about.title}</h1>
            </div>
            <p class="w-full px-4 lg:w-[90%] lg:mx-[4.5rem] py-1">{about.desc}</p>
          </>
        );
      })}
    </div>
  );
};

export default Disclaimer;
