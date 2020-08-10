import express from 'express'

const app = express()

app.get('/', (request, response) => response.json({ hello: "world!" }))

const port = 3333

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
