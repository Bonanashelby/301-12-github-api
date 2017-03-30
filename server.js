const express = require('express');
// requestProxy for accessability for app.js/server.js for HEROKU? also need to npm i --save express-request-proxy in terminal to run this
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('./public'));
// HEROKU
app.get('/github/*', proxyGitHub);
// HEROKU
function proxyGitHub(request, response) {
  console.log('Routing a request for a GitHub resource');
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(request, response);
}

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
