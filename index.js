'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./build/dist/react.production.min.js');
} else {
  module.exports = require('./build/dist/react.development.js');
}
