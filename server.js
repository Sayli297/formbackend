const express=require('express')

const cors=require('cors')

const app=express()

const PORT = 8989

var corsOptions={
    origin:'http://localhost:3000'    // domain : abc.com
}

app.use(cors(corsOptions))

// content-type is application/json
app.use(express.json())

 //app.get('/check',(req,res)=>{
  //   res.send('Hiii from Server...')
 //})

const database=require('./app/models')

database.mongoose.connect(database.url)
        .then(()=>{
            console.log('Connected to DB server!!!');
        }) 
 require("./app/routes/user.routes")(app)
// console.log(module);

app.listen(PORT,()=>{
    console.log(`Node server started on PORT Number : ${PORT}`);
})