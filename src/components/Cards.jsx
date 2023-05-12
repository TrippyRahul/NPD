import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
const Cards = () => {
  const cardsData = [
    {
      icons: <MdOutlineSecurity size={100} />,
      description: "This is the description for card 1.",
      link: "/card1",
      linkText: "Learn More",
    },
    {
      icons: <MdOutlineSecurity size={100} />,
      description: "This is the description for card 2.",
      link: "/card2",
      linkText: "Learn More",
    },
    {
      icons: <MdOutlineSecurity size={100} />,
      description: "This is the description for card 3.",
      link: "/card3",
      linkText: "Learn More",
    },
    {
      icons: <MdOutlineSecurity size={100} />,
      description: "This is the description for card 3.",
      link: "/card3",
      linkText: "Learn More",
    },
    {
      icons: <MdOutlineSecurity size={100} />,
      description: "This is the description for card 3.",
      link: "/card3",
      linkText: "Learn More",
    },
    {
      icons: <MdOutlineSecurity size={100} />,
      description: "This is the description for card 3.",
      link: "/card3",
      linkText: "Learn More",
    },
  ];

  return (
    <div className="lg:h-auto flex-col flex justify-center items-center">
      <div className="pt-2">
        <MdOutlineSecurity size={30} color="#69A0DC"/>
      </div>
      <p className="text-[#69A0DC] font-bold pt-2">Full Security</p>
      <h2 className="text-[#1C344E] lg:text-2xl pt-2 ">One App for All Security</h2>
      <p className="lg:w-[50%] text-center text-[12px] pt-2">
        Network security is the process of safeguarding computer networks from
        unauthorized access and malicious attacks to ensure the confidentiality,

    
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mx-[2rem] pt-4">
        {cardsData.map((card) => (
          <div
            class="bg-white rounded-lg shadow-md p-6 text-center mx-4 mb-6 w-full md:w-auto md:px-4"
            key={card.title}
          >
            <h2 class="text-xl font-bold mb-4 flex justify-center">
              {card.icons}
            </h2>
            <p class="text-blue-500 hover:underline mt-4 text-[#1C344E]">{card.linkText}</p>
            <p class="text-gray-700 text-[12px] ">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
