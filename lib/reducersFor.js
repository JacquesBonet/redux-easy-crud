var actionTypesFor  = require('./actionTypesFor');
var SI              = require('seamless-immutable');
var _               = require('lodash');

var fetchSuccess    = require('./reducers/fetch/success');
var createSuccess   = require('./reducers/create/success');
var updateSuccess   = require('./reducers/update/success');
var deleteSuccess   = require('./reducers/delete/success');

function reducersFor(resourceName, args) {
  if (resourceName == null) throw new Error('reducersFor: Expected resourceName');

  args = args || {};

  var defaults    = {
    key:          'id',
    resourceName: resourceName,
  };

  var config      = _.defaults(args, defaults);

  return function reducers(state, action) {
    state = state || SI([]);

    if (action == null) throw new Error(resourceName + ' reducers: Expected action');

    var actionTypes = actionTypesFor(resourceName);
    var record      = action.record;

    switch (action.type) {

      case actionTypes.fetchSuccess:
        return fetchSuccess(config, state, action.records);

      case actionTypes.createSuccess:
        return createSuccess(config, state, record, action.cid);

      case actionTypes.updateSuccess:
        return updateSuccess(config, state, record);

      case actionTypes.deleteSuccess:
        return deleteSuccess(config, state, record);

      default:
        return state;
    }
  }
}

module.exports = reducersFor;
