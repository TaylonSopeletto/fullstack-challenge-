import {Router, Request, Response} from 'express';
const router: Router = Router();
import * as product from './product';

router.use('/product', product);

export = router;