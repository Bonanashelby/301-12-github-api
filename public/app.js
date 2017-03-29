// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

$.ajax({
  // go get the data
  url: 'https://api.github.com/user/repos?type=owner',
  method: 'GET',
  headers: {
    Authorization: `token ${githubToken}`
  }
})
.then(
  // render the data
  data => data.map(repo => $('#results').append(`<p>${repo.name}</p>`)),
  err => {
    console.error(err);
  }
);
