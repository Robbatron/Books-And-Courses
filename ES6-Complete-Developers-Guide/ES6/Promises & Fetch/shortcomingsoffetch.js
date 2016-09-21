let url = "https://jsonplaceholder.typicode.com/posts/";
let urlBad = "https://jsonplaceholder.typicode.com/posts123/";

fetch(urlBad)
  .then(response => console.log(response))
  .catch(error => console.log('BAD', error)); 
  // request failed but didn't log bad. This is, of course, VERY BAD and dissimilar to how good AJAX libraries behave!