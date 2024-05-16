const { test, after, beforeEach } = require('node:test')
const Blog = require('../models/blog')


const initialBlogs = [
  {
    _id: "663c0ca50edcca8f654ff0c1",
title: "Mi primer post",
author: "Yo",
url: "https://example.com",
likes: 10,
__v: 0
  },
  {
    _id: "663c0cc80edcca8f654ff0c6",
title: "Mi segundo post",
author: "NO NO NO NO NO",
url: "https://example.com",
likes: 20,
__v: 0
  },
]

beforeEach(async () => {
  await Blog.deleteMany({})
  let blogObject = new Note(initialBlogs[0])
  await blogObject.save()
  blogObject = new Note(initialBlogs[1])
  await blogObject.save()
})
