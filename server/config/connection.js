const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Check if the environment is production, then it should use the .env file
const isProduction = process.env.NODE_ENV === 'production';

const DB_URI = isProduction 
  ? process.env.MONGODB_URI 
  : 'mongodb+srv://anthonylieu:gatomagnet@freecluster.uhmu1zo.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connection events
const db = mongoose.connection;
db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
