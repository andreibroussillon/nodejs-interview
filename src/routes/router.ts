import express, { Router, Request } from 'express';
import { helloController } from '../controllers/hello.controller';

export const router: Router = express.Router();

router.get('/hello', helloController);
