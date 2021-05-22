const { google } = require('googleapis');

const googleConfig = {
  clientId: process.env.GCLIENTID,
  clientSecret:  process.env.GCLIENTSECRECT,
  redirect:  process.env.GREDIRECT,
};


function createConnection() {
    return new google.auth.OAuth2(
      googleConfig.clientId,
      googleConfig.clientSecret,
      googleConfig.redirect
    );
  }

  const defaultScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://mail.google.com',

  ];

  
  function getConnectionUrl(auth) {
    return auth.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent', // access type and approval prompt will force a new refresh token to be made each time signs in
      scope: defaultScope
    });
  }

  function urlGoogle() {
    const auth = createConnection(); // this is from previous step
    const url = getConnectionUrl(auth);
    return url;
  }




exports.get_google_login = (req, res, next) => {
    const Gurl = urlGoogle()

    res.send(`<a href="${Gurl}">Login with Google</a>`)
  };

