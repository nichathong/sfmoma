const express = require('express');
const router = express.Router();
const Exhibit = require('../../models/Exhibit');

// Get all exhibits
router.get('/', async (req, res) => {
  try {
    const exhibits = await Exhibit.find();
    res.json(exhibits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get exhibit by id
app.get('/api/exhibits/:id', async (req, res) => {
  try {
    const exhibit = await Exhibit.findById(req.params.id);
    if (!exhibit) {
      return res.status(404).json({ message: 'Opps! Seem like the exhibit does not exist' });
    }
    res.json(exhibit);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
