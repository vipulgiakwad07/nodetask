const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  company_name: String,
  age: Number,
  city: String,
  state: String,
  zip: Number,
  email: String,
  web: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
