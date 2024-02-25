const express = require('express')
const PORT = 5000;

const app = express()

// TEST ROUTE
app.get('/', (req, res)=>{
    res.json({
        message: 'Hello world!'
    })
});


app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
} );