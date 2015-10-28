import React          from 'react'
import { connect }    from 'react-redux'
import actions        from './actions'
import Icon           from 'react-fa'
import bows           from 'bows'

const PT              = React.PropTypes
const baseClass       = 'todos--List'
const log             = bows(baseClass)

class Comp extends React.Component {

  get dispatch() {
    return this.props.dispatch
  }

  onToggle(todo, done, event) {
    event.preventDefault()
    todo = todo.merge({done})
    const action = actions.update(todo)
    this.dispatch(action)
  }

  onDelete(todo, event) {
    event.preventDefault()
    const action = actions.delete(todo)
    this.dispatch(action)
  }

  onRename() {
    const action = actions.renameAll()
    this.dispatch(action)
  }

  onShuffleName() {
    const action = actions.shuffleName()
    this.dispatch(action)
  }

  renderCheck(todo) {
    if (todo.done) {
      return (
         <a className='btn regular blue'
            href='javascript://'
            onClick={this.onToggle.bind(this, todo, false)}><Icon name='check-square-o' /></a>
      )
    } else {
      return (
         <a className='btn regular blue'
            href='javascript://'
            onClick={this.onToggle.bind(this, todo, true)}><Icon name='square-o' /></a>
      )
    }
  }

  renderTodos() {
    return _.map(this.props.todos, (todo) => {
      return (
        <tr>
          <td>
            {todo.title}
          </td>
          <td>
            {this.renderCheck(todo)}
            <a className='btn regular blue'
              href='javascript://'
              onClick={this.onDelete.bind(this, todo)}><Icon name='trash' /></a>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <section className=''>
        <table className='table-light'>
          <thead>
            <tr>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTodos()}
          </tbody>
        </table>
        <h1>Status</h1>
        <h2>{this.props.status.type} {this.props.status.error}</h2>
      </section>
    )
  }
}

Comp.propTypes = {
  todos: PT.array.isRequired,
  status: PT.object.isRequired,
  dispatch: PT.func.isRequired,
}

export default Comp
