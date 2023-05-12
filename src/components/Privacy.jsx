import React from "react";

const Privacy = () => {
  const data = [
    {
      title: "  We are building a second brain for you",
      desc: "  We are the top ranked productivity app that helps around 20 million people to organise their day to day activities. We provide the bestonline notepad where you can put all your ideas. By sticky notes manage your day to day tasks. We are the best task manager shortcut around the world. So, be focused and organise your tasks with a to do list task manager",
    },
    {
      title: "  We are building a second brain for you",
      desc: "  We are the top ranked productivity app that helps around 20 million people to organise their day to day activities. We provide the bestonline notepad where you can put all your ideas. By sticky notes manage your day to day tasks. We are the best task manager shortcut around the world. So, be focused and organise your tasks with a to do list task manager",
    },
    {
      title: "  We are building a second brain for you",
      desc: "  We are the top ranked productivity app that helps around 20 million people to organise their day to day activities. We provide the bestonline notepad where you can put all your ideas. By sticky notes manage your day to day tasks. We are the best task manager shortcut around the world. So, be focused and organise your tasks with a to do list task manager",
    },
  ];
  return (
    <div className="text-[#1C344E] lg:h-[100vh]">
      <div className="py-4">
        <h1 className="text-[54px] font-bold text-center">
          Privacy And Policy
        </h1>
      </div>
      {data.map((about) => {
        return (
          <>
            <div className="lg:w-[50%] mx-[6rem] py-6">
              <h1 className="text-4xl font-bold">{about.title}</h1>
            </div>
            <p className="lg:w-[90%] mx-[4.5rem] py-1 ">{about.desc}</p>
          </>
        );
      })}
    </div>
  );
};

export default Privacy;