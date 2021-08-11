
fetch("https://official-joke-api.appspot.com/random_ten")
  .then(response => response.json())
  .then(data => {
    data.forEach(joke => {
      // Create title element
      const titleElement = document.createElement("h3");
      titleElement.textContent = joke.setup;
      // Create content element
      const contentElement = document.createElement("p");
      contentElement.textContent = joke.punchline;
      // Add title and content to the page
      const articlesElement = document.getElementById("jokes");
      articlesElement.appendChild(titleElement);
      articlesElement.appendChild(contentElement);
    });
  })
  .catch(err => {
      console.error(err.message);
    });
