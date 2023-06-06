const express = require('express');
const app = express();

// Endpoint: /post
app.get('/', (req, res) => {
  res.json("Welcome to Home Page");
});

// Endpoint: /post
app.get('/post', (req, res) => {
  // Generate dummy posts
  const posts = generatePosts(20);
  
  // Send the posts as a response
  res.json(posts);
});


// Generate dummy posts
function generatePosts(numPosts) {
  const posts = [];
  
  for (let i = 1; i <= numPosts; i++) {
    const post = {
      id: i,
      title: `Post ${i}`,
      content: `This is the content of Post ${i}`
    };
    
    posts.push(post);
  }
  
  return posts;
}

  

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
