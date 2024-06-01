import React from 'react'

function Card({item}) {
    
  return (
    <>
    <div className="card w-90 p-2 m-2 bg-base-100 shadow-xl">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className='card-title'>
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price}</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </>
  )
}

export default Card