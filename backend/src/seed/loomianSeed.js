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
                description: "Duskit is a Spirit/Mind-type Loomian introduced in Loomian Legacy - Veils of Shadow. It is the Guardian Spirit of Gale Forest and Cheshma Town. It evolves from Duskele starting at level 32. Its Gamma variant was obtainable from the Gamma Gleaming Event.",
                event: "none",
                value: 300,
                demand: 8,
                image: "/gamma-duskit.png"
            },
            {
                name: "Gamma Ikazune",
                rarity: "Roamer",
                description: "Ikazune is a Fire/Spirit-type Loomian introduced in Loomian Legacy - Veils of Shadow. It is the Guardian Spirit of Jolly Village and Silvent City. It evolves from Ika-ika starting at level 32. Its Gamma variant emits an eerie purple glow instead of the usual orange flame.",
                event: "none",
                value: 300,
                demand: 10,
                image: "/gamma-ikazune.png"
            },
            {
                name: "Gamma Protogon",
                rarity: "Roamer",
                description: "Protogon is a Metal-type Loomian introduced in Loomian Legacy - Veils of Shadow. It is an ancient mechanical Loomian created by an advanced civilization. It evolves from Proto starting at level 28. The Gamma variant has a unique purple and silver color scheme.",
                event: "none",
                value: 500,
                demand: 10,
                image: "/gamma-protogon.png"
            },
            {
                name: "Gamma Mutagon",
                rarity: "Roamer",
                description: "Mutagon is a Brawler/Mind-type Loomian introduced in Loomian Legacy - Veils of Shadow. It is a genetically modified Loomian created by Dr. Halo. It evolves from Ragoon starting at level 34. Its Gamma variant features striking purple and green coloration.",
                event: "none",
                value: 200,
                demand: 4,
                image: "/gamma-mutagon.png" 
            },
            {
                name: "Gamma Dakuda",
                rarity: "Roamer",
                description: "Dakuda is a Bug-type Loomian introduced in Loomian Legacy - Veils of Shadow. It is known for its aggressive nature and powerful mandibles. It evolves from Dakuwa starting at level 22. The Gamma variant displays vibrant purple and yellow colors.",
                event: "none",
                value: 300,
                demand: 8,
                image: "/gamma-dakuda.png"
            },
            {
                name: "Gamma Cosmeleon",
                rarity: "Roamer",
                description: "Cosmeleon is a Plant-type Loomian introduced in Loomian Legacy - Veils of Shadow. It is a chameleon-like Loomian that can change colors to camouflage with its surroundings. It evolves from Cosmiore starting at level 26. Its Gamma variant has a unique purple and blue color pattern.",
                event: "none",
                value: 300,
                demand: 8,
                image: "/gamma-cosmeleon.png"
            },
            {
                name: "Gamma Cephalops",
                rarity: "Roamer",
                description: "Cephalops is a Water/Dark-type Loomian introduced in Loomian Legacy - Veils of Shadow. It is based on a vampire squid and lurks in deep ocean waters. It evolves from Cephalops starting at level 36. The Gamma variant features an ominous purple and black coloration.",
                event: "none",
                value: 300,
                demand: 8,
                image: "/gamma-cephalops.png"
            },
            {
                name: "Gamma Elephage",
                rarity: "Roamer",
                description: "Elephage is a Dark-type Loomian introduced in Loomian Legacy - Veils of Shadow. It is a mysterious and elusive Loomian known for draining energy from its surroundings. It evolves from Phancub starting at level 32. The Gamma variant features a distinctive purple and black color scheme with glowing accents.",
                event: "none",
                value: 400,
                demand: 9,
                image: "/gamma-elephage.png"
            },
            {
                name: "Gamma Glacadia",
                rarity: "Event",
                description: "Glacadia is a Cosmic-type Loomian introduced in Loomian Legacy - Veils of Shadow. It is a celestial being that controls gravitational forces and is said to have come from another dimension. It does not evolve from or into any other Loomian. The Gamma variant displays ethereal purple cosmic patterns.",
                event: "Galactic Event",
                value: 600,
                demand: 10,
                image: "/gamma-glacadia.png"
            },
            {
                name: "Gamma Arceros",
                rarity: "Roamer",
                description: "Arceros is a Fire-type Loomian introduced in Loomian Legacy - Veils of Shadow. It is a majestic unicorn-like Loomian known for its blazing speed and fiery horn. It evolves from Ignadon starting at level 28. The Gamma variant exhibits a striking purple flame mane and horn.",
                event: "none",
                value: 350,
                demand: 7,
                image: "/gamma-arceros.png"
            },
            {
                name: "Gamma Pyramind",
                rarity: "Ancient",
                description: "Pyramind is an Ancient/Earth-type Loomian introduced in Loomian Legacy - Veils of Shadow. It is an ancient golem-like Loomian that has existed for millennia, often found guarding ancient ruins. It evolves from Obelisk starting at level 30. The Gamma variant features mysterious purple hieroglyphic markings.",
                event: "Ancient Ruins Event",
                value: 450,
                demand: 8,
                image: "/gamma-pyramind.png"
            },
            {
            name: "Gamma Xmas Ikazune",
            rarity: "Event",
            description: "Xmas Ikazune is a Fire/Spirit-type variant of Ikazune introduced during the Christmas Event in Loomian Legacy. It features festive holiday colors with red and green accents, candy cane patterns on its horns, and emits a warm holiday glow instead of its usual flames. The Gamma variant combines the holiday colors with the signature purple Gamma glow.",
            event: "Christmas Event",
            value: 800,
            demand: 10,
            image: "/gamma-xmas-ikazune.png"
        },
        {
            name: "Gamma Xmas Ragoon",
            rarity: "Event",
            description: "Xmas Ragoon is a Brawler-type variant of Ragoon introduced during the Christmas Event. It wears a Santa hat and has red and green holiday-themed fur patterns. This festive variant evolves into Gamma Xmas Mutagon. The Gamma version adds purple Gamma energy to its holiday appearance.",
            event: "Christmas Event",
            value: 600,
            demand: 9,
            image: "/gamma-xmas-ragoon.png"
        },
        {
            name: "Gamma HW Shawchi",
            rarity: "Event",
            description: "HW (Halloween) Shawchi is a Mind-type variant of Shawchi introduced during the Halloween Event. It features spooky pumpkin-like colors with orange and black patterns, glowing jack-o-lantern eyes, and a witch hat appearance. The Gamma variant gives it an eerie purple Halloween glow.",
            event: "Halloween Event",
            value: 700,
            demand: 9,
            image: "/gamma-hw-shawchi.png"
        },
        {
            name: "Gleam HW Duskit (Blue)",
            rarity: "Event",
            description: "Gleam HW (Halloween) Duskit Blue is a Spirit/Mind-type Halloween variant with blue accents. This version features ghostly blue flames, ethereal blue wisps, and spooky Halloween-themed patterns. As a Gleam variant, it has a unique shimmering effect different from Gamma variants.",
            event: "Halloween Event",
            value: 900,
            demand: 10,
            image: "/gleam-hw-duskit-blue.png"
        },
        {
            name: "Gleam HW Duskit (Orange)",
            rarity: "Event",
            description: "Gleam HW (Halloween) Duskit Orange is the orange-accented version of Halloween Duskit. It features vibrant orange Halloween colors, pumpkin-inspired patterns, and glowing orange spectral energy. This variant has the distinctive Gleam shimmer effect prized by collectors.",
            event: "Halloween Event",
            value: 850,
            demand: 9,
            image: "/gleam-hw-duskit-orange.png"
        },
        {
            name: "Gleam HW Duskit (Purple)",
            rarity: "Event",
            description: "Gleam HW (Halloween) Duskit Purple is the purple-accented Halloween variant. It displays deep purple Halloween colors, bat-inspired patterns, and mysterious purple spectral flames. The Gleam effect gives it an extra supernatural appearance perfect for the Halloween theme.",
            event: "Halloween Event",
            value: 950,
            demand: 10,
            image: "/gleam-hw-duskit-purple.png"
        },
        {
            name: "Gleam HW Duskit (Green)",
            rarity: "Event",
            description: "Gleam HW (Halloween) Duskit Green is the green-accented Halloween variant. It features eerie green colors, witchy patterns, and toxic-looking green spectral energy. This rare Gleam variant combines Halloween spookiness with the coveted Gleam visual effects.",
            event: "Halloween Event",
            value: 900,
            demand: 9,
            image: "/gleam-hw-duskit-green.png"
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
