import express, { Request, Response, Router } from 'express';
import DB from '../database'

const router: Router = express.Router();

router.post('/add', async(req: Request, res: Response) => {
    const data = await DB.addRoom(req.body)
    return res.status(200).json({
        status: 200,
        message: data
    });
});

router.get('/get', async(req: Request, res: Response) => {
    const data = await DB.getRoom()
    return res.status(200).json({
        status: 200,
        data: data
    });
});

module.exports = router;