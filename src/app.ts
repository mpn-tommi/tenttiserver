import express from 'express';
import { questionRouter } from './routes';
import morgan from 'morgan'

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/questions', questionRouter)

app.use((req, res)=>{
    res.status(404);
    res.json({message: 'Page not found'});
})

export default app;