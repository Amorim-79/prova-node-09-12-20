import express from 'express';
import cors from 'cors';
import routes from './routes'
import { errors } from 'celebrate'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Errors do Celebrate
app.use(errors());

app.use('*', (req, res) => res.status(404).json({ error: 'Not Found' }));

app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    return res.status(500).json({ error: error.message });
});

export default app;