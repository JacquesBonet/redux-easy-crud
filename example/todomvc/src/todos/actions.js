import actionsCreatorFor   from 'redux-easy-crud'

const RESSOURCE_NAME = 'todos'
const actions = actionsCreatorFor(RESSOURCE_NAME, restConfig.HOST + '/' + RESSOURCE_NAME)

export default actions




