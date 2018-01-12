const firebase = require('firebase-admin');
const serviceAccount = require('./../../config/private/serviceAccountKey.json');

// Initialize Firebase
exports.initFirebase = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://name-of.firebaseio.com',
  });

  //  initialize db
const db = firebase.database();
let ref = db.ref('userData');


/*   adding dataq to db test
let usersRef = ref.child('users');
usersRef.set({
  alanisawesome: {
    date_of_birth: 'June 23, 1912',
    full_name: 'Alan Turing',
  },
  gracehop: {
    date_of_birth: 'December 9, 1906',
    full_name: 'Grace Hopper',
  },
});

*/

// testing firebase connection - not useful at present .
//  require('./user-register');
