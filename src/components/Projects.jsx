import React from 'react'
import pic from "../assets/img/port.jpg"
import data from '../assets/projectDetails'

function Projects() {
    function gotoLink(link){
        window.location.href =link
    }
  return (
    <>
    <h1 className='text-center text-white text-3xl'>Projects</h1>
    <div className=' w-[80%]  mx-auto text-center flex flex-wrap'>
        {
            data.map((pro)=>(
                <div  key={pro.id} className='my-class relative mx-auto w-80 bg-[#222831]  rounded-lg shadow-md p-4 mb-10 mt-10 max-h-[500px] overflow-hidden '>
                <img  src={pro.img} alt={pro.name}  className='w-full h-auto rounded-lg mb-4 max-w-[300px] max-h-[200px] min-h-[200px]' />
                <div className=' absolute top-[40%] right-[35%] text-4xl space-x-5'>
                    <button onClick={()=>gotoLink(pro.git)}>📂</button>
                    <button onClick={()=>gotoLink(pro.live)}>▶️</button>
                </div>
                <div>
                <p className='text-sm text-white'>{pro.name}</p>
            </div>
            </div>

            ))
        }
        
    

    {/* <div className='mx-auto w-80 bg-white border rounded-lg shadow-md p-4 mb-10 mt-10 max-h-[500px] overflow-hidden '>
    <img  src={pic}  className='w-full h-auto rounded-lg mb-4 max-w-[300px] max-h-[200px] min-h-[200px]' />
    <div>
      <p className='text-sm text-black-500'>Blog-Dogg</p>
    </div>
    </div>

    <div className='mx-auto  w-80 bg-white border rounded-lg shadow-md p-4 mb-10 mt-10 max-h-[500px] overflow-hidden '>
    <img  src={pic}  className='w-full h-auto rounded-lg mb-4 max-w-[300px] max-h-[200px] min-h-[200px]' />
    <div>
      <p className='text-sm text-black-500'>Blog-Dogg</p>
    </div>
    </div> */}


    </div>
    </>
   
    
   
      


    
   
  )
}

export default Projects