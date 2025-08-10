const express = require('express')
const app = express()
const PORT = 8383
app.get('/',(req,res) => {
    console.log('Yay I hit an endpoint',req.method)
    res.sendStatus(200)
})
app.get('/dashboard',(req,res) => {
    console.log('Yay I hit an /dashboard endpoint')
    res.send("HI")
})

app.listen(PORT, () => {
    console.log(`Server has started on ${PORT}`)
})