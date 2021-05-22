# Quickwork Test Assignment -

### Build an API in NodeJS using express to send emails using the Gmail REST API. Do not use the client libraries.

Your application should -

- Obtain a Gmail user's credentials using OAuth 2.0. The OAuth 2.0 process should be initiated by an API call to your server.
- Store the obtained credentials in a file.
- Have an API endpoint to execute send email using the credentials previously stored.
- Include appropriate comments in your code on how to use the APIs written by you.
- Upload the server code to your Github and share the repository link with us. There is no need for a visual interface, only the server code is needed.

***

## Key Roughts 
-   GET : google_login
-   GET : users_credentials
-   POST : send_email

#### GET http://localhost:9002/api/google-login
    This API route response googles Oauth 2.0 consent screen link to get login by users google account.

#### GET http://localhost:9002/api/users-credentials
    This API route save user client credentials in a JSON file 
    On the file, we save  refresh_token, access_token, scope, email.
    (as this assignment does not mention any specific file type so I chose. JSON ) 

#### POST: http://localhost:9002/api/send-email
    This  API route is for send email.
    Json Input
            "to": "", - resiver email address 
            "subject": "", subject of the email
            "text": "" text block of the email
***

# Secrect and credintial
-  In developing precess I use my Personal account to test this API
- As this google app is not verified it will not work for all google account 
  you can contact me for testing
-  remove  Underscore (_) from  _clientCredentials.json file name or create a new clientCredentials.json file by simple copying it 