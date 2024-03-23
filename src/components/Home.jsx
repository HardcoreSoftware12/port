import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import me from "../assets/img/last1.png"

function Home() {
    const [typeWriter,setTypeWriter] = useState(false);
    const [profile,setProfile] = useState(false);


    useEffect(()=>{
        const timer = setTimeout(() => {
            setTypeWriter(true);
            
        }, 4000);
        // return ()=> clearInterval(timer)
    },[])
    useEffect(()=>{
        setTimeout(() => {
            console.log("after 10");
            setProfile(!profile)
            
        }, 13000);
    },[])


    
  return (

    <div className='flex flex-col lg:flex-row lg:w-[80%] mx-auto '>
        <div className=' text-center pt-6 lg:pt-[10%] xl:pt-[13%]'>
        <h1 className='text-[#D63484] text-2xl lg:text-4xl'>
        <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Heyy It's Ranjit ! 🧑‍💻 🤖")
    
                  .pauseFor(2500)
    
                  .start()

              }}
            />
        </h1>
        <h1 className='text-white text-sm
        sm:text-2xl pt-5 lg:text-3xl  '>
        {
                typeWriter && (
                    <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("I am Full-Stack 🌐 Web Developer and Passionate Programmer ⌨️")
    
                  .pauseFor(2500)
    
                  .start()

              }}
            />

                )
            }
           
       
        </h1>
        

            
        </div>

        {/* //IMAGE */}
        <div className={`mt-5 pt-5 ${profile ? 'visible':'invisible'}`}>
            <img src={me} alt="" className={`mx-auto w-[60%] rounded-full md:w-[50%] mt-7 `} />
            
       
        </div>
       

    </div>
  )
}

export default Home