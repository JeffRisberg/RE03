const exports = require('./client');
exports.loggingMiddleware = require('./logging-middleware').default;

module.exports = exports;
