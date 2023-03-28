// Import necessary packages
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validLogin = require("../../validation/login")
const validRegister = require("../../validation/register")

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    email: req.user.email,
  })
})

// Define the register route
router.post('/register', async (req, res) => {
  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }
    
    // Hash the password and create a new user
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      preferredArtist: req.body.preferredArtist
      // Add any additional user fields here
    });
    
    // Save the new user to the database
    const savedUser = await newUser.save();
    
    // Send a response with the newly created user object
    res.status(201).json(savedUser);
  } catch (err) {
    // Handle any errors
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /login route to log in a user
router.post("/login",(req,res)=>{
  const {errors, isValid} = validLogin(req.body);
  if(!isValid){
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password= req.body.password;
  User.findOne({ email })
  .then(user=>{
    if(!user){
      // if the user does not exist
      return res.status(404).json({email: 'This user does not exist'});
    }
    // validate password
    bcrypt.compare(password, user.password)
     .then(isMatch =>{
       if(isMatch){
        const payload ={
          id: user.id,
          email: user.email
        }
        jwt.sign(
          payload,
          keys.secretOrKey,
          {expiresIn: 3600},
          (err, token) => {
          res.json({
              success: true,
              token: 'Bearer ' + token
          });
        });

       }else{
        return res.status(404).json({password: 'Invalid Password'});
       }
     })
  })
})

// Get user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user information by ID
router.patch("/:id", passport.authenticate('jwt', {session: false}),(req,res)=>{
   const updateUser =new User({
      _id: req.params.id,
      firstname: req.user.firstname,
      lastname: req.user.lastname,
      email: req.user.email,
      password: req.user.password,
   })

   User.updateOne({_id: req.params.id}, updateUser)
   .then(user => res.json(user))
    .catch(err =>
        res.status(404).json({ nouserfound: 'update failed' })
    )

});

module.exports = router;