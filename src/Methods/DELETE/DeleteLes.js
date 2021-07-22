import React, { useState, useEffect } from "react";
import axios from 'axios';

function DeleteLes() {

  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        setPost(response.data);
        console.log(response)
      });
  }, []);

  function delPost(){
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then(() => {
        alert("Post deleted!")
        setPost(null);
      })
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={delPost}>Delete Post</button>
    </div>
  );
}

export default DeleteLes;