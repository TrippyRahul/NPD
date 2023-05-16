import React from "react";

const TermsAndCondition = () => {
  const data = [
    {
      desc: "You hereby consent to be bound by this Agreement and the Privacy Policies, which are incorporated herein by reference (collectively, the Agreement), when accessing or using the Product. Please do not access or use the Product or Service (as defined below) if you do not agree to abide by this Agreement.his Agreement is subject to revision or updating at any moment, at our discretion. Any significant modification will take effect five (5) days after it has been posted on the relevant website or communicated via the product. The Last modified heading will show the date of the most recent revision. Following that, if you continue to use the Product, it is assumed that you have agreed to the modifications and are willing to abide by them. Please remember to frequently examine our EULA and the Privacy Policy",
    },
    {
      title: " Services Offered",
      desc: " By letting you block undesirable content and websites as you see fit (the Service), Network Privacy Defender enables you to create a unique browsing experience",
    },
    {
      title: " User and License Restrictions",
      desc: "We hereby give you a personal, revocable, non-exclusive, non-assignable, non-transferable license License) to download, install, and use the Product and Service on a personal device that you own or control, subject to the terms and conditions of this Agreement. To the fullest extent permitted by relevant laws, We reserve all rights, titles, and interests not expressly granted herein under this License. The License granted to you under the Agreement may not be sublicensed, assigned, or transferred, and any effort to do so may result in the loss of all of your rights under the Agreement You may not use any automated methods to access the Service or Product, such as scraping, crawling, data mining, or sending requests to the Service or Product using a robot, spider, or other automatic device.  You consent to not interrupt, disable, overload, damage, change, interfere, or otherwise interfere with the Service or the Product in any way that might impair or degrade its performance. You acknowledge that your actions may restrict or obstruct others' usage of the Service or the Product. Additionally, you agree not to change or tamper with any data or materials found on or connected to the Service or the Product",
    },
    {

      desc: "You acknowledge and agree that neither you nor any third party acting on your behalf shall take any of the following actions with respect to the Product: (i) sublicense, redistribute, sell, lease, lend, or rent the Product; (ii) make the Product available over a network where it might be used by multiple devices owned or operated by different people at the same time; (iii) disassemble, reverse engineer, decompile, decrypt, or attempt to derive the Product's source code; (iv) use the communication systems made available by the Product to send unauthorized or unsolicited commercial communications; (v) use our name, logo, or trademarks without our prior written consent; or (vi) remove, alter, or obscure any proprietary notice or identification, including copyright, trademark, patent, or other notices, contained in or displayed on or via the Product. (ix) Use the Product in a way that violates this Agreement, any relevant laws, rules, or regulations, or for any illegal, harmful, careless, or improper purposes",
    },
    {
  
      desc: "ANY USE OF THE SERVICES OR PRODUCT NOT EXPLICITLY PERMITTED BY THESE TERMS IS STRICTLY PROHIBITED AND COULD LEAD TO THE SUSPENSION OR TERMINATION OF YOUR ACCESS TO THE SERVICE AT THE COMPANY'S SOLE DISCRETION",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#5DA1EA] to-[#2D5076] text-white lg:h-auto pb-16">
      <div className="py-4">
        <h1 className="text-[54px] font-bold text-center">
          Terms And Condition
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
          </>
        );
      })}
    </div>
  );
};

export default TermsAndCondition;
