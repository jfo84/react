'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./build/dist/react-dom.production.min.js');
} else {
  module.exports = require('./build/dist/react-dom.development.js');
}
