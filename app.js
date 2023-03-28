const apiRoutes = require('./routes/api');
app.use('/', apiRoutes);
const passport = require('passport');
app.use(passport.initialize());
require('./config/passport')(passport);