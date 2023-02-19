const accessToken = '-tVDkzSdTEwDS9-y5-1whWgIZLNDiKw';
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// Replace {subreddit} with the name of the subreddit you want to fetch from
const url = 'https://www.reddit.com/r/TrueOffMyChest/top.json?t=day';


const fs = require('fs');

fetch(`https://www.reddit.com/r/TrueOffMyChest/top.json?sort=top&t=day&limit=5`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error fetching stories: ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    const stories = data.data.children.map((child) => {
      const { title, selftext } = child.data;
      return { title, selftext };
    });
    console.log('Top stories:', stories);
    const json = JSON.stringify(stories, null, 2);
    fs.writeFileSync('stories.json', json);
  })
  .catch((error) => {
    console.error('Error fetching stories:', error);
  });
