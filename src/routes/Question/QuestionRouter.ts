import express, { Request, Response } from 'express';
import { questionController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    questionController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
    questionController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
    questionController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
    questionController.delete(req, res);
});