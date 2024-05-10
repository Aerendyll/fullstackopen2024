const { test, describe } = require('node:test');
const assert = require('node:assert');
const listHelper = require('../utils/list_helper');

describe('dummy', () => {
  test('returns one', () => {
    const blogs = [];
    const result = listHelper.dummy(blogs);
    assert.strictEqual(result, 1);
  });
});

describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 5,
        __v: 0
      }
    ]
  
    test('when list has only one blog, equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      assert.strictEqual(result, 5)
    })
  })
  
  describe('favoriteBlog', () => {
    
    test('returns favorite blog', () => {
      const blogs = [
        { title: 'Blog 1', author: 'Author 1', likes: 10 },
        { title: 'Blog 2', author: 'Author 2', likes: 20 },
        { title: 'Blog 3', author: 'Author 3', likes: 30 }
      ];
  
      const result = listHelper.favoriteBlog(blogs);
      assert.deepStrictEqual(result, { title: 'Blog 3', author: 'Author 3', likes: 30 });
    });
  
    test('returns null for empty list of blogs', () => {
      const blogs = [];
      const result = listHelper.favoriteBlog(blogs);
      assert.strictEqual(result, null);
    });
  });