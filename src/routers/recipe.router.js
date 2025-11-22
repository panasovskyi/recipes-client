import express from 'express';
import { recipeController } from '../controllers/recipe.controller.js';
import { catchError } from '../utils/catchError.js';

export const recipeRouter = express.Router();

recipeRouter.post('/create', catchError(recipeController.create));
recipeRouter.get('/', catchError(recipeController.getAll));