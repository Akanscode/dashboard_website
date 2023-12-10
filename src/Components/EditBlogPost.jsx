import React, { useState } from 'react';
import { TextInput, Textarea, Button, Label, Card } from 'flowbite-react';

const EditBlogPost = ({ post, updatePost }) => {

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      ...post,
      title,
      content,
    };
    updatePost(updatedPost);
  };

    return (
        <div className='lg:w-1/2 w-full'>
            <h2 className=' text-xl font-medium text-gray-200 text-center'>Edit Blog Post</h2>
            <Card className=' bg-white rounded-lg shadow-4xl  shadow-gray-50'>
                <form onSubmit={handleSubmit}>
                    <div className=''>
                        <div className='flex-1'>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Title" />
                            </div>
                            <TextInput
                                type="text"
                                sizing="lg"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required     
                            />
                        </div>
                        <div className='flex-1'>
                            <div className="mb-2 block">
                                <Label htmlFor="comment" value="Your Comment" />
                            </div>
                            <Textarea
                              value={content}
                              className='block w-full h-20 px-5 py-3 mt-1 placeholder-gray-50 bg-white border border-gray-20 rounded-md md:h-48 focus:outline-none'
                              onChange={(e) => setContent(e.target.value)}
                             required
                          ></Textarea>
                        </div>
                        <Button className='text-white bg-black mt-2 ' type="submit">Update Post</Button>
                    </div>
                </form>
            </Card>
        </div>
  );
};

export default EditBlogPost;
