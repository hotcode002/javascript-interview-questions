function getBlogPost(postId) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${postId}`).then(
    (response) => console.log(response)
  );
}

getBlogPost(1);
