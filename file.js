const accessToken = '-tVDkzSdTEwDS9-y5-1whWgIZLNDiKw';
const fs = require('fs');
const path = require('path');

fetch('https://oauth.reddit.com/r/funny/top?t=day', {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'User-Agent': 'Your App Name',
  },
})
  .then((response) => response.json())
  .then((data) => {
    const posts = data.data.children.map((post) => ({
      title: post.data.title,
      body: post.data.selftext,
      author: post.data.author,
      created: new Date(post.data.created_utc * 1000).toLocaleString(),
      score: post.data.score,
      num_comments: post.data.num_comments,
    }));
    console.table(posts);
    fs.writeFileSync('posts.json', JSON.stringify(posts));
  })
  .catch((error) => {
    console.error('Error fetching data from Reddit API:', error);
  });
