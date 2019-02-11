const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb://harri:${password}@ds143388.mlab.com:43388/fullstack-persons`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: 'Harri',
  number: 045-1234567
})

person.save().then(response => {
  console.log('person saved!');
  mongoose.connection.close();
})
