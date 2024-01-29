import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import EditBlogPost from './Components/EditBlogPost';
import ViewBlogPost from './Components/ViewBlogPost';
import ViewSingleBlogPost from './Components/ViewSingleBlog';
import CreateBlogPost from './Components/CreateBlogPost';
//import CreateBlogPost from './Components/CreateBlogPost';
//import ViewSingleBlog from './Components/ViewSingleBlog';

//<Route path="/post/:id" element={<ViewSingleBlog />} />
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

 


  return (
    <BrowserRouter>
      <div>
        {isLoggedIn ? (
          
            <Routes>
            <Route path="/" element={<Dashboard setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="editblog" element={<EditBlogPost />} />
            <Route path="blogpost" element={<ViewBlogPost />} />
            <Route path="singlepost" element={<ViewSingleBlogPost />} />
             <Route path="createblog" element={<CreateBlogPost />} />
             <Route path="login" element={<Login />} />
            
            
            
            
            
              
            </Routes>
          
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
