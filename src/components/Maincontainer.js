import React from 'react'

import Videocontainer from './Videocontainer.js'
import ButtonFilters from './ButtonFilters'
import Sidebar from './Sidebar.js'

const names=["All","Music","Movies","Gaming","News","Podcasts","Business","Infotainment","Vlogs","Comedy"]
const Maincontainer = () => {
  return (
    <div className='flex'>
    <div>
    <Sidebar/>
    </div>
    <div>
    <div className=' flex h-8 mx-10 flex-wrap'>
      {
            names.map((x)=>{return <ButtonFilters name={x}/>})
       }
      </div>
       <div>
        <Videocontainer/>
       </div>
    </div>
    
      
   
    </div>
  )
}

export default Maincontainer