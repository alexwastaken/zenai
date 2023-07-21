const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')
const bodyParser = require("body-parser");

const app = express()
const prisma = new PrismaClient()

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Middleware to parse JSON request bodies
app.use(express.json())

// Use cors middleware
app.use(cors())

app.post('/mypost', async (req, res) => {
  // Get data from request body
  const { title, description, userId, imageFile } = req.body

  // Create new user in database
  try {
    const newUser = await prisma.user.create({
      data: {
        title,
        description,
        userId,
        imageFile
      },
    })

    // Send response with new user data
    res.status(201).json(newUser)
  } catch (error) {
    // Handle error
    res.status(500).json({ error: error.message })
  }
})

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      take: 10,
      orderBy: {
        id: 'desc',
      },
      select: {
        id: true,
        title: true,
        description: true,
        userId: true,
        imageFile: true
      },
    })

    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/promptID/:id', async (req, res) => {
  try {
    const { id } = req.params; // Extract the user ID from the URL
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        description: true,
        userId: true,
        imageFile: true
      },
    });

    if (!user) {
      // No user was found with the given ID, return a 404 error
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(3001, () => {
  console.log('Server listening on port 3001')
})