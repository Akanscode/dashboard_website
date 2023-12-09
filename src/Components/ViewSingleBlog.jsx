import React from 'react';
import { withRouter } from 'react-router-dom';

const ViewSingleBlogPost = ({ posts, history, match }) => {
  const { id } = match.params;

  const post = posts.find((post) => post.id === parseInt(id));

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>View Blog Post</h1>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={goBack}>Go Back</button>
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default withRouter(ViewSingleBlogPost);
