import {ConnectDB} from "../lib/db.js"
import Loomian from "../models/loomians.js";

//To update loomian seed:
//1. cd backend/src
//2. call node seed/loomianSeed.js to insert updated collection in database
async function seedLoomians() {
    try {
        await ConnectDB();

        await Loomian.deleteMany(); // delete all collection

        await Loomian.insertMany([ //reinsert each time 
            {
                name: "Gamma Duskit",
                event: "none",
                value: 300,
                demand: 8,
                image: "/public/gamma-duskit.png"
            },
            {
                name: "Gamma Ikazune",
                event: "none",
                value: 300,
                demand: 10,
                image: "/public/gamma-ikazune.png"
            },
            {
                name : "Gamma Protogon",
                event: "none",
                value: 500,
                demand: 10,
                image: "/public/gamma-protogon.png"
            },
            {
              name : "Gamma Mutagon",
              event: "none",
              value: 200,
              demand: 4,
              image: "/public/gamma-mutagon.png" 
            },
            {
                name: "Gamma Dakuda",
                event: "none",
                value: 300,
                demand: 8,
                image: "/public/gamma-dakuda.png"
            },
            {
                name: "Gamma Cosmeleon",
                event: "none",
                value: 300,
                demand: 8,
                image: "/public/gamma-cosmeleon.png"
            },
            {
                name: "Gamma Cephalops",
                event: "none",
                value: 300,
                demand: 8,
                image: "/public/gamma-cephalops.png"
            },
        ]);

        console.log("Loomians seeded successfully");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

seedLoomians();
