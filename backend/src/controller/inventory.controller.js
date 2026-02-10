import User from "../models/user.js";


export async function addToInventory(req, res) {
    try {
        const userId = req.user.id;
        const { loomianId } = req.body;

        const user = await User.findById(userId);

        const existing = user.inventory.find(
            item => item.loomian.toString() === loomianId
        );

        if (existing) {
            existing.quantity += 1;
        } else {
            user.inventory.push({
                loomian: loomianId,
                quantity: 1
            });
        }

        await user.save();

        const populatedUser = await User.findById(userId)
            .populate("inventory.loomian");

        res.json(populatedUser.inventory);


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
            i => i.loomian.toString() === loomianId
        );

        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }

        item.quantity -= 1;

        if (item.quantity <= 0) {
            user.inventory = user.inventory.filter(
                i => i.loomian.toString() !== loomianId
            );
        }

        await user.save();

        const populatedUser = await User.findById(userId)
            .populate("inventory.loomian");

        res.json(populatedUser.inventory);

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
            i => i.loomian.toString() !== loomianId
        );

        await user.save();

        const populatedUser = await User.findById(userId)
            .populate("inventory.loomian");

        res.json(populatedUser.inventory);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}


