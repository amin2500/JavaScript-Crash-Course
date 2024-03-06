// Fetch Data from these two APIs:

// https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/photos

// Handle the response, then display the data in the console.

// For each API, implement the following methods once:

// 1. Using .then/.catch

// 2. Using Async/Await

// 1. .then/.catch

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    console.log(error);
  });

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    console.log(error);
  });

// 2. Using Async/Await

async function fetchAlbumsData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchAlbumsData();

async function fetchAlbumsData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchAlbumsData();
