const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());    // allows cross-origin requests
app.use(express.json());

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Swabah' },
    { id: 3, name: 'Hafeex' },
]

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})