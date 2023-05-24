import styles from "../common/mainBanner.module.css";
import { AiFillChrome } from "react-icons/ai";
import { useState } from "react";

const Faq = () => {
  const questions = [
    {
      title: "How can I ban websites?",
      list: [
        "Click the NPD toolbar icon",
        "go to blocker setting",
        "Add websites to block on the bar and then enter",
      ],
    },

    {
      title: "What information does NPD gather?",
      answer:
        "We obtain non-identifiable data from your use of Network Privacy Defender as part of the data we collect. The identity of the user from whom the information was gathered is unknown to us and is not possible to ascertain. Please be aware that we do not provide this information to any third parties for marketing or user targeting. Please refer to our privacy statement for more details ",
    },
    {
      title: "How does NPD use my information?",
      answer:
        "We need access to information about the websites you visit in order for the adult site blocking feature to automatically identify and ban adult websites. Please be aware that we do not provide this information to any third parties for marketing or user targeting",
    },
    {
      title: "Why should I create my account on NPD?",
      answer:
        "You may sync your Network Privacy Defender account across many platforms and devices by creating an account and signing into BlockSite",
    },
    {
      title: "Why do I need NPD?",
      answer:
        " BlockSite is what you need to increase your time management and productivity by blocking access to distracting websites and apps. The capabilities of BlockSites are helpful for helping you concentrate and prioritize the vital work you need to perform.BlockSite can also encourage you to live in the moment and pay attention to the people and surroundings. When you are spending quality time with friends and family, you can use it as a tool to restrict your access to certain apps and websites To help you reach your personal and professional objectives, BlockSite is the ideal time management and productivity solution",
    },
  ];
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleClick = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };
  return (
    <div className="lg:h-[100vh] bg-gradient-to-r from-[#5DA1EA] to-[#2D5076]">
      <div className="h-[100%] flex flex-col md:flex-row justify-center items-center sm:flex flex-col-reverse">
        <div className="w-full text-[#1C344E] md:w-1/2 py-6 px-6 md:px-16 text-center md:text-left">
          <h1 className="text-white">Add Block At one Click</h1>
          <h1 className="text-white text-[2.5rem] font-bold mb-4 leading-[3rem] md:text-[3.5rem] md:leading-[4rem]">
            Control your day at work
          </h1>

          <p className="text-sm pt-2 text-white">
            Effective time management is one of the most useful abilities you
            can have. You won't be able to accomplish your business or personal
            goals if you're not managing your time effectively. Your time
            management schedule will never look better thanks to the many tools
            offered on Network Privacy Defender.
          </p>
          <p className="text-sm pt-2 text-white">
            Using the greatest time-management strategies, you'll be able to
            complete what you need to do while still having time to use your
            favorite websites and apps.
          </p>
          <a
       target="_blank"
       href="https://chrome.google.com/webstore/detail/network-privacy-defence/jcfohjogleiklndicglfeeccckkdgbdn?hl=en-US"
            className="mt-8 border-2 flex justify-center items-center gap-3 lg:w-[50%] lg:mt-12 md:mt-4 text-white rounded-tr-lg rounded-bl-lg px-10 py-2 bg-transparent font-bold"
          >
            <AiFillChrome size={30} />
            Add to Chrome
          </a>
        </div>
        <div className="w-full md:w-1/2 py-6 px-6">
          <div className="max-w-lg mx-auto">
            {questions.map((question, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleClick(index)}
                >
                  <h3 className="text-lg font-medium text-white">
                    {question.title}
                  </h3>
                  <svg
                    className={`${
                      activeQuestion === index ? "rotate-180" : ""
                    } w-5 h-5 text-gray-400`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {activeQuestion === index && (
                  <p className="mt-2 text-white">{question.answer}</p>
                )}
                {question.list && (
                  <div>
                    {question.list.map((listitem) => (
                      <div>
                        {activeQuestion === index && (
                          <li className="mt-2 text-white">{listitem}</li>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
