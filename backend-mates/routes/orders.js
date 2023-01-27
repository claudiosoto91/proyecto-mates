import express from "express"
import { postOrders, getOrders } from "../controllers/orders.js";

const router = express.Router();

router.post("/", postOrders);
router.get("/", getOrders);

export default router;