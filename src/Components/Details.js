import React from 'react'

const Details = ({index,data}) => {
  return (
      <div>
      {data[index].map(item=>(
    <div className='card'>
      <h4>Name:{item.name}</h4>
      <p>Email:{item.email}</p>
      <p>Phone:{item.phone}</p>
      <p>City:{item.city}</p>
      <p>State:{item.state}</p>
      <p>Country:{item.country}</p>
      <p>organization:{item.organization}</p>
      <p>Job Profile:{item.jobProfile}</p>
    
    </div>
    ))}
    </div>
  )
}

export default Details



