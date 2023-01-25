import { application, Router } from 'express';
import multer from 'multer';
import path from 'path';
import Hotel from '../models/hotel.js';
import express from 'express';
import {fileURLToPath} from 'url';
import fs from 'fs';
import {fileTypeFromBuffer} from 'file-type';
import imageType from 'image-type';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname("__filename");

const app = express();

export const getimage = async (req,res)=>{
  const ite = await Hotel.find();  
  const imagePath = path.join('uploads',req.params.image_name)
  try {   
    const buffer = fs.readFileSync(imagePath)
    const mime = 'image/png'
    res.writeHead(200,{'Content-Type':mime})
    res.end(buffer,'binary')
  } catch (error) {
 
    res.status(404).json({ message: error.message });
}
}


export const getHotel = async (req, res) => {
    try {   
      const ite = await Hotel.find();    
      res.status(200).json(ite);
  } catch (error) {
   
      res.status(404).json({ message: error.message });
  }}



  export const getHotelById = async (req, res) => {
    try {   
  
      const ite = await Hotel.findById(req.params.id);    
      res.status(200).json(ite);
  } catch (error) {
   
      res.status(404).json({ message: error.message });
  }}




  export const updateHotel = async (req, res) => {
    try{
        const ite = await Hotel.findById(req.params.id)
        if(req.body.name)
        ite.name =req.body.name
        if(req.body.description)
        ite.description =req.body.description
        if(req.body.price)
        ite.price =req.body.price
        if(req.body.adress)
        ite.rooms =req.body.adress
        

        await ite.save()
        res.json(ite)

    }catch(err){
        res.send('Error '+ err)
    
  }}


  const upload = multer({
        dest:"uploads",
        fileFilter:(req,file,callback) => {
          if (/\S+\.(jpg|bmp|gif|png)/gi.test(file.originalname)){
            callback(null,true)
          }else{
            callback(Error('invalide image file name'),false)
          }
    },
  }).single('image')



  export const addHotel = async (req, res) => {
    upload(req,res,(err) => {
        if (err){
            console.log(err)
        }else{
            try{
                const ite =  new Hotel({
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    adress: req.body.adress,
                    image: req.file.filename

            })
        
                ite.save()
                res.json(ite)
        
            }catch(err){
                res.send('Error add Hotel'+ err)
        }
    }
 
    
  })
}



  export const deleteHotel = async (req, res) => {
    try{
        const p1 = await Hotel.findByIdAndDelete(req.params.id)
        res.json(p1)

    }catch(err){
        res.send('Error '+ err)
    
  }}