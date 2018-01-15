'use strict';

const client = require('twitter');
const OAuth2 = require('OAuth').OAuth2;

// copy pasted code,no idea how to use...

const oauth2 = new OAuth2('8Vk6W8iXRf07mWb1jXwAiDMjc', 'afLtnqd0mIlSzgoYNe4H0DKZW2ayp2VqJDCxewvhc19xF16Xj9', 'https://api.twitter.com/', null, 'oauth2/token', null);

oauth2.getOAuthAccessToken('', {
    'grant_type': 'client_credentials',
  }, function(e, accessToken) {
        console.log(accessToken);
        let uname = 'aaayush_singh';
        let options = {
            hostname: 'api.twitter.com',
            path: `/1.1/statuses/user_timeline.json?screen_name=${uname}`,
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        };

        https.get(options, function(result) {
            let buffer = '';
            result.setEncoding('utf8');
            result.on('data', function(data) {
                buffer += data;
            });
            result.on('end', function() {
                let tweets = JSON.parse(buffer);
                console.log(tweets); // the tweets!
            });
        });
});
