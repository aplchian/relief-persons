const {reject,filter,compose,head,append,path,curry} = require('ramda')



const filterPersons = function(id,item){
  return item.id === parseInt(id)
}

const getPerson = function(id,item){
  return item.id === parseInt(id)
}

const curriedGetPerson = curry(getPerson)
const curriedFilterPerson = curry(filterPersons)


const updateMembers = function(type,id,current){
  let final = current
  let outOf = type === 'remove' ? current.members : current.persons

  let person = compose(
    head,
    filter(curriedGetPerson(id))
  )(outOf)

  let newPersons = reject(curriedFilterPerson(id),outOf)

  if(type === 'remove'){
    final.persons.push(person)
    final.members = newPersons
  }else if(type === 'add'){
    final.members.push(person)
    final.persons = newPersons
  }

  return final
}


module.exports = {
  getPerson: curry(getPerson),
  filterPersons: curry(filterPersons),
  updateMembers: updateMembers
}
