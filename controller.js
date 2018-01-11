const accessTokenModify = require('./api_actions/modify-access-token');

exports.homepage = function(req, res) {
    res.status(200)
    .send('Homepage');
};

exports.page404 = function(req, res) {
    res.sendStatus(404);
};

exports.newAccessTok = (req, res) => {
    accessTokenModify.token(req, function(err, response) {
        if (err) {
            console.log(__filename.split('/').pop() + err);
            res.sendStatus(500);
            // add some mechanism to notify admins about error
        } else {
            res.status(200)
            .send(req.params.account + req.params.token);
            console.log(__filename.split('/').pop() + ' Token updated');
        }
    });
};