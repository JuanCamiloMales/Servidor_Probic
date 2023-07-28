const express = require('express')

const PORT = 3000

const app = express()

app.get('/Sensors_Servo', (req, res) => {
  res.send('Servo')
})

app.post('/Sensors_Servo', (req, res) => {
  res.send('Servo')
})

app.get('/Sensors_Force', (req, res) => {
  res.send('Force')
})

app.post('/Sensors_Force', (req, res) => {
  res.send('Force')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
