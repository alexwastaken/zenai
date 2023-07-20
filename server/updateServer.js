const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()

// Middleware to parse JSON request bodies
app.use(express.json())

// Use cors middleware
app.use(cors())

app.post('/mypost', async (req, res) => {
  // Get data from request body
  const { title, description, userId } = req.body

  // Create new user in database
  try {
    const newUser = await prisma.user.create({
      data: {
        title,
        description,
        userId
      },
    })

    // Send response with new user data
    res.status(201).json(newUser)
  } catch (error) {
    // Handle error
    res.status(500).json({ error: error.message })
  }
})

app.get('/myget', (req, res) => {
  // Handle GET request to /my-endpoint
  res.send('Hello from /my-endpoint!')
})

// Start server
app.listen(3001, () => {
  console.log('Server listening on port 3001')
})