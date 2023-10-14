import  {pool} from '../config/database.js'
import '../config/dotenv.js'
import carData from '../data/cars.js'



// {
//     "id": "6",
//     "name": "Custom Hatchback",
//     "color": "Yellow",
//     "interior": "Fabric",
//     "wheels": "Alloy",
//     "engine": "Hybrid",
//     "price": 27000,
//     "image": "url_to_image_of_yellow_hatchback"
//   }
const createCarsTable = async () => {
    const createTableQuery =`
    DROP TABLE IF EXISTS cars;
    CREATE TABLE IF NOT EXISTS cars (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        color VARCHAR(255) NOT NULL,
        interior VARCHAR(255) NOT NULL,
        wheels VARCHAR(255) NOT NULL,
        engine VARCHAR(255) NOT NULL,
        price INTEGER NOT NULL,
        image VARCHAR(255)

    )

    `
    try {
        await pool.query(createTableQuery)
        console.log('🎉 Cars table created')
    } catch (error) {
        console.error('⚠️ error creating gifts table', error)
    }
}

const seedsCarsTable = async () => {
    await createCarsTable()
    carData.forEach(async (car) => {
       const {name, color, interior, wheels, engine, price, image} = car
         const insertCarQuery = `
            INSERT INTO cars (name, color, interior, wheels, engine, price, image)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
        `
        try {
            await pool.query(insertCarQuery, [name, color, interior, wheels, engine, price, image])
            console.log(`🎉 ${name} added to cars table`)
        } catch (error) {
            console.error(`⚠️ error adding ${name} to cars table`, error)
        }

    }
    )
}

seedsCarsTable()

