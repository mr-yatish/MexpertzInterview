// Import Models
const { User } = require("../models");

// Import Utils
const { crypto } = require("../utils");

// Function: Register User
async function registerUser(payload) {
  try {
    console.log(payload);
    payload.password = crypto.generateHash(payload.password);
    const user = new User(payload);
    await user.save();
    console.log(`Email: ${payload.email} | Name: ${payload.name}`);
    // delete user.password;
    return user;
  } catch (err) {
    console.log(err);
    return false;
  }
}

// Function: Login User
async function getUserByEmail(email) {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    logger.error(err);
    return false;
  }
}

// Function: Check Email Exists
async function checkEmailExists(email) {
  try {
    let emailExists = false;
    const user = await User.findOne({ email });
    if (user) emailExists = true;

    return emailExists;
  } catch (err) {
    console.log(err);
    return false;
  }
}

module.exports = {
  registerUser,
  getUserByEmail,
  checkEmailExists,
};
