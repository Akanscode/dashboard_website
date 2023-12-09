import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import CreateBlogPost from './CreateBlogPost';
import EditBlogPost from './EditBlogPost';
import ViewBlogPost from './ViewBlogPost';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const editPost = (post) => {
    setEditing(true);
    setCurrentPost(post);
  };

  const updatePost = (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
    setEditing(false);
    setCurrentPost(null);
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>Blog Dashboard</h1>
            {!editing ? (
        <CreateBlogPost addPost={addPost} />
      ) : (
        <EditBlogPost post={currentPost} updatePost={updatePost} />
      )}
      <hr />

      <h2 className=' text-center font-bold text-xl capitalize'>Blog Posts</h2>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-10'>
        {posts.map((post) => (
          
        <ViewBlogPost
          key={post.id}
          post={post}
          editPost={editPost}
          deletePost={deletePost}
        />
      ))}
      </div>
      
    </div>
  );
};

export default Dashboard;
