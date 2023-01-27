import express from 'express';
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import productsRoutes from './routes/products.js';
import ordersRoutes from './routes/orders.js';
import cookieParser from 'cookie-parser';
import cors  from 'cors';
import { PORT} from './config.js';

const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.use("/api/carrito", ordersRoutes);
app.use("/api/products", productsRoutes)
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log('Conectado');
});