import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

const request = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,

});

const getCars = async () => {
    try {
        const response = await request.get('/cars');
        console.log("api data",response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const getCarsById = async (id) => {
    try {
        console.log("api id",id);
        const response = await request.get(`/cars/${id}`);
        console.log("api data",response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const createCar = async (car) => {
    try {
        const response = await request.post('/cars',car);
        console.log("api data",response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const updateCar = async (id) => {
    try {
        const response = await request.patch(`/cars/${id}`);
        console.log("api data",response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const deleteCar = async (id) => {
    try {
        // const id = parseInt(id);
        console.log("delete id",id);   
        const response = await request.delete(`/cars/${id}`);
        console.log("api data",response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}


const CarsAPI = {
    getCars,
    getCarsById,
    createCar,
    updateCar,
    deleteCar
};

export default CarsAPI;
