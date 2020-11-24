import express from 'express'; // to use esmodules in node, we need to add a "type": "module" property to the root package.json
import dotenv from 'dotenv'; // use .env
import colors from 'colors';

import connectDB from './config/db.js'; // remember: esmodules NEEDS .extension

// Router files
import productRoutes from './routes/productRoutes.js';

const app = express();

dotenv.config({ path: '../.env' });
connectDB(); // connect to the DB with our config (this would look different (see coffee connect) if not using congfig file)

// Router entrypoints
app.use('/api/products', productRoutes);

/*
 * Unlike in react or other client side esmodules, when we import
 * directories or files from our local development environment (not npm modules like express, etc.)
 * we NEED the .js or other file extension! See line 5 vs line 1
 */

app.get('/', (req, res) => {
  res.send('API running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server started on ${PORT} in ${process.env.NODE_ENV} mode`.magenta // colors from npm
  )
);
