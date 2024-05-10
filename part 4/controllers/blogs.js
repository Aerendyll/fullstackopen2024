const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    next(error);
  }
});



router.post('/', async (req, res, next) => {
  const blog = new Blog(req.body);
  try {
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
