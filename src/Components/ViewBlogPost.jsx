import React from 'react';
//import { Button, Card } from 'flowbite-react';
import { HiOutlinePencilAlt } from "react-icons/hi"
import { blogPost } from './data';
import { Link } from 'react-router-dom';
const ViewBlogPost = () => {
  
  return (
    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-10'>
      {blogPost.map((blog) => (
        <div key={blog.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div>
         <img className='w-full h-40' src={blog.CoverImg} alt="blog_image" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-sm font-normal tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
        <p className="mb-3 font-normal text-gray-700">{blog.content}</p>
        <div className='flex space-x-4'>
          <Link to='/editblog' className=' bg-blue-600 inline-flex items-center text-white border border-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
           
          >
            <HiOutlinePencilAlt className="w-5 h-5 mr-1 -ml-1"/>
            Edit
          </Link>
          <Link to="/singlepost"
            
           
            className="font-meduim text-gray-500  
          ">
          
          Read More
          </Link>
        </div>
      </div>
    </div>

      ))}
    </div>
    
       
      
      
    
  );
};

export default ViewBlogPost;
