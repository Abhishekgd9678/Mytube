import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggle } from '../utils/Slice';


const Header = () => {
    const [text,settext]=useState('');
    const dispatch=useDispatch();

    const handletoggle=()=>{
        dispatch(toggle()); 
    }
  return (
    <>
    <div className='flex justify-between m-4 mx-10 items-center shadow p-5 '>
        <div className='flex *:mx-2 items-center '>
            <div className='cursor-pointer ' onClick={handletoggle}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"  />
            </svg>


            </div>
            <div className='flex *:mr-2 items-center cursor-pointer'>
         
             <img className='h-[30px]' src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt=' '/>
                <h4>YouTube IN</h4>
            </div>
        </div>
        <div className='flex  items-center '>
            
            <input type='text' name='search' className='border rounded-l-full border-black w-[370px] p-1' value={text} onChange={(e)=>settext(e.target.value)}></input>
            <label for='search' className='cursor-pointer rounded-r-full border border-black p-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</label>
        </div>
        <div className='flex *:mx-5 items-center'>
          <div className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

          </div>
          <div className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>

          </div>

        </div>
    </div>
    </>
  )
}

export default Header