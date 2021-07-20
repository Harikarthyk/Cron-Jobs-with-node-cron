const express = require('express') ;
const app = express();
//Import the cronJob in server Page
const cronJobs = require('./cronJob');

app.get('/',(req,res) => {
    return res.send('Server is running successfully...');
})

const PORT = process.env.PORT || 5050 ;

app.listen(PORT , () => console.log(`Server is running in PORT ${PORT}`))