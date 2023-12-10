import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateBlogPost from './CreateBlogPost';
import EditBlogPost from './EditBlogPost';
import ViewBlogPost from './ViewBlogPost';
import CustomSidebar from './CustomSideBar';





const Dashboard = ({setIsLoggedIn }) => {
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
 
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
    navigate('/'); 
    setActiveTab('home');
  };

  const editPost = (post) => {
    setEditing(true);
    setCurrentPost(post);
    setActiveTab('edit');
  };

  const updatePost = (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
    setEditing(false);
    setCurrentPost(null);
    setActiveTab('home');
  };


  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
 
  return (
    <div className=" container mx-auto flex ">
      <CustomSidebar activeTab={activeTab} setActiveTab={setActiveTab} handleLogout={handleLogout}  />
      <div className="flex-1 p-4">
        {!editing ? (
          activeTab === 'create' ? (
            <CreateBlogPost addPost={addPost} />
          ) : (
              <>
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
              </>
          )
        ) : (
          <EditBlogPost post={currentPost} updatePost={updatePost} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
