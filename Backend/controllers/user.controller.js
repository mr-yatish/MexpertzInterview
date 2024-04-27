// Import services
const { userService } = require("../services");

// Import utilities
const { crypto } = require("../utils");

// Import config
const { responseMessages } = require("../configs");

// Controller: Register User
const registerUser = async (req, res) => {
  try {
    const requestData = req.body;
    if (await userService.checkEmailExists(requestData.email)) {
      console.log("Email Already Exists");
      return res.status(200).send({
        hasError: true,
        message: responseMessages.EMAIL_EXISTS,
      });
    }
    // Save User
    const user = await userService.registerUser(requestData);
    return res.status(200).send({
      hasError: false,
      data: user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      hasError: true,
      message: responseMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

// Controller: Login User
const loginUser = async (req, res) => {
  try {
    const userCredential = req.body;
    const user = await userService.getUserByEmail(userCredential.email);
    if (!user) {
      console.log("User Not Found!");
      return res.status(200).send({
        hasError: true,
        data: responseMessages.USER_NOT_FOUND,
      });
    }

    // Validate Hash
    const isHashValid = crypto.validateHash(userCredential.password, user.password.hash, user.password.salt);
    if (!isHashValid) {
      console.log("Incorrect Password");
      return res.status(400).send({
        hasError: true,
        message: responseMessages.INCORRECT_PASSWORD,
      });
    }
    return res.status(200).send({
      hasError: false,
      data: { user: user },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      hasError: true,
      message: responseMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
