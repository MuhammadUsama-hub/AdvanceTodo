import express from "express";
import {connectMongoDb} from "./connections.js"
import {router} from './routes/tasks.js'

const app = express();
const port = 8080;

//database connection
connectMongoDb('mongodb://localhost:27017/TodoApp').then(()=>console.log('MongoDb connected'))
.catch(err=>console.log('MongoDb Not Connect',err));  

//middleWare
app.use(express.urlencoded({extended:true}))
// routes
app.use('/api/tasks',router)

app.listen(port, () => {
  console.log(`Server has started @ ${port}`);
});
