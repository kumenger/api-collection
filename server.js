const express=require('express')
const cros=require('cors')
const bodyParser=require('body-parser')
const serchRouter=require('./routes/serachRouts')
const app=express()
app.use(cros())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const path =require('path')
app.use('/api',serchRouter)

const Port=process.env.Port||5000
app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(Port,()=>{
    console.log('running on port '
    +" "+ Port)
})
