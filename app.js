//https://dal.brightspace.com/d2l/le/content/250793/viewContent/3445551/View
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Sample user data
let users = [
    { email: 'abc@abc.ca', firstName: 'ABC', id: '5abf6783' },
    { email: 'xyz@xyz.ca', firstName: 'XYZ', id: '5abf674563' }
];

// Middleware
//https://expressjs.com/en/resources/middleware/body-parser.html
app.use(bodyParser.json());

// GET request to retrieve all users
app.get('/users', (req, res) => {
    res.status(200).json({ message: 'Users retrieved', success: true, users });
});

// POST request to add a new user with id generator
app.post('/add', (req, res) => {
    //https://paulius-repsys.medium.com/simplest-possible-way-to-generate-unique-id-in-javascript-a0d7566f3b0c
    const id = Math.random().toString(36).substr(2, 10);
    const newUser = req.body;
    newUser.id = id;

    if (newUser?.email && newUser?.firstName) {
        users.push(newUser);
        res.status(201).json({ message: 'User added', success: true });
    }
    else {
        res.status(500).json({ message: "Error" })

    }

});

// PUT request to update an existing user
app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    let userFound = false;
    if (updatedUser?.email || updatedUser?.firstName) {
        users = users.map(user => {
            if (user.id === id) {
                userFound = true;
                return { ...user, ...updatedUser };
            }
            return user;
        });
        if (userFound) {
            res.status(200).json({ message: 'User updated', success: true });
        } else {
            res.status(404).json({ message: 'User not found', success: false });
        }

    }
    else {
        res.status(500).json({ message: "Error" })
    }

});

// New GET request to retrieve a single user by ID
//https://stackoverflow.com/questions/53520401/express-server-get-request-userid
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        });
    }

    res.status(200).json({
        success: true,
        user: user
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
