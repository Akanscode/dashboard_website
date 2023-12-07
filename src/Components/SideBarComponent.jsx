import React, {useState} from 'react';
import { Sidebar, Button } from 'flowbite-react';
import { HiPencilAlt, HiOutlineHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const SideBarComponent = ({ newPost, setNewPost, handleCreatePost, posts, handleEdit }) => {
  const [activeItem, setActiveItem] = useState('home'); 

  const handleItemClick = (itemName) => {
    setActiveItem(itemName); 
  };
    return (
        <Sidebar className="flex-shrink-0 bg-slate-100">
            <Sidebar.Items>
                <Sidebar.Item
                    active={activeItem === 'home'}
                    icon={<HiOutlineHome className="w-6 h-6 text-black" />}
                    onClick={() => handleItemClick('home')}
                >
                    <Link to="/">Home</Link>
                </Sidebar.Item>
                <Sidebar.Item
                    icon={<HiPencilAlt className="w-6 h-6 text-black" />}
                    onClick={() => handleItemClick('create')}
                    active={activeItem === 'create'}
                >
                    <div>
                        <input
                            type="text"
                            className="block w-full px-5 py-3 mt-1 placeholder-grey-50 bg-white border border-grey-30 rounded-md  focus:outline-none"
                            placeholder="Title"
                            value={newPost.title}
                            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        />
                        {/* Rest of your create post form */}
                        <Button className="text-black font-serif font-medium" onClick={handleCreatePost}>
                            Create Blog Post
                        </Button>
                    </div>
                </Sidebar.Item>
                {posts.map((post) => (
                    <Sidebar.Item key={post.id} onClick={() => handleItemClick(post.id)}>
                        <Link to={`/view/${post.id}`}>{post.title}</Link>
                        <Button onClick={() => handleEdit(post.id)}>Edit</Button>
                    </Sidebar.Item>
                ))}
            </Sidebar.Items>
        </Sidebar>
       
   
  );
};

export default SideBarComponent;
