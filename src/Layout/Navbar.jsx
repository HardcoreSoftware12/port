import React, { useState } from 'react'
import Education from '../components/Education'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

function Navbar() {
    const [hamBurger,setHamburger] =useState(false)
  return (
    <div className='w-full sm:w-[80%] mx-auto  md: lg:w-full '>
        {/* navbar */}
        <div className=' lg:hidden '>
            <div className=''>
                <div onClick={()=>{setHamburger(!hamBurger)}} className='text-5xl top-5 absolute right-5 cursor-pointer '>🍔</div>
                {
                    hamBurger && (
                        <div className=' w-[100%] h-[200px] mt-[100px] text-white flex flex-col gap-5 items-center'>
                    <a href="/" className='' >Home</a>
  
                    <a href="#edu"> Education </a>
  
                    <a href="/">Skills</a>
  
                    <a href="#pro">Projects</a>
  
                    <a href="#contact">Contact</a>
  
                </div>
                    )
                }
            </div>

           
        </div>
        <div className=' w-full  hidden lg:block h-[90px]'>
            <div className= "mt-7 mx-auto  w-[70%] flex justify-around content-between  py-5 text-white bg-opacity-40 bg-[#1F2544]  rounded-3xl invisible lg:visible text-2xl">
                <a href="/" className='hover:text-black' >&lt; Home <span>/</span> &gt; </a>
                <a href="#edu" className='hover:text-black ' >&lt; Education <span>/</span> &gt; </a>
                <a href="#skills" className='hover:text-black ' >&lt; Skills <span>/</span> &gt; </a>
                <a href="#pro" className='hover:text-black ' >&lt; Projects <span>/</span> &gt; </a>
                <a href="#contact" className='hover:text-black ' >&lt; Contact <span>/</span> &gt; </a>
            </div>

        </div>
        <div className={`mt-20 lg:mt-0` }>    
            <Home/>
        </div>

        <div className='mt-[20%] lg:mt-[10%] 'id='edu'>
            <Education/>
        </div>

        <div className='mt-[20%] lg:mt-[5%] ' id='pro'>
            <Projects/>
        </div>

        <div className='mt-[5%] lg:mt-[5%] ' id='contact'>
            <Contact/>
        </div>

    </div>
  )
}

export default Navbar