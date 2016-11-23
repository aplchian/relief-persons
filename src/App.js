const React = require('react')
const {reject,filter,compose,head,append,path} = require('ramda')
const {getPerson, filterPersons} = require('./helpers/helpers')

const App = React.createClass({
  getInitialState: function() {
    return {
      persons: [{
        name: 'Tom',
        id: 1
      }, {
        name: 'Trip',
        id: 2
      }, {
        name: 'Derek',
        id: 3
      }, {
        name: 'Kendra',
        id: 4
      }, {
        name: 'Andrea',
        id: 5
      }, {
        name: 'Jared',
        id: 6
      }, {
        name: 'Joshua',
        id: 7
      }, {
        name: 'Chris',
        id: 8
      }, {
        name: 'Alex',
        id: 9
      }, {
        name: 'Joe',
        id: 10
      }, {
        name: 'Cameron',
        id: 11
      }, {
        name: 'Matt',
        id: 12

      }],
      members: [{
        name: 'Tom',
        id: 30
      }, {
        name: 'Trip',
        id: 29
      }]
    };
  },
  addMember(id){
    return e => {
      e.preventDefault()
      let current = this.state
      let person = compose(
        head,
        filter(getPerson(id))
      )(this.state.persons)
      let newPersons = reject(filterPersons(id),this.state.persons)
      current.members.push(person)
      current.persons = newPersons
      this.setState({current})
    }
  },
  removeMember(id){
    return e => {
      e.preventDefault()
      let current = this.state
      let person = compose(
        head,
        filter(getPerson(id))
      )(this.state.members)
      let newPersons = reject(filterPersons(id),this.state.members)
      current.persons.push(person)
      current.members = newPersons
      this.setState({current})
    }
  },
  render () {
  return (
    <div style={{width: '300px'}}>
      ...
      <div style={{float: 'left'}}>
        <h3>Team</h3>
        <ul>
          {this.state.persons.map(m =>
            <li key={m.id}>
              {m.name}
              <button onClick={this.addMember(`${m.id}`)}>Add</button>
            </li>
          )}
        </ul>
      </div>
      <div style={{float: 'right'}}>
        <h3>Team</h3>
        <ul>
          {this.state.members.map(m =>
            <li key={m.id}>
              {m.name}
              <button onClick={this.removeMember(`${m.id}`)}>Remove</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
})

module.exports = App
