 import express from 'express'
import path from 'path'
 import helmet from 'helmet';
import routes from './routes'
import { errorHandller, notFoundRequest } from './routes/errorhandller';

 const server = express()

 server.use(helmet());
 server.use(express.json());
 server.use(express.urlencoded({extended: true}));
 server.use(express.static(path.join(__dirname, '../public')))


server.use('/', routes)
server.use(notFoundRequest)
server.use(errorHandller)


 server.listen(3000, ()=> {
    console.log('server online porta:3000');
    
 })