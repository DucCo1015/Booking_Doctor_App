import { updateDoctor, deleteDoctor, getSingleDoctor,getAllDoctor,getDoctorProfile } from '../controllers/doctorController.js'
import express from 'express'
import {authenticate, restrict} from '../auth/verityToken.js' 
import  reviewRouter from './review.js'

const router  = express.Router()

//nested route
router.use("/:doctorId/reviews", reviewRouter)

router.get('/', getAllDoctor)
router.get('/:id', getSingleDoctor)
router.put('/:id',authenticate,restrict(["doctor"]),updateDoctor)
router.delete('/:id',authenticate,restrict(["doctor"]), deleteDoctor)
router.get('/profile/me',authenticate,restrict(["doctor"]), getDoctorProfile)
export default router