import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateBlogPost from './CreateBlogPost';
import EditBlogPost from './EditBlogPost';
import ViewBlogPost from './ViewBlogPost';
import { Button  } from 'flowbite-react';
//import CustomSidebar from './CustomSideBar';

const Dashboard = ({handleLogout}) => {
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
 
  const navigate = useNavigate();
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
    navigate('/'); // Redirect to the home page after adding a post
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
    <div className="flex">
     
      <div className="flex-1 p-4">
        <div className='flex justify-between'>
          <h1 className=' text-xl font-medium capitalize'>Blog Dashboard</h1>
          <Button className='bg-red-200 text-white' onClick={handleLogout}>
              Logout
            </Button>
        </div>
        
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
    </div>
  );
};

export default Dashboard;
