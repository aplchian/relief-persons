const {curry} = require('ramda')


const filterPersons = function(id,item){
  return item.id === parseInt(id)
}

const getPerson = function(id,item){
  return item.id === parseInt(id)
}


module.exports = {
  getPerson: curry(getPerson),
  filterPersons: curry(filterPersons)
}
