import { car } from 'cars';
import Car from '../models/Car.js';
import CarModal from "../models/Car.js";

export const getCar = async (req, res) => {
  try {

    const ite = await Car.find();
    res.json(ite);
  } catch (error) {

    res.status(404).json({ message: error.message });
  }
}




export const getCarById = async (req, res) => {
  try {

    const ite = await Car.findById(req.params.id);
    res.status(200).json(ite);
  } catch (error) {

    res.status(404).json({ message: error.message });
  }
}

export const updateCar = async (req, res) => {
  try {
    let foundCar = await Car.findOne({ _id: req.params.id });

    const updateImages = {};

    if (req.files?.carPic) {

      // delete photo
      // check if we got files object
      if (req.files?.carPic !== undefined) {
        // check if the user didn't have photo
        if (foundCar.carPic !== '') {
          fs.unlinkSync(`${foundCar.carPic}`);
        }
      }
      //  then update
      updateImages.carPic = (req.files?.carPic[0].path).replace('\\', '/');

    }

    let updatedCar = await Car.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          ...updateImages,
          cartype: req.body.cartype ? req.body.cartype : foundUser.cartype,
          carPic: `${req.protocol}://${req.get('host')}/uploads2/${req.file.filename}`,
          carbrand: req.body.carbrand ? req.body.carbrand : foundUser.carbrand,
          carprice: req.body.carprice ? req.body.carprice : foundUser.carprice,
          carengine: req.body.carengine ? req.body.carengine : foundUser.carengine,



        },
      },
      { new: true, upsert: true },
    );

    res.status(200).json({
      success: true,
      message: "Mise à jour réussie de l'utilisateur",
      updatedCar: updatedCar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addCar = async (req, res) => {
  try {
    const ite = new CarModal({
      cartype: req.body.cartype,
      carbrand: req.body.carbrand,
      carprice: req.body.carprice,
      carengine: req.body.carengine,
      carPic: `${req.protocol}://${req.get('host')}/uploads2/${req.file.filename}`,
    })

    await ite.save()
    res.json(ite)

  } catch (err) {
    res.send('Error ' + err)

  }
}


export const deleteCar = async (req, res) => {
  try {
    const p1 = await Car.findByIdAndDelete(req.params.id)
    res.json(p1)

  } catch (err) {
    res.send('Error ' + err)

  }
}