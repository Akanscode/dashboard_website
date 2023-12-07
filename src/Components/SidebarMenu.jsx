import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import { HiOutlineHome, HiOutlinePencilAlt } from 'react-icons/hi';

const CustomSidebar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [active, setActive] = useState('login');

  const handleLogin = () => {
    setLoggedIn(true);
    setActive('home');
  };

  return (
    <div className="h-screen bg-gray-400 w-full font-Josefin relative">
      {/* logo */}
      <Link to="/">
        <h1 className="font-Unbounded font-bold mt-6 mb-5 px-6 text-gray-100 xl:text-4xl lg:text-3xl md:text-2xl text-xl">
          MyBlog
        </h1>
      </Link>

      {/* links */}
      <Sidebar>
        <Sidebar.Items>
          {!loggedIn ? (
            <Sidebar.Item
              onClick={handleLogin}
              active={active === 'login'}
              icon={<HiOutlinePencilAlt className="w-6" />}
            >
              Login
            </Sidebar.Item>
          ) : (
            <>
              <Sidebar.Item
                onClick={() => setActive('home')}
                active={active === 'home'}
                icon={<HiOutlineHome className="w-6" />}
              >
                Home
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => setActive('create')}
                active={active === 'create'}
                icon={<HiOutlinePencilAlt className="w-6" />}
              >
                Create Blog
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => setActive('edit')}
                active={active === 'edit'}
                icon={<HiOutlinePencilAlt className="w-6" />}
              >
                Edit Blog
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => setActive('view')}
                active={active === 'view'}
                icon={<HiOutlinePencilAlt className="w-6" />}
              >
                View Blog
              </Sidebar.Item>
            </>
          )}
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default CustomSidebar;
