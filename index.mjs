import express from 'express'
import { Servos } from './Servos.mjs'
import { SensorsForce } from './SensorsForce.mjs'

const PORT = 3000

const app = express()
app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json; charset=UTF-8' && req.headers['content-type'] !== 'application/json') return next()

  let body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })
  req.on('end', () => {
    req.body = JSON.parse(body)
    next()
  })
})

app.post('/getSensorsServo', (req, res) => {
  const response = servos.getSensorsServo(req.body)
  res.status(200).json(response)
})

app.post('/setSensorsServo', (req, res) => {
  servos.setServosSensors(req.body)
  res.status(200).json({ ok: 'ok' })
})

app.post('/getSensorsForce', (req, res) => {
  const response = sensorForce.getSensorsForce(req.body)
  res.status(200).json(response)
})

app.post('/setSensorsForce', (req, res) => {
  sensorForce.setSensorsForce(req.body)
  res.status(200).json({ ok: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

const servos = new Servos()
const sensorForce = new SensorsForce()
