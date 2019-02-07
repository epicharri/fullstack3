const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const morgan = require('morgan')
const cors = require('cors')
app.use(bodyParser.json())
app.use(cors())
morgan.token('body', (req) => {
    return JSON.stringify(req.body)})

app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body'))


let persons = [
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

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>")
})

app.get("/api/persons", (req, res) => {
  res.json(persons)
})

app.get(
  "/api/persons/:id",
  (req, res) => {
    const id = Number(req.params.id)
    console.log("id on ", id)
    const person = persons.find(
      person => person.id === id
    )
    if (person) res.json(person)
    else res.status(404).end()
  }
)

app.delete(
  "/api/persons/:id",
  (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(
      person => person.id !== id
    )
    res.status(204).end()
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
    if (body.number==="")
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

    const maxId =
      persons.length > 0
        ? Math.max(
            ...persons.map(p => p.id)
          )
        : 0

    person = {
      name: body.name,
      number: body.number,
      id: maxId + 1
    }

    persons = persons.concat(person)
    res.json(person)
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

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  )
})
