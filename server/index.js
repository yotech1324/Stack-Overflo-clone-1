import express  from "express";
import mongoose from "mongoose";
import cors from 'cors'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app = express();

app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
app.use(cors())

app.get('/',(req, res) =>{
    res.send("this is a stack overflow clone api")
})

app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)


const CONNECTION_URL = "mongodb+srv://ysahu2539:Ysahu1324@stack-overflow-clone.w2rniqc.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true , useUnifiedTopology:true})
.then(() => app.listen(PORT, () => {console.log(`server is running on PORT ${PORT}`)}))
.catch((err) => console.log(err.message))


const PORT = process.env.PORT || 5000
      