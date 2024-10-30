import { Router } from "express";
import { createWashroom, findAllWashrooms, findWashroomById } from "./washroomData.js";

const router = Router()

// get a particular washrooms
router.get('/:id', async function (req, res) {
    const id = req.params.id
    console.log(req.params)
    try {
        const washrooms = await findWashroomById(id)
        if (washrooms === null) {
            res.sendStatus(404)
        }
        else {
            res.send(washrooms)
        }
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// list all washrooms
router.get('/', async function (req, res) {
    try {
        console.log(req.query)
        console.log('name is:' + req.query.name)
        const washrooms = await findAllWashrooms()
        res.send(washrooms)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post('/',async (req, res) => {
    console.log("Incoming POST on /api/washrooms with data")
    console.log(req.body)
    if(req.body.name || req.body.coordinates || req.body.address){
        const newWashroom = await createWashroom(req.body)
        //await createHero(req.body)
        //res.sendStatus(200)
        res.send(newWashroom) // returns hero to be added using POST Api
    } else {
        return res.sendStatus(400)
    }  

});

export default router