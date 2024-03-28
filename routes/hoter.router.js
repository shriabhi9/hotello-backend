const express = require('express');
const router = express.Router();

const Hotel = require("../models/hotel.model");

router.route("/").get( async (req,res)=>{
    try {
        const hotels = await Hotel.find({});
        hotels ? res.json(hotels) : res.status(404).json({message:"No data found"});
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;