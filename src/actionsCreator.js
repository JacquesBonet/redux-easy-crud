import reduxCrud from 'redux-crud'
import actions  from './utils/actionsHelpers'


function actionsCreator( resource, url) {

  const baseActionCreators = reduxCrud.actionCreatorsFor(resource)

  let creators = {
    fetch() {
      return function(dispatch) {
        return actions.fetch( dispatch, baseActionCreators, url)
      }
    },

    read(id) {
      return function(dispatch) {
        return actions.fetch( dispatch, baseActionCreators, url + '/' + id)
      }
    },

    create(entity) {
      return function(dispatch) {
        return actions.create( entity, dispatch, baseActionCreators, url)
      }
    },

    update(entity) {
      return function(dispatch) {
        return actions.update( entity, dispatch, baseActionCreators, url)
      }
    },

    delete(entity) {
      return function(dispatch) {
        return actions.delete( entity, dispatch, baseActionCreators, url)
      }
    }
  }

  creators = _.extend( creators, baseActionCreators)

  return creators
}

export default  actionsCreator
