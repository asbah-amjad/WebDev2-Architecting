import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import orderRoutes from './routes/order.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.use('/order', orderRoutes);


const CONNECTION_URL = 'mongodb+srv://asbah:asbah156@cluster0.fwf42.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);