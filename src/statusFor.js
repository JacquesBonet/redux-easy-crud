var actionTypesFor  = require('./actionTypesFor');
var SI              = require('seamless-immutable');
var _               = require('lodash');

var fetchSuccess    = require('./reducers/fetch/success');
var createSuccess   = require('./reducers/create/success');
var updateSuccess   = require('./reducers/update/success');
var deleteSuccess   = require('./reducers/delete/success');
var fetchStart      = require('./reducers/fetch/start');
var fetchError      = require('./reducers/fetch/error');
var createStart     = require('./reducers/create/start');
var createError     = require('./reducers/create/error');
var updateStart     = require('./reducers/update/start');
var updateError     = require('./reducers/update/error');
var deleteStart     = require('./reducers/delete/start');
var deleteError     = require('./reducers/delete/error');

function statusFor(resourceName, args) {

  var actionTypes = actionTypesFor(resourceName);

  return function status(state, action) {
    state = state || SI([]);

    switch (action.type) {

      case actionTypes.fetchStart:
        return action;

      case actionTypes.fetchSuccess:
        return action;

      case actionTypes.fetchError:
        return action;

      case actionTypes.createStart:
        return action;

      case actionTypes.createSuccess:
        return action;

      case actionTypes.createError:
        return action;

      case actionTypes.updateStart:
        return action;

      case actionTypes.updateSuccess:
        return action;

      case actionTypes.updateError:
        return action;

      case actionTypes.deleteStart:
        return action;

      case actionTypes.deleteSuccess:
        return action;

      case actionTypes.deleteError:
        return action;

      default:
        return state;
    }

  }

}

module.exports = statusFor;
