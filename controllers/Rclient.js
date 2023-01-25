import Rclient from '../models/Rclient.js';
import Razorpay from 'razorpay';

const key_id="rzp_test_6nTok2Qu0oeHAO"
const key_secret="YBhj8FP9PLhuGGu4DI5YO5FhW"
const rzpInstance = new Razorpay({
    key_id: key_id,
    key_secret: key_secret
})

export const getRclient = async (req, res) => {
    try {   
  
      const cc = await Rclient.find();    
      res.status(200).json(cc);
  } catch (error) {
   
      res.status(404).json({ message: error.message });
  }}
  export const getRclientById = async (req, res) => {
    try {   
  
      const cc = await Rclient.findById(req.params.id);    
      res.status(200).json(cc);
  } catch (error) {
   
      res.status(404).json({ message: error.message });
  }}
  export const updateRclient = async (req, res) => {
    try{
        const cc = await Rclient.findById(req.params.id)
        if(req.body.userid)
        cc.userid =req.body.userid
        if(req.body.pickupdate)
       cc.pickupdate =req.body.pickupdate
        if(req.body.dropoffdate)
        cc.dropoffdate =req.body.dropoffdate
      
    
        await cc.save()
        res.json(cc)

    }catch(err){
        res.send('Error '+ err)
    
  }}
  export const addRclient = async (req, res) => {
    try{
        const cc =  new Rclient({
            userid: req.body.userid,
            pickupdate: req.body.pickupdate,
            dropoffdate: req.body.dropoffdate,
    })

        await cc.save()
        res.json(cc)

    }catch(err){
        res.send('Error '+ err)
    
  }}
  export const deleteRclient = async (req, res) => {
    try{
        const p1 = await Rclient.findByIdAndDelete(req.params.id)
        res.json(p1)

    }catch(err){
        res.send('Error '+ err)
    
  }}
  
  export const getOrderId = async (req, res) => {
    const options = {
        amount: req.body.amount + "00",
        currency: "INR",
        payement_capture: "1"

    }
    rzpInstance.orders.create(options, (err, order)=> {
        const resObj= {
        keyId: keyId,
        orderId: order.id
    }
    res.send(JSON.stringify(resObj))
    })
  }
  export const updateTransactionStatus = async (req, res) => {
    console.log(req.body)
    res.send("success")
    
  } 



 