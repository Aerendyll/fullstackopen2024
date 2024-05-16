const { test } = require('node:test');
const assert = require('node:assert');
const supertest = require('supertest');
const app = require('../app');
const Blog = require('../models/blog');

const api = supertest(app);

test('creating a new blog post', async () => {
  const newBlog = {
    title: 'New Blog Post',
    author: 'John Doe',
    content: 'This is a test blog post',
    likes: 0,
  };


  const response = await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/);


  const blogsAfterCreation = await Blog.find({});
  assert.strictEqual(blogsAfterCreation.length, 1);

  const createdBlog = response.body;
  assert.strictEqual(createdBlog.title, newBlog.title);
  assert.strictEqual(createdBlog.author, newBlog.author);
  assert.strictEqual(createdBlog.content, newBlog.content);
  assert.strictEqual(createdBlog.likes, newBlog.likes);
});
