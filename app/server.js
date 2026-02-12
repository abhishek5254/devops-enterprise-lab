const express = require('express')
const app = express()

app.get('/', (req,res)=>{
 res.send("Enterprise DevOps Pipeline Running")
})

app.listen(3000)
