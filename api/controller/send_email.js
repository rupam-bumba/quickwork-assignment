const { google } = require("googleapis");  
const nodemailer = require("nodemailer"); 
var Credentials = require("../../clientCredentials.json");


const googleConfig = {
  clientId: process.env.GCLIENTID,
  clientSecret: process.env.GCLIENTSECRECT,
  redirect: process.env.GREDIRECT,
  refresh: Credentials.refresh_token,
};

const oauth2clint = new google.auth.OAuth2(
  googleConfig.clientId,
  googleConfig.clientSecret,
  googleConfig.redirect
);

oauth2clint.setCredentials({ refresh_token: Credentials.refresh_token });

async function sendGMail(res) {
console.log(res.body);
  try {
    const accesstoken = await oauth2clint.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "oauth2",
        user: Credentials.email,
        clientId: process.env.GCLIENTID,
        clientSecret :  process.env.GCLIENTSECRECT,
        refreshToken: Credentials.refresh_token,
        accessToken: accesstoken,
      },
    });

    const mailOption = {
      from: Credentials.email,
      to: res.body.to,
      subject: res.body.subject,
      text: res.body.text,
    };
    const result = await transport.sendMail(mailOption);
    return result;
  } catch (error) {
    return error;
  }
}

exports.post_send_email = (req, res, next) => {

  sendGMail(req)
    .then((result) => {
      console.log(result);
      res.status(200).json({
        result
      });
    })
    .catch((error) => {
      console.log(error);
    });

};
