import React from 'react';
//import { Button, Card } from 'flowbite-react';
import { HiOutlinePencilAlt } from "react-icons/hi"

const ViewBlogPost = ({ post, editPost, deletePost }) => {
  const { title, content, image } = post
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div>
        {image && <img className='w-full h-60' src={URL.createObjectURL(image)} alt="blog_image" />}
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700">{content}</p>
        <div className='flex space-x-4'>
          <button className=' bg-blue-600 inline-flex items-center text-white border border-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            onClick={() => editPost(post)}
          >
            <HiOutlinePencilAlt className="w-5 h-5 mr-1 -ml-1"/>
            Edit
          </button>
          <button
            type="button"
            onClick={() => deletePost(post.id)}
            className="bg-red-600 inline-flex items-center text-white border border-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          ">
            <svg className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
            Delete
          </button>
        </div>
      </div>
    </div>
       
      
      
    
  );
};

export default ViewBlogPost;
