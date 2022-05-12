import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostLesson = () => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPost(response.data);
            })
            .catch(err => {
                console.error("Error!")
            })
    }, [])

    function createPost() {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "Hello React",
            body:  "This is post method lesson task!"
        })
        .then((response) => {
            setPost(response.data);
            console.log(response);
        })
    }
    
    if(!post) return "Loading..."

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={createPost}>Create post</button>
        </div>
    );
};

export default PostLesson;
