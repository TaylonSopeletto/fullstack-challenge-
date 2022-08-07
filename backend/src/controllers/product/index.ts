import {Request, Response} from 'express';
import {AppDataSource} from '../../data-source'
import {Product} from '../../entity/Product';

const productRepository = AppDataSource.getRepository(Product)

export const create = async (req: Request, res: Response) => {
    try{
        const product = await productRepository.save({name: req.body.name, price: req.body.price, previousPrice: req.body.previousPrice})
        res.status(201).json({product});
    }catch(err){
        res.status(400).json({error: err.driverError})
    }
}

export const list = async (req: Request, res:Response) => {
    const products = await productRepository.find()
    res.status(200).json({results: products});
}

export const update = async (req: Request, res: Response) => {
    try{
        const product = await productRepository.findOneBy({id: req.params.id})
        product.name = req.body.name
        product.previousPrice = req.body.previousPrice
        product.price = req.body.price
        productRepository.save(product)
        res.status(200).json({product});
    }catch(err){
        res.status(400).json({error: "product not found"});
    }
}

export const remove = async (req: Request, res: Response) => {

    try{
        const product = await productRepository.findOneBy({id: req.params.id})
        if(product){
            productRepository.delete(product)
            res.status(200).json({product});
        }else{
            res.status(400).json({error: "product not found"});
        }
        
    }catch(err){
        res.status(400).json({error: "product not found"});
    }
    
}
