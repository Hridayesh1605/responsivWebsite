import React from 'react'
import Card from './Card'
import Sdata from '../data'

const Service = () => {
  return (
    <div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              
            {Sdata.map((val,index)=>{
   return(
       <Card key={index} image={val.img} title={val.title} />
   )
 })}
            </div>


          </div>
        </div>
      </div>



    </div>
  )
}

export default Service


// {Sdata.map((val,index)=>{
//   return(
//       <Card key={index} image={val.img} title={val.title} />
//   )
// })}
