import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { recipeRouter } from './routers/recipe.router.js';

dotenv.config();
const PORT = process.env.PORT || 1111;

const app = express();

app.use(express.json())
app.use(cors());

app.use('/recipes', recipeRouter);


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

