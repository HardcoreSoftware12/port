import React from 'react'

import rocket from "../assets/img/rocket.gif"

function Education() {
  return (
    <div className=' h-[600px]  text-white  text-center relative md:text-2xl'>
    <div className=' mt-5 '>
        <h1 className='text-3xl text-white '>Education</h1>
        
        <div className=' w-[40%] flex justify-end absolute left-0 top-[10%] '> 
            <div className='  w-[90%] text-end rounded-xl py-5 px-5 bg-[#424769] '>
                <p>2017</p>
                <h1>St.Anthony's High School</h1>
                <h2>85%</h2>
            </div>

        </div>

        <div className='  w-[40%] flex justify-start absolute right-0 top-[40%]'> 
            <div className='  w-[90%] text-start rounded-xl py-5 px-5 bg-[#424769]'>
                <p>2017-19</p>
                <h1>RN Shetty College, Udupi</h1>
                <h2>89%</h2>
            </div>

        </div>
       
        <div className='absolute left-[46%] top-[10%] h-[82%]  w-5 lg:left-[50%]'>
            <div className=' sticky top-[10%] '>
                <div className='w-[70px] rotate-180 '>
                <img src={rocket} alt="" className='' />

                </div>
            </div>
        </div>
        <div className=' w-[40%] flex justify-end absolute left-0 top-[70%] '> 
            <div className=' w-[90%] text-end rounded-xl py-5 px-5 bg-[#424769]'>
                <p>2019-22</p>
                <h1>Shree Devi College of Information and Science</h1>
                <h2>8.14 CGPA</h2>
            </div>

        </div>
        
    </div>

</div>
  )
}

export default Education