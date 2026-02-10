import User from "../models/user.js";
import Loomian from "../models/loomians.js";



export async function addToInventory(req, res) {
    try {
        const userId = req.user.id;           // comes from auth middleware
        const { loomianId } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const loomian = await Loomian.findById(loomianId);
        if (!loomian) {
            return res.status(404).json({ message: "Loomian not found" });
        }

        const existing = user.inventory.find(
            item => item.loomianId.toString() === loomianId
        );

        if (existing) {
            existing.quantity += 1;
        } else {
            user.inventory.push({
                loomianId: loomian._id,
                name: loomian.name,
                value: loomian.value,
                image: loomian.image,
                quantity: 1
            });
        }

        await user.save();
        res.json(user.inventory);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export async function removeOne(req, res) {
    try {
        const userId = req.user.id;
        const { loomianId } = req.params;

        const user = await User.findById(userId);

        const item = user.inventory.find(
            i => i.loomianId.toString() === loomianId
        );

        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }

        item.quantity -= 1;

        if (item.quantity <= 0) {
            user.inventory = user.inventory.filter(
                i => i.loomianId.toString() !== loomianId
            );
        }

        await user.save();
        res.json(user.inventory);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

export async function removeAll(req, res) {
    try {
        const userId = req.user.id;
        const { loomianId } = req.params;

        const user = await User.findById(userId);

        user.inventory = user.inventory.filter(
            i => i.loomianId.toString() !== loomianId
        );

        await user.save();
        res.json(user.inventory);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

