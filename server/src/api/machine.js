import {Router} from 'express';
import productData from '../db/productData.json'

const router = Router()

router.get('/', (req, res) => {
  try {
    // console.log(productData)
    res.send(productData)
  } catch (error) {
    console.log('productData')
  }
})

export default router;