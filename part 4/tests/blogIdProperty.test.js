const { test } = require('node:test');
const assert = require('node:assert');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

test('blog posts have id property instead of _id', async () => {
  const response = await api.get('/api/blogs');

  assert(Array.isArray(response.body), 'Response body should be an array');

  response.body.forEach(blog => {
    assert(blog.id !== undefined, 'Blog should have an id property');
    assert(blog._id === undefined, 'Blog should not have an _id property');
  });
});
