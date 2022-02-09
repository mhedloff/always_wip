import express, { NextFunction, Request, Response } from 'express';

const PORT_NUMBER: number = 3000;

const app = express();

app.get('/hello', (req: Request, res: Response, next: NextFunction) => {
	return res.status(200).json({
		success: true
	})
})

app.listen(PORT_NUMBER, () => {
	console.log(`app listening on ${PORT_NUMBER}`);
})
