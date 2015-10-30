import reduxCrud   from 'redux-easy-crud'

const RESSOURCE_NAME = 'todos'
const actions = reduxCrud.actionsCreatorsFor(RESSOURCE_NAME, 'http://localhost:4002/' + RESSOURCE_NAME)

export default actions
