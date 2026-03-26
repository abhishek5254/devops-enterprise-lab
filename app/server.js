const express = require('express')
const app = express()

app.get('/', (req,res)=>{
 res.send("Note: - This is abhishek upadhyay learning CI and CD from scratch, If you are seeing this page that means he is qualified as being a devops enginner, this is being used to test whether pipeline is getting triggered after any changes is being done to the githu part --> Enterprise DevOps Pipeline Running")
})

app.listen(3000)
