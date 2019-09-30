import express,{Application,Request,Response,NextFunction} from 'express'
import bodyParser from 'body-parser'


const app:Application = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.send('REST API server')
})

app.listen(8989,()=>{
    console.log('Server runing...')
})