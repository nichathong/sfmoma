// Import necessary modules

const mongoose = require('mongoose');

// Define the recommendation schema
const recommendationSchema = new mongoose.Schema({
  exhibitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exhibit',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Create and export the recommendation model
module.exports = mongoose.model('Recommendation', recommendationSchema);
