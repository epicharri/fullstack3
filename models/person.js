const mongoose = require("mongoose")

/*
if (process.argv.length < 3) {
  console.log(
    "give password as argument"
  )
  process.exit(1)
}
*/

//const password = process.argv[2]
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const url = process.env.MONGODB_URI
//`mongodb://harri:${password}@ds143388.mlab.com:43388/fullstack-persons`

mongoose.connect(url, {
  useNewUrlParser: true
}).then(result => {
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log('Error in connection to MongoDB:', error.message)
})

const personSchema = new mongoose.Schema(
  {
    name: String,
    number: String
    }
)

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Person = mongoose.model(
  'Person',
  personSchema
)
/*
if (process.argv.length < 4) {
  Person.find({}).then(result => {
    console.log("Puhelinluettelo: ")
    result.forEach(p => {
      console.log(
        `${p.name} ${p.number}`
      )
    })
    mongoose.connection.close()
  })
} else {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })

  person.save().then(response => {
    console.log("person saved!")
    mongoose.connection.close()
  })
}
*/

module.exports = Person
