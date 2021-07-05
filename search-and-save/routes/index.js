const path = require('path'); 
const router = require('express').Router(); 
const apiRoutes = require('./api'); 

//API routes 
router.use('/api', apiRoutes); 

//if no API routes match, send the React app
router.use( (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html")); 
}); 
//that's why I need 'client' VSC...let me make it will ya? 
module.exports = router; 