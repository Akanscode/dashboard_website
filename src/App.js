import React from 'react';
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
  
 


  return (
    <BrowserRouter>
      <div>
       
          
            <Routes>
          <Route path="dashboard" element={<Dashboard />}/>
            <Route path="editblog" element={<EditBlogPost />} />
            <Route path="blogpost" element={<ViewBlogPost />} />
            <Route path="singlepost" element={<ViewSingleBlogPost />} />
             <Route path="createblog" element={<CreateBlogPost />} />
             <Route path="/" element={<Login />} />
            
            
            
            
            
              
            </Routes>
          
       
      </div>
    </BrowserRouter>
  );
};

export default App;
