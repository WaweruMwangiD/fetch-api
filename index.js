const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send("Hello helooo!!!")
})

const courses = [
    {id: 1, name: "course1"},
    {id: 1, name: "course1"},
    {id: 1, name: "course1"},
    {id: 1, name: "course1"},
]

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send("Course not found")
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening to port ${port} ...`)
})
