const firebase = require('firebase-admin');

let newUser = function() {
    firebase.auth().createUser({
        email: 'user3@example.com',
        emailVerified: false,
        phoneNumber: '+14234567890',
        password: 'secret1Password',
        displayName: 'philip Doe',
        disabled: false,
      })
        .then((userRecord) => {
          console.log('Successfully created new user:', userRecord.uid);
        })
        .catch((error) => {
          console.log('Error creating new user:', error);
        });
};

      newUser( )
