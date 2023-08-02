import express from 'express'
import { Servos } from './Servos.mjs'
import { SensorsForce } from './SensorsForce.mjs'
import { log } from 'console'

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

app.post('/getServosSensor', (req, res) => {
  console.log('getServosSensor')
  const response = servos.getServosSensor(req.body)
  res.status(200).json(response)
})

app.post('/setServosSensors', (req, res) => {
  servos.setServosSensors(req.body)
  console.log(servos)
  res.status(200).json({ ok: 'ok' })
})

app.post('/getServosActuator', (req, res) => {
  const response = servos.getServosActuator(req.body)
  res.status(200).json(response)
})

app.post('/setServosActuator', (req, res) => {
  console.log('setServosActuator')
  servos.setServosActuator(req.body)
  res.status(200).json({ ok: 'ok' })
})

app.post('/getSensorsForce', (req, res) => {
  const response = sensorsForce.getSensorsForce(req.body)
  res.status(200).json(response)
})

app.post('/setSensorsForce', (req, res) => {
  sensorsForce.setSensorsForce(req.body)
  console.log(sensorsForce)
  res.status(200).json({ ok: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

const servos = new Servos()
const sensorsForce = new SensorsForce()
