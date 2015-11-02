var _                 = require('lodash');
var common            = require('../common');
var siu               = require('siu');
var SI                = require('seamless-immutable');

function success(config, current, record) {
  var reducerName = 'updateStart';

  record = common(config, current, record, reducerName);

  record = SI( record)

  // replace record
  return siu.a.merge(current, record, config.key);
}

module.exports = success;
