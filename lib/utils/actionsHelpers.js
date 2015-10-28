import _            from 'lodash'
import axios        from 'axios'
import cuid         from 'cuid'


// Helpers Actions permitting to develop easier crud interfaces
// actionUtilities expose 5 methods : fetch, read, create, delete, update

let actionHelpers = {

  fetch( dispatch, baseActionCreators, url) {

    const action = baseActionCreators.fetchStart()
    dispatch(action)

    // send the request
    const promise = axios({
      url: url
      // headers: {'X-Requested-With': 'XMLHttpRequest'}
    })

    promise.then(function (response) {
      // dispatch the success action
      const returned = response.data
      const successAction = baseActionCreators.fetchSuccess(returned)
      dispatch(successAction)
    }, function (response) {
      // log(response)
      // rejection
      // dispatch the error action
      const errorAction = baseActionCreators.fetchError(response)
      dispatch(errorAction)
    }).catch(function (err) {
      console.error(err.toString())
    })

    return promise
  },

  read( dispatch, baseActionCreators, url) {

    const action = baseActionCreators.readStart()
    dispatch(action)

    // send the request
    const promise = axios({
      url: url
    // headers: {'X-Requested-With': 'XMLHttpRequest'}
    })

    promise.then(function (response) {
      // dispatch the success action
      const returned = response.data
      const successAction = baseActionCreators.readSuccess(returned)
      dispatch(successAction)
    }, function (response) {
      // log(response)
      // rejection
      // dispatch the error action
      const errorAction = baseActionCreators.readError(response)
      dispatch(errorAction)
    }).catch(function (err) {
      console.error(err.toString())
    })

    return promise
  },

  create( entity, dispatch, baseActionCreators, url) {
    let cid = entity.id
    if (cid === null) {
      cid = cuid()
      entity = entity.merge({id: cid})
    }

    const optimisticAction = baseActionCreators.createStart(entity)
    dispatch(optimisticAction)

    const promise = axios({
      url: url,
      method: 'POST',
      data: entity,
    })

    promise.then(function(response) {
      // dispatch the success action
      const returned = response.data
      const successAction = baseActionCreators.createSuccess(returned, cid)
      dispatch(successAction)
    }, function(response) {
      // rejection
      // dispatch the error action
      const errorAction = baseActionCreators.createError(response, entity)
      dispatch(errorAction)
    }).catch(function(err) {
      console.error(err.toString())
    })

    return promise
  },

  update( entity, dispatch, baseActionCreators, url) {
    const optimisticAction = baseActionCreators.updateStart(entity)
    dispatch(optimisticAction)

    const promise = axios({
      url: url + '/' + entity.id,
      method: 'PATCH',
      data: entity,
    })

    promise.then(function (response) {
      // dispatch the success action
      const returned = response.data
      const successAction = baseActionCreators.updateSuccess(returned)
      dispatch(successAction)
    }, function (response) {
      // rejection
      // dispatch the error action
      const errorAction = baseActionCreators.updateError(response, entity)
      dispatch(errorAction)
    }).catch(function (err) {
      console.error(err.toString())
    })

    return promise
  },

  delete(entity, dispatch, baseActionCreators, url) {
    const optimisticAction = baseActionCreators.deleteStart(entity)
    dispatch(optimisticAction)

    const promise = axios({
      url: url + '/' + entity.id,
      method: 'DELETE',
    })

    promise.then(function (response) {
      // dispatch the success action
      const successAction = baseActionCreators.deleteSuccess(entity)
      dispatch(successAction)
    }, function (response) {
      // rejection
      // dispatch the error action
      const errorAction = baseActionCreators.deleteError(response, entity)
      dispatch(errorAction)
    }).catch(function (err) {
      console.error(err.toString())
    })

    return promise
  }
}

export default actionHelpers
