const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
    const reducer = (sum, post) => {
      return sum + post.likes;
    };
    const total =  blogs.reduce(reducer, 0)
    console.log("Total likes:" , total);
    return total

  };

  const favoriteBlog = (blogs) =>{
    if(blogs.length === 0 ){
      return null
    }
    let favorite = blogs[0]

    blogs.forEach((blog) => {
      if (blog.likes > favorite.likes){
        favorite = blog
      }
    })
    return {
        title: favorite.title,
      author: favorite.author,
      likes: favorite.likes,
    };
 
  }

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
};
