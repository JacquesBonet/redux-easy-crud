import easyCrud from 'redux-easy-crud'

const RESSOURCE_NAME = 'todos'
const HOST = "//localhost"
const baseActionCreators = reduxeasyCrudCrud.actionCreatorsFor(RESSOURCE_NAME)
const url = HOST + '/' + RESSOURCE_NAME

let actionCreators = {

  fetch() {
    return function(dispatch) {
      return easyCrud.fetch( dispatch, baseActionCreators, url)
    }
  },

  read(id) {
    return function(dispatch) {
      return easyCrud.fetch( dispatch, baseActionCreators, url + '/' + id)
    }
  },

  create(entity) {
    return function(dispatch) {
      return easyCrud.create( entity, dispatch, baseActionCreators, url)
    }
  },

  update(entity) {
    return function(dispatch) {
      return easyCrud.update( entity, dispatch, baseActionCreators, url)
    }
  },

  delete(entity) {
    return function(dispatch) {
      return easyCrud.delete( entity, dispatch, baseActionCreators, url)
    }
  }
}

actionCreators = _.extend(actionCreators, baseActionCreators)

export default actionCreators



