import React, { useState } from 'react';
import '../index.css';

//this component creates it's own states
//it get one function in props
//once the create button is pressed the login form submission function
//sends the new blogObject to the props function


const BlogForm = ({ addBlog }) => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  //this function should be async and await the addBlog function
  const sendNewBlog = (event) => {
    event.preventDefault();
    const blogObject = { title, author, url };
    addBlog(blogObject);
    setTitle('');
    setAuthor('');
    setUrl('');
  };

  return (
    <div>
      <h2>Add a new blog</h2>
      <form onSubmit={sendNewBlog}>
        {/* the ids are given to input fields for testing purpose */}
        <div>
          Title:
          <input
            name="Title"
            id='title'
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          Author:
          <input
            name="Author"
            id='author'
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <div>
          URL:
          <input
            name="URL"
            id='url'
            type="text"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
        </div>
        <button id='submit-blog-button' type="submit">create</button>
      </form>
    </div>
  );
};

export default BlogForm;