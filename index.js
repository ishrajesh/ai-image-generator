const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()


const app = express()


// Enable body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Set static folder 
app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai',require('./routes/openaiRoutes'))




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server running on PORT: ${PORT}`) })