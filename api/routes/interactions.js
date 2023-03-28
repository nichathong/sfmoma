/*
These are some possible API routes

- POST /interactions: Create a new interaction
- GET /interactions/:id: Get interaction information by ID
- GET /interactions/user/:id: Get all interactions for a user by ID
- GET /interactions/exhibit/:id: Get all interactions for an exhibit by ID

*/

//Example for GET /interactions/:id: Get interaction information by ID
const express = require('express');
const router = express.Router();

// assuming there is an interactions array containing objects with id and data properties
const interactions = [
  { id: 1, data: { art1: 'interaction1' } },
  { id: 2, data: { art2: 'interaction2' } }
];

app.get('/interactions/:id', (req, res) => {
  const id = req.params.id;
  const interaction = interactions.find(interaction => interaction.id === parseInt(id));

  if (!interaction) {
    return res.status(404).send('Interaction not found');
  }

  return res.status(200).send(interaction);
});

module.exports = router;