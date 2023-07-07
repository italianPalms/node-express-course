

const express = require('express');
const app = express();
const routes = require('./routes/tasks')


// routes
app.get('/hello', (req, res) => {
res.send('Task Manager App')
})

const port = 3000

app.listen(port, console.log(`servers listening on port ${port}...`))