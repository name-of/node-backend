'use strict';
module.exports = function(app) {
  const controller = require('./controller');

  app.route('/')
    .get(controller.homepage)
    .post(controller.page404);
};
