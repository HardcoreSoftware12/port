import React from 'react'

function Contact() {
  return (
    <div className='  bg-[#212121] pb-5'>
        <div className='mx-auto w-fit text-center pt-5 space-y-5'>
            <p className='text-[#6C6C6C]'>Liked My Profile?</p>
            <h1 className='text-white text-4xl font-bold'>Let's Chat</h1>
        </div>
        <div className=' mx-auto flex w-[60%]  justify-between mt-10'>
            <p className='text-2xl text-white font-bold underline'>devadigaranjith12@gmail.com</p>
            <p className='text-white font-bold text-2xl underline'>✆8310688614</p>
            

        </div>
        <div className='mt-[80px] mb-10 mx-auto bg-white w-[60%] h-1'></div>

        <div className='w-[60%] mx-auto flex justify-evenly'>
            <a  className='text-white flex justify-center items-center border w-[30px] h-[30px] rounded-full'><i class="fa-brands fa-instagram"></i></a >
            <a href='github.com/HardcoreSoftware12'  className='text-white flex justify-center items-center border w-[30px] h-[30px] rounded-full'><i class="fa-brands fa-github"></i></a >
            <a  className='text-white flex justify-center items-center border w-[30px] h-[30px] rounded-full'><i class="fa-brands fa-facebook"></i></a >
            <a  className='text-white flex justify-center items-center border w-[30px] h-[30px] rounded-full'><i class="fa-brands fa-twitter"></i></a >

        </div>

        

    </div>
  )
}

export default Contact