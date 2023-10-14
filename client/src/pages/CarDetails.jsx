import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CarsAPI from '../services/CarsAPI';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        const fetchCarDetails = async () => {
            const carData = await CarsAPI.getCarsById(id);
            setCar(carData);
        };
        fetchCarDetails();
    }, [id]);

    if (!car) return <div>Loading...</div>;

    return (
        <div className="car-details">
            <img src={car.img} alt={car.name} />
            <h2>{car.make} {car.model}</h2>
            <h3>{car.interior}</h3>
            <h3>{car.color}</h3>
            <h3>${car.price}</h3>
        </div>
    );
}

export default CarDetails;