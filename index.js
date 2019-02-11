require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")
const Person = require("./models/person")

app.use(bodyParser.json())
app.use(cors())
morgan.token("body", req => {
  return JSON.stringify(req.body)
})

app.use(
  morgan(
    ":method :url :status :response-time ms - :res[content-length] :body"
  )
)

const logger = (req, res, next) => {
  console.log("Method:", req.method)
  console.log("Path:  ", req.path)
  console.log("Body:  ", req.body)
  next()
}

app.use(express.static("build"))
app.use(logger)

let persons = []
/*
[
  {
    id: 1,
    name: "Harri 1",
    number: "044-1234567"
  },
  {
    id: 2,
    name: "Harri 2",
    number: "040-1234567"
  },
  {
    id: 3,
    name: "Harri 3",
    number: "050-1234567"
  },
  {
    id: 4,
    name: "Harri 4",
    number: "046-1234567"
  }
]
*/
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>")
})

app.get("/api/persons", (req, res) => {
  Person.find({}).then(persons => {
    res.json(
      persons.map(person =>
        person.toJSON()
      )
    )
  })
  //  res.json(persons)
})

app.get(
  "/api/persons/:id",
  (req, res) => {
    //console.log("id on ", id)
    Person.findById(req.params.id)
      .then(person => {
        if (person) {
          res.json(person.toJSON())
        } else {
          res.status(404).end()
        }
      })
      .catch(error => {
        console.log(error)
        res.status(400).send({
          error: "Malformatted id"
        })
      })

    /*
    const person = persons.find(
      person => person.id === id
    )
    if (person) res.json(person)
    else res.status(404).end()
    */
  }
)

const error = (req, res) => {
  res
    .status(404)
    .send({ error: "Unknown endpoint" })
}

app.use(error)

app.delete(
  "/api/persons/:id",
  (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))


/*
    persons = persons.filter(
      person =>
        person.id.toString() !==
        req.params.id
    )
    res.status(204).end()
    */
  }
)

app.post(
  "/api/persons/",
  (req, res) => {
    const body = req.body

    if (body.name === undefined)
      return res.status(400).json({
        error: "Nimi puuttuu."
      })
    if (body.name === "")
      return res.status(400).json({
        error: "Nimi tyhjä."
      })
    if (body.number === undefined)
      return res.status(400).json({
        error: "Numero puuttuu."
      })
    if (body.number === "")
      return res.status(400).json({
        error: "Numero tyhjä."
      })

    if (
      persons.find(
        p => p.name === body.name
      )
    )
      return res.status(400).json({
        error: "Nimi on jo luettelossa."
      })

    /*const maxId =
      persons.length > 0
        ? Math.max(
            ...persons.map(p => p.id)
          )
        : 0
*/
    const person = new Person({
      name: body.name,
      number: body.number
      //id: maxId + 1
    })

    person.save().then(savedPerson => {
      res.json(savedPerson.toJSON)
    })
    //persons = persons.concat(person)
    //res.json(person)
  }
)

app.get("/info", (req, res) => {
  res.send(
    `<div>
      <p>
        Puhelinluettelossa on ${
          persons.length
        }${" "}
        henkilön tiedot
      </p>
      <p>${new Date()}</p>
    </div>`
  )
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  )
})
