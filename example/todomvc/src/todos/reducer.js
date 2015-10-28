import SI          from 'seamless-immutable'
import easyCrud    from 'redux-easy-crud'
import actionTypes from './actionTypes'
import bows        from 'bows'

const baseReducers = easyCrud.reducersFor('todos')
const log = bows('todos--reducer')

function reducer(state=SI([]), action) {
  switch (action.type) {
  default:
    return baseReducers(state, action)
  }
}

export default reducer
