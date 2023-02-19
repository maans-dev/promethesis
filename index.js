const CLIENT_ID = 'f_d0TlHVSU74N9Wr8GR1dQ';
const CLIENT_SECRET = 'FcIU2T7cqqroj0F0Jcb7DHrfyrpJfA';

const params = new URLSearchParams({
  grant_type: 'client_credentials',
});

fetch('https://www.reddit.com/api/v1/access_token', {
  method: 'POST',
  body: params,
  headers: {
    Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})
  .then((response) => response.json())
  .then((data) => {
    const accessToken = data.access_token;
    console.log(`Access token: ${accessToken}`);
  })
  .catch((error) => {
    console.error('Error authenticating with Reddit API:', error);
  });
