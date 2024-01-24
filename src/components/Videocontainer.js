import React, { useEffect } from 'react'
import { apikey } from './Constants';

const Videocontainer = () => {
const getvideos=async()=>{
    const data=await fetch(apikey);
    const j=await data.json();
    console.log(j);
}

    useEffect(()=>{
        getvideos();
    },[])
  return (
    <div>videocontainer</div>
  )
}

export default Videocontainer