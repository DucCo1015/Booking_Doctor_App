import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRouter from './Routers/auth.js'
import userRouter from './Routers/user.js'
import doctorRouter from './Routers/doctor.js'
import reviewRouter from './Routers/review.js'
import bookingRouter from './Routers/booking.js'



dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
 origin: true,
}

app.get('/', (req, res) => {
 res.send('Api is working')
})

//middleware

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth', authRouter) // domain Api/v1/auth/register
app.use('/api/v1/users', userRouter)
app.use('/api/v1/doctors', doctorRouter)
app.use('/api/v1/reviews', reviewRouter)
app.use('/api/v1/bookings', bookingRouter)



//mongodb

mongoose.set('strictQuery', false) 
const connectDB = async () => {
 try {
    await mongoose.connect(process.env.MONGO_URI,{
       useNewUrlParser: true,
       useUnifiedTopology: true,
    })
    console.log("MongoDB database is connected")

 } catch (error) {
    console.log("MongoDB database is connected failed")                     
 }
}


app.listen(port, () =>{
  connectDB();
  console.log('Server is running on port: '+ port)
})