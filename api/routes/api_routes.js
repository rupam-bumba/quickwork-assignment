
const express = require("express");
const router = express.Router();



// POST send_email
const send_email = require("../controller/send_email");
router.post("/send-email", send_email.post_send_email);

// get users_credentials"
const users_credentials = require("../controller/users_credentials");
router.get("/users-credentials", users_credentials.get_users_credentials);

// POST users_credentials"
const google_login = require("../controller/google_login");
router.get("/google-login", google_login.get_google_login);




module.exports = router;