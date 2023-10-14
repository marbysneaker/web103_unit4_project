import React, {useState} from 'react'
import { useEffect } from 'react'
import '../App.css'
import CarsAPI from '../services/CarsAPI'
import './ViewCars.css'
import Card from '../components/Card'


const ViewCars = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const cars = await CarsAPI.getCars()
          
          setCars(cars)
          console.log(cars)

        }
        fetchData()
      }, [])
    
    
    return (
        <div>
            <div className="view-cars-container">
                <div className="row">
                    {cars.map((car) => (
                        <Card key={car.id} props={car} />
                    ))}
                </div>


        </div>
        </div>
    )
}

export default ViewCars