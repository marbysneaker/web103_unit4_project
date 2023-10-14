import {pool} from '../config/database.js'



const getCars = async (req, res) => {

    console.log('🎉 cars retrieved')
    try {
        const results = await pool.query('SELECT * FROM cars')
        res.status(200).json(results.rows)
        
    }
    catch (error) {
        res.status(400).json({error: error.message})
    } 
}

const getCarById = async (req, res) => {
    try {
       const carId = req.params.carId
         const results = await pool.query('SELECT * FROM cars WHERE id = $1', [carId])
            res.status(200).json(results.rows[0])

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const createCar = async (req, res) => {
    try {
        const {name, color, interior, wheels, engine, price, image} = req.body
        const newCar = await pool.query(`
        INSERT INTO cars (name, color, interior, wheels, engine, price, image)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
        `, [name, color, interior, wheels, engine, price, image])
        res.json(newCar.rows[0])
    } catch (error) {
        console.error(error)
    }

}

const updateCar = async (req, res) => {
    try {
        const id =  parseInt(req.params.carId)
        const {name, color, interior, wheels, engine, price, image} = req.body
        const updatedCar = await pool.query(`
        UPDATE cars
        SET name = $1, color = $2, interior = $3, wheels = $4, engine = $5, price = $6, image = $7
        WHERE id = $8
        RETURNING *
        `, [name, color, interior, wheels, engine, price, image, id])
        res.json(updatedCar.rows[0])
    } catch (error) {
        console.error(error)
    }
}

const deleteCar = async (req, res) => {
    try {
        // console.log('delete car route hit', req);
        console.log('delete car route hit', req.params.carId);
        const id = parseInt(req.params.carId)
        console.log('deleting car with id', id );
        const deletedCar = await pool.query(`
        DELETE FROM cars
        WHERE id = $1
        `, [id])
        res.status(200).json({ message: `Car with ID ${id} deleted successfully.` })

    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


export default {
    getCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar

}
