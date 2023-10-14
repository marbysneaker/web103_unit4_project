// CreateCar.jsx
import React, { useState } from 'react';
import CarsAPI from '../services/CarsAPI';
import './CreateCar.css';

const CreateCar = () => {
    const [car, setCar] = useState({
        name: '',
        engine: '',
        image: '',
        interior: '',
        color: '',
        price: '',
        wheels: ''

        
    });

    const handleChange = (e) => {
        setCar({
            ...car,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        console.log('car to add',car)
        e.preventDefault();
        await CarsAPI.createCar(car);
        // Redirect or update UI after successful creation
        //refresh page
        // window.location.reload();

    };

    return (
        <div className="create-car">
        <form onSubmit={handleSubmit}>
            <input 
                name="name" 
                value={car.name} 
                onChange={handleChange} 
                placeholder="Name" 
            />
        
            <input 
                name="color" 
                value={car.color} 
                onChange={handleChange} 
                placeholder="Color" 
            />
            <input 
                name="engine" 
                value={car.engine} 
                onChange={handleChange} 
                placeholder="Engine" 
            />
            <input 
                name="image" 
                value={car.image} 
                onChange={handleChange} 
                placeholder="Image URL" 
            />
            <input 
                name="interior" 
                value={car.interior} 
                onChange={handleChange} 
                placeholder="Interior" 
            />
            <input 
                name="price" 
                type="number" 
                value={car.price} 
                onChange={handleChange} 
                placeholder="Price" 
            />
            <input 
                name="wheels" 
                value={car.wheels} 
                onChange={handleChange} 
                placeholder="Wheels" 
            />
            <button type="submit">Create Car</button>
        </form>
    </div>
    
    );
}

export default CreateCar;
