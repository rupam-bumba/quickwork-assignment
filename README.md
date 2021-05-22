



# Quickwork Test Assignment -

## Build an API in NodeJS using express to send emails using the Gmail REST API. Do not use the client libraries.

Your application should -

- Obtain a Gmail user's credentials using OAuth 2.0. The OAuth 2.0 process should be initiated by an API call to your server.
- Store the obtained credentials in a file.
- Have an API endpoint to execute send email using the credentials previously stored.
- Include appropriate comments in your code on how to use the APIs written by you.
- Upload the server code to your Github and share the repository link with us. There is no need for a visual interface, only the server code is needed.

As the next step, we have a test assignment for you to be submitted by , 23rd May 2021 11:59pm.

Please submit the assignment below on the form link -

https://docs.google.com/forms/d/e/1FAIpQLSeQ0CjSs7n-_9X9y_pUuxu9P5BJzVRL4c_TTJy8cb5Fk6E1gg/viewform

Our team will contact you after evaluating your assignment.

Best regards,
Preeti Joshi
Program Manager
Quickwork Technologies Pvt. Ltd.
preeti@quickwork.co

===============================================================================================================================
# Documentation
## key roughts 
-   get : google_login
-   get : users_credentials
-   post : send_email

## google login
    This API route response googles Oauth 2.0 consent screen link to get login by users google account.

## users_credentials
     This API route save user client credentials in a JSON file 
    On the file, we save  refresh_token, access_token, scope, email.
    (as this assignment does not mention any specific file type so I chose. JSON ) 

## send_email
    This  API route is for send email.
### json input    
        "to": "", - resiver email address 
        "subject": "", subject of the email
        "text": "" text block of the email

