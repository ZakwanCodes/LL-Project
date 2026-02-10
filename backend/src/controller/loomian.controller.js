import Loomian from "../models/loomians.js"

export async function getAllLoomians(req, res){
    try{
        const loomians = await Loomian.find();
        res.json({success : true, loomians});

    }catch(error){
        res.status(500).json({message : "Internal server error"});
    }
}

export async function getLoomianById(req, res){
    try{
        const {id} = req.params;
        const loomian = await Loomian.findById(id);

        if (!loomian) {
            return res.status(404).json({ message: "Loomian not found" });
        }

        res.status(200).json({success: true, loomian : loomian});


    } catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}