import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import DashboardMainContent from './DashboardMainContent';
import SideBarComponent from './SideBarComponent';
import Login from './Login';

const Dashboard = () => {
 
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [editedPost, setEditedPost] = useState({ id: null, content: '' });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const navigate = useNavigate();
   


  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(storedPosts);
  }, []);


  const handleCreatePost = () => {
    if (newPost.title && newPost.content) {
      const updatedPosts = [...posts, { id: Date.now(), ...newPost }];
      setPosts(updatedPosts);
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
      setNewPost({ title: '', content: '' });
    } else {
      alert('Please enter both title and content.');
    }
  };
  
   const handleEdit = () => {
    const updatedPosts = posts.map((post) => {
      if (post.id === editedPost.id) {
        return { ...post, content: editedPost.content };
      }
      return post;
    });

    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setEditModalOpen(false);
    setEditedPost({ id: null, content: '' });
  };
  const handleLogin = (username, password) => {
  if (username === 'admin' && password === 'password') {
    setLoggedIn(true); 
    navigate('/dashboard');
  } else {
    alert('Invalid username or password');
  }
};

 return (
   <div className="flex h-screen">
      {!loggedIn ? (
        <Login 
          handleLogin={handleLogin} 
         
        />
      ) : (
        <>
          <SideBarComponent
            newPost={newPost}
            setNewPost={setNewPost}
            handleCreatePost={handleCreatePost}
            posts={posts}
            handleEdit={handleEdit}
          />
          <DashboardMainContent
            posts={posts}
            editedPost={editedPost}
            editModalOpen={editModalOpen}
            setEditModalOpen={setEditModalOpen}
            setEditedPost={setEditedPost}
            handleEdit={handleEdit}
          />
        </>
      )}
    </div>

  );
}

export default Dashboard