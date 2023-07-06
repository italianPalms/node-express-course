

const express = required('express');
const app = express();


// routes
app.get('/hello', (req, res) => {
res.send('Task Manager App')
})

const port = 3000

app.listen(port, console.log('server s listening on port ${port}...'))