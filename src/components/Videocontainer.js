import React, { useEffect, useState } from 'react'
import { apikey } from './Constants';
import VideoComponent from './VideoComponent';

const Videocontainer = () => {
    const [videos,setvideos]=useState([]);
const getvideos=async()=>{
    const data=await fetch(apikey);
    const j=await data.json();

    setvideos(j.items)
}

    useEffect(()=>{
        getvideos();
    },[])
  return (
    <div className='flex justify-between flex-wrap mt-4 mx-10'>
        {videos.map(x=><VideoComponent data={x}/>)}
    </div>
  )
}

export default Videocontainer