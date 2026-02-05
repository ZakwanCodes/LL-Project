import Loomian from "../models/loomians.js"

export async function getAllLoomians(req, res){
    try{
        const loomians = await Loomian.find();
        res.json({success : true, loomians});

    }catch(error){
        res.status(500).json({message : "internal server error"});
    }
}

export async function getLoomianById(req, res){

}