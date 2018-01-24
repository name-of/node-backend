'use strict';

var accessTokenModify = require('./helpers/modify-access-token');
var postScheduler = require('./helpers/schedule-post');

exports.homepage = function (req, res) {
    res.status(200).send('Homepage');
};

exports.page404 = function (req, res) {
    res.sendStatus(404);
};

exports.newAccessTok = function (req, res) {
    accessTokenModify.token(req, function (err, response) {
        if (err) {
            console.log(__filename.split('/').pop() + err);
            res.sendStatus(500);
            // add some mechanism to notify admins about error
        } else {
            res.status(200).send(req.params.account + req.params.token);
            console.log(__filename.split('/').pop() + ' Token updated');
        }
    });
};

exports.schedulePost = function (req, res) {
    postScheduler.schedule(req, function (err, response) {
        if (err) {
            console.log(__filename.split('/').pop() + err);
            res.sendStatus(500);
            // add some mechanism to notify admins about error
        } else {
            res.status(200).send(req.params);
            console.log(__filename.split('/').pop() + ' Post Scheduled');
        }
    });
};