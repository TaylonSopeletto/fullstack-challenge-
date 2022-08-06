import {Router, json} from 'express';
import {list, create, update, remove} from '../../controllers/product'
const router: Router = Router();

router.get('/', list);
router.post('/', create);
router.put('/:id/', update);
router.delete('/:id/', remove);

export = router;