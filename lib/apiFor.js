import {BEGIN, COMMIT, REVERT} from 'optimist';
import request from 'then-request';
import actionTypesFor from './actionTypesFor';
import assertNotArray from './utils/assertNotArray';
import invariant  from 'invariant'

let nextTransactionID = 0;

export default function (store) {
  return next => action => {
    if (action.type !== 'ADD_TODO') {
      return next(action);
    }
    let transactionID = nextTransactionID++;
    next({
      type: 'ADD_TODO',
      text: action.text,
      optimist: {type: BEGIN, id: transactionID}
    });
    request('POST', '/add_todo', {text: action.text}).getBody().done(
      res => next({
        type: 'ADD_TODO_COMPLETE',
        text: action.text,
        response: res,
        optimist: {type: COMMIT, id: transactionID}
      }),
      err => next({
        type: 'ADD_TODO_FAILED',
        text: action.text,
        error: err,
        optimist: {type: REVERT, id: transactionID}
      })
    );
  }
};
