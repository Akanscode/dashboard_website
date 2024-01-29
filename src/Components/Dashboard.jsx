import React from 'react';
//import { useNavigate } from 'react-router-dom';
//import CreateBlogPost from './CreateBlogPost';
//import EditBlogPost from './EditBlogPost';
import ViewBlogPost from './ViewBlogPost';
import CustomSidebar from './CustomSideBar';

const Dashboard = () => {
  //const [posts, setPosts] = useState([]);
  //const [editing, setEditing] = useState(false);
  //const [currentPost, setCurrentPost] = useState(null);
  
  //const navigate = useNavigate();

  /*useEffect(() => {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;

  if (isLoggedIn) {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(storedPosts);
  } else {
    setPosts([]);
  }
}, []);

  useEffect(() => {
    // Save blog posts to localStorage whenever the 'posts' state changes
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    // Update state and navigate to the home page
    setPosts([...posts, newPost]);
    navigate('/');
    setActiveTab('home');
  };

  const editPost = (blogPost) => {
    setEditing(true);
    setCurrentPost(blogPost);
    setActiveTab('edit');
  };

  const updatePost = (updatedPost) => {
    const updatedPosts = posts.map((blogPost) =>
      blogPost.id === updatedPost.id ? updatedPost : blogPost
    );
    setPosts(updatedPosts);
    setEditing(false);
    setCurrentPost(null);
    setActiveTab('home');
  };

  const viewPost = (postId) => {
    const updatedPosts = posts.filter((blogPost) => blogPost.id !== postId);
    setPosts(updatedPosts);
  };*/

 

  return (
    <div>
      <CustomSidebar  />
      <div className="p-4 sm:ml-64">
        <div className='p-4 '>
          
           
          
              <>
                  <h2 className=' text-center font-bold text-xl capitalize'>Blog Posts</h2>
                  <div className=''>
                   
              <ViewBlogPost
              

                      />
                    
                  </div>
                </>
            
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
