import SI          from 'seamless-immutable'
import reduxCrud   from 'redux-easy-crud'
import actionTypes from './actionTypes'

const baseReducers = reduxCrud.statusFor()

function status(state=SI([]), action) {
  switch (action.type) {
    default:
      return baseReducers(state, action)
  }
}

export default status
