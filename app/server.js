const express = require('express')
const app = express()

app.get('/', (req,res)=>{
 res.send("Note: - This is abhishek learning CI and CD from scratch, If you are seeing this page that means he is qualified as being a devops enginner --> Enterprise DevOps Pipeline Running")
})

app.listen(3000)
