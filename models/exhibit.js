// Define the Exhibit schema
const exhibitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  // Other properties
});

// Create the Exhibit model
const Exhibit = mongoose.model('Exhibit', exhibitSchema);

// Export the Exhibit model
module.exports = Exhibit;
