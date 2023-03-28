// this will be where we setup JSON web token so that our users can actually sign in and access protected routes

module.exports = {
  mongoURI: 'mongodb://<DBUser>:<password>@cluster.mongodb.net/test?retryWrites=true&w=majority',
  secretOrKey: 'secret'  // can generate random key using https://randomkeygen.com/
}