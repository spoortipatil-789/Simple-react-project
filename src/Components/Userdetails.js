import React,{ useState} from 'react'
import { Data } from './Data';
import "./Userdetails.css";
import Details from './Details';
 
const Userdetails = () => {
    
const [view , setView]=useState("");
const firstDetails =()=>{
  setView("firstdetails")
}
const secondDetails =()=>{
  setView("seconddetails")
}
const thirdDetails =()=>{
  setView("thirddetails")
}
 
  return (
    <div className='user-details'>
    <div className='user'>
    <div className=' user-1'>
         <h4>Avani</h4>
         <div>
         avani@gmail.com
         </div>
         <div>
         9876435234
         </div>
        
         <div className='button'>
         <button onClick={firstDetails}>Click to view details</button>
         </div>
     </div>
     <div className='user-1'>
     <h4>Diya</h4>
        <div>
        diya@gmail.com
        </div>
        <div>
        9876444234
        </div>
       
         <div className='button'>
         <button onClick={secondDetails}>Click to view details</button>
         </div>
        
     </div>
     <div className='user-1'>
     <h4>Swati</h4>
     <div>
     swati@gmail.com
     </div>
        <div>
        9876488998
        </div>
         <div className='button'>
         <button onClick={thirdDetails}>Click to view details</button>
         </div>
     </div>
    </div>
    <div className='details'>
        
        <div>
        {view === "firstdetails" && <Details data={Data} index={0} />}
        {view === "seconddetails" && <Details data={Data} index={1} />}
        {view === "thirddetails" && <Details data={Data} index={2} />}
        </div>
    </div>
    </div>
  )
}

export default Userdetails









