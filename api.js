const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');



// POST request to resgister a user
router.post('/register', (req, res) => {
  // handle POST request logic
});

// POST request to login
router.post('/login', (req, res) => {
  // handle POST request logic
});

// POST request - purchase a ticket and associate it with the user's account
router.post('/tickets', (req, res) => {
  // handle POST request logic
});


// DELETE request - delete users profile
router.delete('/users/:id', (req, res) => {
  // handle DELETE request logic
});

module.exports = router;
