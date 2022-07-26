import compression from 'compression';
import cors from 'cors';
import { json, Request, Response, Router, urlencoded } from 'express';
import helmet from 'helmet';

export default function (): Router {
    const router = Router();
    const api = Router();

    router.get('/', (req: Request, res: Response) => {
        res.status(200).json({
            message: 'Success started server!',
            status: true,
        });
    });

    api.use(cors({ origin: '*' }))
        .use(json({ limit: '100mb' }))
        .use(urlencoded({ extended: true, limit: '100mb' }))
        .use(helmet())
        .use(compression());

    router.use('/api/v1', api);

    return router;
}
