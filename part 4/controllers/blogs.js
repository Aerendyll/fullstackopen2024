const jwt = require("jsonwebtoken");
const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();
const User = require("../models/user");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
  }
  return null;
};

router.get("/", async (request, response) => {
  try {
    const blogs = await Blog.find({}).populate("user", { username: 1, name: 1 });
    const formattedBlogs = blogs.map(blog => ({
      title: blog.title,
      author: blog.author,
      likes: blog.likes,
      content: blog.content,
      user: blog.user ? {
        username: blog.user.username,
        name: blog.user.name,
        id: blog.user._id
      } : null
    }));
    response.json(formattedBlogs);
  } catch (error) {
    console.error('Error getting blogs:', error);
    response.status(500).json({ error: 'Internal server error' });
  }
});

router.post("/", async (request, response) => {
  const body = request.body;
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
  if (!decodedToken.id) {
    return response.status(401).json({ error: "token invalid" });
  }
  const user = await User.findById(decodedToken.id);

  const blog = new Blog({
    title: body.title,
    author: body.author,
    likes: body.likes,
    content: body.content,
    user: user._id // Establecer la referencia al usuario creador
  });

  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();

  response.json(savedBlog);
});

router.put("/:id", async (request, response) => {
  const body = request.body;

  const blog = {
    title: body.title,
    author: body.author,
    likes: body.likes,
    content: body.content,
  };

  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {
    new: true,
  });
  response.json(updatedBlog);
});

router.get("/:id", async (request, response) => {
  const blog = await Blog.findById(request.params.id);
  if (blog) {
    response.json(blog);
  } else {
    response.status(404).end();
  }
});

router.delete("/:id", async (request, response) => {
  await Blog.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

module.exports = router;
