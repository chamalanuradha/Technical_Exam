const express = require("express");
const {mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const app = express();



//import routes
const programmeRoutes = require('./routes/programmes');
const StudentRoutes = require('./routes/students');
//app middleware
app.use(bodyParser.json());
//route middleware
app.use(programmeRoutes);
app.use(StudentRoutes);

const PORT =8000;
const DB_URL= 'mongodb+srv://user1:user1@new.ggzmr1h.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', true);
mongoose.connect(DB_URL)
.then(()=>{
  console.log("DB connected")
})
.catch((err) =>console.log("DB not connected",err));
app.listen(PORT,()=>{
    console.log(`App is run on ${PORT}...`)
  
})