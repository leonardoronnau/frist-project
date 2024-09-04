import  express from "express";

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({produtos: []})
});

routes.get('/:id', (req,res) => {
    const {id} = req.params
    res. json({ id, name : 'teclado', price : 12313131})
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