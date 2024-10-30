import { Router } from "express";

const router = Router()

router.get('/western', (req, res) => {
    res.send('Here is yer data!')
})

router.get('/pirate', (req, res) => {
    res.send('RRRRRRR!')
})

export default router