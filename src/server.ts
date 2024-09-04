 import express from 'express'
import path from 'path'
 import helmet from 'helmet';
import routes from './routes'

 const server = express()

 server.use(helmet());
 server.use(express.json());
 server.use(express.urlencoded({extended: true}));
 server.use(express.static(path.join(__dirname, '../public')))


server.use('/', routes)

server.get('/', (req, res)=> {
    res.send('on')
})



 server.listen(3000, ()=> {
    console.log('server online porta:300');
    
 })