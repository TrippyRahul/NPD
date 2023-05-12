import React from 'react'

const Contact = () => {
  return (
   <div className='lg:h-[100vh] flex flex-col justify-center items-center'>
    <h1 className='text-[54px] font-bold text-center text-[#1C344E] '>Contact Us</h1>
     <form class="w-[50%] mx-auto my-8">
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="name">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="email">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="message">
        Message
      </label>
      <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Enter your message"></textarea>
    </div>
    <div class="flex justify-center">
    <a href="/home" className='flex items-center gap-3 lg:md:mx-2 text-white rounded-tr-lg rounded-bl-lg px-10 py-2 bg-[#5CA0E9] font-bold'>
Submit
          </a>
    </div>
  </form>
   </div>
  
  )
}

export default Contact