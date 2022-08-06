import { AppDataSource } from "./data-source";
import * as express from 'express';
import {Application, json} from 'express';
import * as cors from 'cors';
import * as router from './routes';

AppDataSource.initialize().then(async () => {

    const app: Application = express();
    app.use(cors());
    app.use(json());
    app.use('/', router);

    app.listen(4000, ()=> {
        console.log("running");
    })

}).catch(error => console.log(error))
