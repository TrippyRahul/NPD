import React from "react";

const Aboutus = () => {
  const data = [
    {
      title: "",
      desc: "Whether you are at work, studying at school, college, and institution, or just looking for a way to gets more done during the day. Network Privacy Defender provides the best tools to help you increase your productivity and obtain the results you desire fast and effectively.  ",
    },
  ];
  return (
    <div className=" bg-gradient-to-r from-[#5DA1EA] to-[#2D5076] text-white lg:h-auto pb-16 ">
      <div className="py-4">
        <h1 className="text-[54px] font-bold text-center">Aboutus</h1>
      </div>
      {data.map((about) => {
        return (
          <>
            <div class="w-full px-4 lg:w-[50%] lg:mx-[5.5rem] lg:px-0 py-6">
              <h1 className="text-4xl font-bold">{about.title}</h1>
            </div>
            <p class="w-full px-4 lg:w-[90%] lg:mx-[4.5rem] py-1">
              {about.desc}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default Aboutus;
