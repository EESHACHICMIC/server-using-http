const express = require('express');
const app = express();
const port = 5000;
const student = require('./student')

app.get('/', (req, res) => {
    res.json({ 'message': "Api is working.." })
})

app.get('/student', (req, res) => {
    res.json(student)
})

app.get('/student/:id', (req, res) => {
    res.send(req.params)
    console.log(req.params);
})

app.get('/flight/:from-:to', (req, res) => {
    res.send(req.params)
})

app.listen(port, () => { console.log(`Server is running at ${port}`) })