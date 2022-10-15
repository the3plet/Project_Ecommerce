const express = require('express')
const app = express()
const cors = require('cors')

const products = [
    {
        name:"Boat Basshead",
        price:"$33"
    },
    {
        name:"Boat Rockerz",
        price:"$55"
    },{
        name:'boAt Airdopes 281 Pro',
        price:'$69'
    }
]

app.use(cors())
app.use(express.static('static'))
app.use(express.json())

app.get('/info',(req,res)=>{
res.json(products)
})

module.exports = app