'use strict';

var Twitter = require('twitter');
var OAuth2 = require('oauth').OAuth2;
var https = require('https');
var curl = require('curl');

// move key, secret to env file

var oauth2 = new OAuth2(process.env.TWITTER_USER_KEY, process.env.TWITTER_USER_SECRET, 'https://api.twitter.com/', null, 'oauth2/token', null);

oauth2.getOAuthAccessToken('', {
    'grant_type': 'client_credentials'
}, function (e, accessToken) {
    console.log(accessToken);
    var uname = 'aaayush_singh';

    // let client = new Twitter({
    //     consumer_key: 'process.env.TWITTER_USER_KEY',
    //     consumer_secret: 'process.env.TWITTER_USER_SECRET',
    //     bearer_token: accessToken,
    // });

    // client.get('favorites/list', function(error, tweets, response) {
    //     if (error) console.log(error.errors);
    //     console.log(tweets); // The favorites.
    //     // console.log(response); // Raw response object.
    // });
    var options = {
        hostname: 'api.twitter.com',
        path: '/1.1/statuses/update.json?status=Hello%20World.%20%23testing',
        headers: {
            Authorization: 'Bearer ' + accessToken
        },
        method: 'POST'
    };

    // POST https://api.twitter.com/1.1/statuses/update.json?status=Maybe%20he%27ll%20finally%20find%20his%20keys.%20%23peterfalk

    https.request(options, function (result) {
        console.log('posting...');
        console.log(result);
        // let buffer = '';
        // result.setEncoding('utf8');
        // result.on('data', function(data) {
        //     buffer += data;
        // });
        // result.on('end', function() {
        //     let tweets = JSON.parse(buffer);
        //     console.log(tweets); // the tweets!
        // });
    });
});

// 69 \[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]
// PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"