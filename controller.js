exports.homepage = function(req, res) {
    res.status(200)
    .send('Homepage');
};

exports.page404 = function(req, res) {
    res.status(404)
    .send('Not Allowed!');
};
