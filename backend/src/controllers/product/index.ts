import {Request, Response} from 'express';
import {AppDataSource} from '../../data-source'
import {Product} from '../../entity/Product';

const productRepository = AppDataSource.getRepository(Product)

export const create = async (req: Request, res: Response) => {
    const product = await productRepository.save({name: req.body.name, price: req.body.price, previousPrice: req.body.previousPrice})
    res.status(201).json({product});
}

export const list = async (req: Request, res:Response) => {
    const products = await productRepository.find()
    res.status(200).json({results: products});
}

export const update = async (req: Request, res: Response) => {

    const product = await productRepository.findOneBy({id: req.params.id})

    if(!product){
        res.status(400).json({error: "product not found"});
    }

    product.name = req.body.name
    product.previousPrice = req.body.previousPrice
    product.price = req.body.price
    productRepository.save(product)
    res.status(200).json({product});
    
}

export const remove = async (req: Request, res: Response) => {

    const product = await productRepository.findOneBy({id: req.params.id})

    if(!product){
        res.status(400).json({error: "product not found"});
    }
    
    productRepository.delete(product)
    res.status(200).json({product});
}
