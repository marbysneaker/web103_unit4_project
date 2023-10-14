// EditCar.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CarsAPI from '../services/CarsAPI';
import './EditCar.css';

const EditCar = () => {
    const { id } = useParams();
    const history = useNavigate();
    const [car, setCar] = useState({
        name: '',
        color: '',
        engine: '',
        image: '',
        interior: '',
        price: '',
        wheels: ''
    });

    useEffect(() => {
        const fetchCarDetails = async () => {
            console.log('id',id)
            const carData = await CarsAPI.getCarsById(id);
            setCar(carData);
            console.log('edit car',carData)
        };
        fetchCarDetails();
    }, [id]);

    const handleChange = (e) => {
        setCar({
            ...car,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await CarsAPI.updateCar(id, car);
        // history.push('/customcars'); // Redirect to the list of cars after successful update
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        }
        await fetch(`http://localhost:3001/api/cars/${id}`, options)
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        // change id into an integer
        const parseId = parseInt(car.id)

        console.log('parseId',parseId)
        console.log('delete',parseId.valueOf())
        const options = {
            method: 'DELETE',
        }
        await fetch(`http://localhost:3001/api/cars/${id}`, options)
        window.location.reload();
    }



    if (!car) return <div>Loading...</div>;

    return (
        <div className="edit-car">
            <form onSubmit={handleSubmit}>
                <input name="name" value={car.name} onChange={handleChange} placeholder="Name" />
                <input name="color" value={car.color} onChange={handleChange} placeholder="Color" />
                <input name="engine" value={car.engine} onChange={handleChange} placeholder="Engine" />
                <input name="image" value={car.image} onChange={handleChange} placeholder="Image URL" />
                <input name="interior" value={car.interior} onChange={handleChange} placeholder="Interior" />
                <input type="number" name="price" value={car.price} onChange={handleChange} placeholder="Price" />
                <input name="wheels" value={car.wheels} onChange={handleChange} placeholder="Wheels" />
                <div className="buttons">
                <button type="submit">Update Car</button>
                <button type="button" onClick={() => history('/customcars')}>Cancel</button>
                <button type="button" onClick={handleDelete}>Delete</button>
                </div>

            </form>
        </div>
    );
}

export default EditCar;
