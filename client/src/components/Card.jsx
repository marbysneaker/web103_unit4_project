import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({props}) => {
    
    
    const [car, setCar] = useState({id:0, make:'', model:'', year:'', color:'', price:'', img:''})


useEffect(() => {
    setCar(props)
    console.log(car)
}
, [props])




   
  return (
    <div className="card">
        <div className = 'top-container' >
         <Link to={`/customcars/${car.id}`}><img src={car.img} alt={car.name} /></Link>
         </div>
            <div className = 'bottom-container'>
                <h2>{car.make} {car.model}</h2>
                <h3>{car.interior}</h3>
                <h3>{car.color}</h3>
                <h3>${car.price}</h3>
                <Link to={`/edit/${car.id}`}><button>Edit</button></Link>
             </div>   
        
        </div>

   
  )
}

export default Card