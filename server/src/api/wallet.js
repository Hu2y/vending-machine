import {Router} from 'express';
import walletData from '../db/walletData.json'

const router = Router()

router.get('/', (req, res) => {
  try {
    // console.log(productData)
    res.send(walletData)
  } catch (error) {
    console.log('walletData')
  }
})

export default router;