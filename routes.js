'use strict';
module.exports = function(app) {
  const controller = require('./controller');

  app.route('/')
    .get(controller.homepage)
    .post(controller.page404);

  app.route('/new_access_token/:account/:token')
    .get(controller.page404)
    .put(controller.newAccessTok);
};
