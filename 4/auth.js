const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

// JWT authentication middleware
function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Missing token' });
        }

        jwt.verify(token, 'secret_key', (err, user) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({ message: 'Token expired' });
                } else {
                    return res.status(403).json({ message: 'Invalid token' });
                }
            }

            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

// Protected endpoint example
app.get('/protected', authenticateJWT, (req, res) => {
    res.send('Access granted');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
