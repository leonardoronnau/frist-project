import  express from "express";

const routes = express.Router();

routes.get('/produtos', (req, res) => {
    res.json({produtos: []})
});




routes.get('/ping', (req, res)=> {
   
    res.send('pong')
})
routes.get('/voos/:from/:to',  (req, res)=> {
    const {from, to } = req.params

    res.json({
        flight : {
            from : from.toUpperCase(),
            to: to.toUpperCase(),
            price : 1232311,

        }
    })
    })


  

export default routes