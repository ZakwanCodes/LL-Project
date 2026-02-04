import {ConnectDB} from "../lib/db.js"
import Loomian from "../models/loomians.js";

//call node seed/loomianSeed.js to insert loomian collection in database
async function seedLoomians() {
    try {
        await ConnectDB();

        await Loomian.deleteMany(); // delete all collection

        await Loomian.insertMany([ //reinsert each time 
            {
                name: "Gamma Duskit",
                event: "none",
                value: 120,
                demand: 8,
                image: "/images/gamma-duskit.png"
            },
            {
                name: "Gamma Ikazune",
                event: "none",
                value: 300,
                demand: 10,
                image: "/images/gamma-ikazune.png"
            }
        ]);

        console.log("Loomians seeded successfully");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

seedLoomians();
