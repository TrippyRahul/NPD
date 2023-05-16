import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { GiOnTarget } from "react-icons/gi";
import { GrSchedules } from "react-icons/gr";
import { FaBan } from "react-icons/fa";
import { CgInsights } from "react-icons/cg";
import { BiCodeBlock } from "react-icons/bi";
import { MdOutlineRemoveModerator } from "react-icons/md";

const Cards = () => {
  const cardsData = [
    {
      icons: <GiOnTarget size={100} />,
      title: "Target Mode",
      description: "Avoid any interruptions for a specific amount of time",
    },
    {
      icons: <GrSchedules size={100} />,
      title: "Schedule",
      description: "During the chosen hours, turn off all of your distractions",
    },
    {
      icons: <FaBan size={100} />,
      title: " Ban list",
      description: "You can restrict as many websites and apps as you want",
    },
    {
      icons: <CgInsights size={100} />,
      title: "Insights",
      description: "See how much time you spend online and on which website",
    },
    {
      icons: <BiCodeBlock size={100} />,
      title: "Category-Based Block",
      description: "Block everything on a category base with one single click",
    },
    {
      icons: <MdOutlineRemoveModerator size={100} />,
      title: "Remove Prevention",
      description:
        "Nobody can delete the program from your devices without your knowledge or permission",
    },
  ];

  return (
    <div className="lg:h-auto flex-col flex justify-center items-center">
      <div className="pt-2">
        <MdOutlineSecurity size={30} color="#69A0DC" />
      </div>
      <p className="text-[#69A0DC] font-bold pt-2">Full Security</p>
      <h2 className="text-[#1C344E] lg:text-2xl pt-2 ">
        One App for All Security
      </h2>
      <p className="lg:w-[50%] text-center text-[12px] pt-2">
        Network security is the process of safeguarding computer networks from
        unauthorized access and malicious attacks to ensure the confidentiality,
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:mx-[8rem] pt-4 ">
        {cardsData.map((card) => (
          <div
            class="bg-white rounded-lg shadow-md p-6 text-center lg:mx-4 mb-6 w-full md:w-auto md:px-4"
            key={card.title}
          >
            <h2 class="text-xl font-bold mb-4 flex justify-center">
              {card.icons}
            </h2>
            <p class="mt-4 text-[#1C344E] font-bold">{card.title}</p>
            <p class="text-gray-700 text-[12px] ">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
