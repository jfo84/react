'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./build/dist/react-dom-server.browser.production.min.js');
} else {
  module.exports = require('./build/dist/react-dom-server.browser.development.js');
}
