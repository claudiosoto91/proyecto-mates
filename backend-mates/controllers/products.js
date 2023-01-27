import { db } from "../db.js";

export const getProducts = (req, res) => {
    const q = "SELECT * FROM products";

    db.query(q, (err, data) => {
        if (err) return res.send(err);
        return res.status(200).json(data);
    });
}