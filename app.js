const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Middleware for JSON body
app.use(express.json());

// Define routes
app.post('/contactinfo.html', (req, res) => {
    const { username, password } = req.body;

    // Check if username and password match the expected values
    if (username == 'admin' && password == '123') {
        // Redirect to contactinfo.html on successful authentication
        res.redirect('/contactinfo.html');
    } else {
        res.redirect('/contactinfo.html');
        //res.status(401).json({ message: 'Authentication failed' });
    }
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(port, () => console.log('Server listening on port ' + port));
