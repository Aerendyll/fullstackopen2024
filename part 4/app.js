const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');
const blogRouter = require('./controllers/blogs');

const app = express();

app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Rutas de los blogs
app.use('/api/blogs', blogRouter);

app.get('/api/blogs', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })
  
  app.post('/api/blogs', (request, response) => {
    const blog = new Blog(request.body)
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })
  

module.exports = app;
