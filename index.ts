import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan'
import * as process from 'process';

const PORT_NUMBER: number = process.env.PORT ? +process.env.PORT : 3000;

const app = express();

app.use(express.json())
app.use(morgan('dev'))

app.get('/hello', (req: Request, res: Response, next: NextFunction) => {
	return res.status(200).json({
		success: true
	})
})

app.listen(PORT_NUMBER, () => {
	console.log(`app listening on ${PORT_NUMBER}`);
})
