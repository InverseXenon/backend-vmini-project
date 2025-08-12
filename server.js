const express = require('express')
const app = express()
const PORT = 8383

let data = {
    users: ['Piyush']
}

// Middleware
app.use(express.json())

// Website Endpoints
app.get('/',(req,res) => {
    res.send(`
        <body style="background:pink; color: blue;">
            <h1>Data:</h1>
                <p>${JSON.stringify(data)}</p>
                <a href ="/dashboard">Dashboard</a>
        </body>
        `)
})
app.get('/dashboard',(req,res) => {
    console.log('User requested the homepage.')
    res.send(`
        <body> 
        <a href ="/">Homepage</a>
        <h1>Dashboard</h1>
        </body> 
        <script> console.log('This is my Script')</script>   
        `)
})


// API Endpoints
app.get('/api/data', (req,res) =>{
    console.log(`I am accessing the data.`)
    res.send(data)
})

app.post('/api/data', (req,res) =>{
    // someone wants to create a user(for example they want to click a sign up button.)

    const newEntry = req.body
    console.log(newEntry)
    data.users.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req,res) => {
    data.users.pop()
    console.log('We deleted the last element of the array')
    res.sendStatus(203)
})

app.listen(PORT, () => {
    console.log(`Server has started on ${PORT}`)
})