const routes = require('next-routes')();

// routes.add('...', '...');
routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show');
module.exports = routes;