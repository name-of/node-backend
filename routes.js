'use strict';
module.exports = function(app) {
  const controller = require('./controller');

  app.route('/')
    .get(controller.homepage)
    .post(controller.page404);

  app.route('/new_access_token/:userID/:account/:token')
    .get(controller.page404)
    .put(controller.newAccessTok);

  app.route('/schedule_post')
    .post(controller.schedulePost);

  app.use(function(req, res) {
    res.status(404)
      .send({
        error: req.url + ' not found',
        cause: 'api call to invalid endpoint.',
      });
  });
};
