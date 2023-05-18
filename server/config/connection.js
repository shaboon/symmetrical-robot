const mongoose = require('mongoose');

// Check if the environment is production, then it should use the .env file
const isProduction = process.env.NODE_ENV === 'production';

const DB_URI = isProduction 
  ? process.env.MONGODB_URI 
  : 'mongodb://anthonylieu:gatomagnet@cluster0.mongodb.net/interstellar-index';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
