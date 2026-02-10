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
                rarity: "Roamer",
                description: "Duskit is a Spirit/Mind-type Loomian introduced in Loomian Legacy - Veils of Shadow. It is the Guardian Spirit of Gale Forest and Cheshma Town.",
                event: "none",
                value: 300,
                demand: 8,
                image: "/gamma-duskit.png"
            },
            {
                name: "Gamma Ikazune",
                rarity: "Roamer",
                description: "asdad",
                event: "none",
                value: 300,
                demand: 10,
                image: "/gamma-ikazune.png"
            },
            {
                name : "Gamma Protogon",
                event: "none",
                rarity: "Roamer",
                description: "asdad",
                value: 500,
                demand: 10,
                image: "/gamma-protogon.png"
            },
            {
                name : "Gamma Mutagon",
                event: "none",
                rarity: "Roamer",
                description: "sdadsa",
                value: 200,
                demand: 4,
                image: "/gamma-mutagon.png" 
            },
            {
                name: "Gamma Dakuda",
                event: "none",
                rarity: "Roamer",
                description: "asdads",
                value: 300,
                demand: 8,
                image: "/gamma-dakuda.png"
            },
            {
                name: "Gamma Cosmeleon",
                event: "none",
                rarity: "Roamer",
                description: "sadasd",
                value: 300,
                demand: 8,
                image: "/gamma-cosmeleon.png"
            },
            {
                name: "Gamma Cephalops",
                event: "none",
                rarity: "Roamer",
                description: "sadas",
                value: 300,
                demand: 8,
                image: "/gamma-cephalops.png"
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
