const Blog = require('../models/blog')


const initialBlogs = [
    {
        title: 'HTML is easy',
        author: 'John Doe',
        content: 'HTML is easy to learn and use.',
        likes: 10
    },
    {
        title: 'JavaScript Basics',
        author: 'Jane Smith',
        content: 'JavaScript is a powerful programming language.',
        likes: 5
    }
]

const nonExistingId = async () => {
    const blog = new Blog({ title: 'willremovethissoon', author: 'John Doe', content: 'Sample content', likes: 0 })
    await blog.save()
    await blog.deleteOne()

    return blog._id.toString()
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(user => user.toJSON())
  }

module.exports = {
    initialBlogs, nonExistingId, blogsInDb, usersInDb
}
