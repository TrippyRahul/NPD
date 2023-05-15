import React from "react";

const Privacy = () => {
  const data = [
    {
      desc: "  The purpose of this privacy statement is to provide you with critical information about how and why we gather, disclose, and use your information. We value the privacy of our users. Before using our Network Privacy Defender, we strongly advise you to thoroughly read the Privacy Policy and use it to guide your selections",
    },
    {
      desc: "  You confirm that you have read and comprehended the terms of this Privacy Policy by using the Network Privacy Defender. The processing of personal data is required in order to offer you the Service (as described below), which is a component of our Terms of Use The definitions used here shall be interpreted in accordance with our Terms of Use",
    },
    {
      title: " What Types of Data Do We Gather?",
      desc: " Non-identifiable information, which may be made available or gathered through a user's use of the Network Privacy Defender (referred to as Non-Personal Information, and individually identifiable information, or information that identifies an individual or that, with reasonable effort, may be used to identify an individual (referred to as Personal Information are both included in the data we gather when you use the Network Privacy Defender(referred to as Product Data",
      list: [
        "Technical information like the type of browser, operating system, timestamp, and specific surfing statistics are among the non-personal information we gather. We ensure that browsing data, such as visited URLs, is cleaned and scrubbed on your device prior to being sent to our servers in order to remove and filter any information that could be used to identify you. This is done in order to actively avoid processing any Personal Information and to only transfer Non-Personal Information to our servers",
        "The Personal Information that we gather or store consists of (i) online identifiers like IP addresses, which are hashed (irreversibly encrypted) on a daily basis and are not and cannot be traced back to an individual or used in any way to identify an individual; (ii) unique IDs, which are random numbers that we generate to keep track of the quantity of data sets we gather. Although the unique ID does not expose a user's identity and was not created using any of the user's personal information, it can be regarded as personal information in some areas",
      ],
    },
    {
      desc: " If you contact us for support, you must also give us your contact information so we can get in touch with you and offer the necessary support. Although it is also personal information, we will handle this differently in our systems from the Product Data.",
    },
    {
      title: "What is Done With the Product Data?",
      desc: "To enable you to utilize and gain from the capabilities provided by the Network Privacy Defender, we use the Product Data. To provide a secure and enjoyable browsing experience, the Network Privacy Defender(the Service) assists in blocking access to specific websites based on your preferences. We need to process the Product Data as previously said in order to determine which websites to block for you. Your browsing history is also included",
    },
    {
      title: "How are product data shares done?",
      desc: "Except where (i) required by law or regulation, (ii) necessary to deliver the Service, for security and fraud detection, or (iii) in the event of a merger or acquisition, we do not disclose any Personal Information to third parties.We share Product Data with our connected businesses and third-party service providers who assist us in delivering parts of the Service for the express purpose of delivering and improving the Services.By taking the actions outlined in the section Stopping the collection of Product Data below, you can prevent us from collecting certain Product Data",
    },
    {
      title: "How do we protect your personal information?",
      desc: "We take great care in setting up and maintaining the security of your information, so we have taken administrative, physical, and technical security measures to protect it. We also restrict internal access to your data and the amount of data that is processed and shared. As an example, to reduce the amount of Personal Information we save on you, we hash your IP address and create a random integer as your unique ID",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#5DA1EA] to-[#2D5076] text-white lg:h-auto pb-16">
      <div className="py-4">
        <h1 className="text-[54px] font-bold text-center">
          Privacy And Policy
        </h1>
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
            {about.list && (
              <div>
                {about.list.map((listiems) => (
                  <li class="w-full px-4 lg:w-[90%] lg:mx-[4.5rem] py-1">
                    {listiems}
                  </li>
                ))}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Privacy;
