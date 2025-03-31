const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection URI
const uri = 'mongodb+srv://ecccozz:ecccozz5@buntars.lhjbs.mongodb.net/';

// Create a new MongoClient
const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 5000
});

// Start the server immediately
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Connect to MongoDB in the background
(async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    // Get the database and collection
    const db = client.db('buntars');
    const usersCollection = db.collection('users');
    const partnersCollection = db.collection('organizations');

    // Define route after successful connection
    app.get('/users', async (req, res) => {
      try {
        const users = await usersCollection.find({}).toArray();
        res.json(users);
      } catch (error) {
        console.error('Error fetching users', error);
        res.status(500).send('Internal Server Error');
      }
    });

    app.get('/organizations', async (req, res) => {
      try {
        const organizations = await partnersCollection.find({}).toArray();
        res.json(organizations);
      } catch (error) {
        console.error('Error fetching organizations', error);
        res.status(500).send('Internal Server Error');
      }
    });

  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    // You might want to add a fallback route here
    app.get('/users', (req, res) => {
      res.status(503).send('Service temporarily unavailable: Database connection failed');
    });
  }
})();

// Graceful shutdown
process.on('SIGINT', async () => {
  try {
    console.log('Shutting down server...');
    await server.close();
    await client.close();
    console.log('Server and MongoDB connection closed');
    process.exit(0);
  } catch (err) {
    console.error('Error during shutdown', err);
    process.exit(1);
  }
});