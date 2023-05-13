import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_au8dxj9",
        "template_iogarph",
        form.current,
        "IJuBZVgv4GeYPiRb9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-[#5DA1EA] to-[#2D5076] text-white lg:h-auto pb-16">
      <h1 className="text-[54px] font-bold text-center text-white ">
        Contact Us
      </h1>
      <form class="w-[50%] mx-auto my-8" ref={form} onSubmit={sendEmail}>
        <div class="mb-4">
          <label class="block text-white font-bold mb-2" for="name">
            Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
        </div>
        <div class="mb-4">
          <label class="block  text-white font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            name="name"
          />
        </div>
        <div class="mb-4">
          <label class="block  text-white font-bold mb-2" for="message">
            Message
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
            placeholder="Enter your message"
            name="message"
          ></textarea>
        </div>
        <div class="flex justify-center">
          <button className="flex items-center gap-3 lg:md:mx-2 text-white rounded-tr-lg rounded-bl-lg px-10 py-2 bg-[#5CA0E9] font-bold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
