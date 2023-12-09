import React from 'react';
import { Link } from 'react-router-dom';
import { useSidebarItemContext } from './Context/SideBarItemContext';
import { Sidebar } from 'flowbite-react';
import {
  HiOutlineHome,
  HiOutlinePencilAlt,
  HiArrowLeft,
  HiArrowRight,
} from 'react-icons/hi';

const CustomSidebar = ({  user, handleLogout,  }) => {
   const { activeItem, setActiveItem } = useSidebarItemContext();
  return (
    <div className="hide-scroll">
      {/* Logo */}
      <Link to="/">
        <h1 className="font-Unbounded font-bold mt-6 mb-5 px-6 text-gray-100 xl:text-4xl lg:text-3xl md:text-2xl text-xl">
          MyBlog
        </h1>
      </Link>

      {/* Sidebar links */}
      <Sidebar>
        <Sidebar.Items>
          <Sidebar.Item
            onClick={() => setActiveItem('home')}
            active={activeItem  === 'home'}
            icon={<HiOutlineHome className="w-6" />}
          >
            Home
          </Sidebar.Item>
          {user ? (
            <>
              <Sidebar.Item
                onClick={() => setActiveItem('create')}
                active={activeItem  === 'create'}
                icon={<HiOutlinePencilAlt className="w-6" />}
              >
                Create
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => handleLogout()}
                active={activeItem  === 'logout'}
                icon={<HiArrowLeft className="w-6" />}
              >
                Logout
              </Sidebar.Item>
            </>
          ) : (
            <Sidebar.Item
              onClick={() => setActiveItem('login')}
              active={activeItem  === 'login'}
              icon={<HiArrowRight className="w-6" />}
            >
              Login
            </Sidebar.Item>
          )}
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default CustomSidebar;
