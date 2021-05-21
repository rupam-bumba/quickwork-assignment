const { google } = require("googleapis");

var fs = require("fs");

async function getGtoken(req) {
  console.log("========================================");
  const oauth2Client = new google.auth.OAuth2(
    process.env.GCLIENTID,
    process.env.GCLIENTSECRECT,
    process.env.GREDIRECT
  );

  try {
    const { tokens } = await oauth2Client.getToken(req.query.code);

    console.log(tokens.refresh_token);
    console.log(tokens.access_token);

    let saveGtoken = {
      refresh_token: tokens.refresh_token,
      access_token: tokens.access_token,
    };

    console.log(saveGtoken);
    saveGtokenStr = JSON.stringify(saveGtoken);

    fs.writeFile("././clientCredentials.json", saveGtokenStr, function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  } catch (error) {
    console.log(error);
  }

  return tokens;
}

exports.get_users_credentials = (req, res, next) => {
  const tt = getGtoken(req);
  console.log(tt);

  res.send(
    " <p>  Users Credentials registered now you can post your email from POST:http://localhost:9002/api/send-email <br/>  </p>"
  );
};
