// Pseudocode for User schema
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create User model from schema
const User = mongoose.model('User', userSchema);

// Export User model
module.exports = User;
