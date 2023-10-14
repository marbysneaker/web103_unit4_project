import express from "express";
import carController from "../controllers/cars.js";

const router = express.Router();

router.get("/cars", carController.getCars);

router.get("/cars/:carId", carController.getCarById);

router.post("/cars", carController.createCar);

router.patch("/cars/:carId", carController.updateCar);

router.delete("/cars/:carId", carController.deleteCar);





export default router;
