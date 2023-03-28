// interaction model

// define mongoose model schema for interaction
const interactionSchema = new mongoose.Schema({
  exhibitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exhibit'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  duration: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0
  },
  feedback: {
    type: String
  }
});

// create a mongoose model based on the schema
const Interaction = mongoose.model('Interaction', interactionSchema);
