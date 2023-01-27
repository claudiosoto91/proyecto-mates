import { db } from "../db.js";


// let sql = 'INSERT INTO orders (field1, field2, field3) VALUES (?,?,?)';
// let query = db.query(sql, [order.field1, order.field2, order.field3], (err, result) => {
//     if(err) throw err;
//     res.send('Order added to database.');
// });

// CREATE TABLE `db-mates`.`orders` (
//     `user` VARCHAR(255) NOT NULL,
//     `item` JSON NOT NULL,
//     `total` INT NOT NULL);

export const postOrders = (req, res) => {

    const q = 'INSERT INTO `db-mates`.`orders` (`user`, `item`, `total`) VALUES (?,?,?)';
    db.query(q, [req.body.user, req.body.item, req.body.total], (err, result) => {
        if (err) return console.log(err);
        return res.status(200).json("Order cargada.");
    })

}
export const getOrders = (req, res) => {
    const q = "SELECT * FROM orders";

    db.query(q, (err, data) => {
        if (err) return res.send(err);
        return res.status(200).json(data);
    });
}