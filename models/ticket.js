// Require mongoose
const mongoose = require('mongoose');

// Define the Ticket schema
const TicketSchema = new mongoose.Schema({
  ticketNumber: {
    type: String,
    required: true
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  exhibitionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exhibition',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// Create the Ticket model and export it
module.exports = mongoose.model('Ticket', TicketSchema);
