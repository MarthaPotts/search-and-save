const express = require('express'); 

const mongoose = require('mongoose'); 
const routes = require('./routes'); 
const app = express(); 
const PORT = process.env.PORT || 3001; 

//middleware
app.use(express.urlencoded( {extended: true})); 
app.use(express.json()); 
//static -> Heroku needs this 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client-build")); 
}
//add routes, both API and view
app.use(routes); 

//connect to mongodb
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactgooglebookssearch"
); 
//start api server
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
}); 