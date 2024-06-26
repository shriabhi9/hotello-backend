const Wishlist = require("../models/wishlist.model");

const createWishlistHandler = async(req,res)=>{
    const newWishlist = new Wishlist(req.body);
    try{
        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Failed to create wishlist"});
    }
}
const deleteWishlistHandler = async(req,res)=>{
    try {
        await Wishlist.findByIdAndDelete(req.params.id)
        res.json({message:"hotel id deleted from wishlist successfully"})
    } catch (error) {
        res.status(500).json({message:"could not delete the hotel id"})
    }
}
const getWishlistHandler = async(req,res)=>{
    try {
        const wishlist = await Wishlist.find({});
        wishlist ? res.json(wishlist) : res.json({message:"No item found"})
    } catch (error) {
        console.log(error);
        res.status(500).json(err);    
    }
}


module.exports = {createWishlistHandler,deleteWishlistHandler,getWishlistHandler};