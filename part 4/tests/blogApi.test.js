const supertest = require("supertest");
const app = require("../app");
const Blog = require("../models/blog");
const { test } = require('node:test');
const assert = require("node:assert");
const api = supertest(app);

const initialBlogs = [
  {
    title: "Blog 1",
    author: "Author 1",
    content: "Content of blog 1",
    likes: 10,
  },
  {
    title: "Blog 2",
    author: "Author 2",
    content: "Content of blog 2",
    likes: 20,
  },
];

// test("api returns correct number of blogs in JSON format", async () => {
//   await Blog.deleteMany({});
//   await Blog.insertMany(initialBlogs);

//   const response = await api.get("/api/blogs");

//   assert.strictEqual(response.status, 200);
//   assert.strictEqual(response.headers["content-type"].includes("application/json"), true);
//   assert.strictEqual(response.body.length, initialBlogs.length);
// });

// test("deleting a blog removes it from the list", async () => {
//   await Blog.deleteMany({});
//   await Blog.insertMany(initialBlogs);

//   let response = await api.get("/api/blogs");
//   const initialBlogCount = response.body.length;

//   const blogToDeleteId = response.body[0]._id;
//   await api.delete(`/api/blogs/${blogToDeleteId}`).expect(204);

//   response = await api.get("/api/blogs");
//   assert.strictEqual(response.body.length, initialBlogCount - 1);

//   const titles = response.body.map((blog) => blog.title);
//   assert(!titles.includes(initialBlogs[0].title));
// });
