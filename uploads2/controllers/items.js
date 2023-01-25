import Hotel from '../models/items.js';
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
        if(req.body.stock)
        ite.stock =req.body.stock
        

        await ite.save()
        res.json(ite)

    }catch(err){
        res.send('Error '+ err)
    
  }}
  export const addHotel = async (req, res) => {
    try{
        const ite =  new Hotel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
    })

        await ite.save()
        res.json(ite)

    }catch(err){
        res.send('Error '+ err)
    
  }}
  export const deleteHotel = async (req, res) => {
    try{
        const p1 = await Hotel.findByIdAndDelete(req.params.id)
        res.json(p1)

    }catch(err){
        res.send('Error '+ err)
    
  }}