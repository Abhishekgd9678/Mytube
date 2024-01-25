import React from 'react'
import { Link } from 'react-router-dom';

const VideoComponent = (props) => {

const{snippet,statistics}=props.data;

  return (
    <div className='m-2 bg-gray-200 rounded-md '>
      <Link><img alt="VIdeothumbnail" className='h-[200px] rounded-md' src={snippet.thumbnails.medium.url}/></Link>
        <div className='flex justify-between px-2 py-2'>
            <div>
            {snippet.channelTitle} 
            </div>
            <div>
            {Math.round(statistics.viewCount/100000)}M Views
            </div>
   
       
        </div>
   
    </div>
  )
}

export default VideoComponent