const express = require('express')

const PORT = 3000

const app = express()
app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== ('application/json; charset=UTF-8' || 'application/json')) return next()

  let body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })
  req.on('end', () => {
    req.body = JSON.parse(body)
    next()
  })
})

app.get('/Servos', (req, res) => {
  res.json(Servos)
})

app.post('/Servos', (req, res) => {
  res.status(200).json({ ok: 'ok' })
})

app.get('/ZMP', (req, res) => {
  res.json({ getServos: 'getForce' })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

let Servos = {
  Servo1: '0'
}
