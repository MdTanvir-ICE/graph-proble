import React from 'react';
import './CreatePost.css'

const CreatePost = () => {
  return (
  <div className="createPost">
    <div className="createPost_banner">
    <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <input type="text form-control"></input>
      <button className="btn btn-primary">Cover Photo</button>
    </div>
    <div className="createPost_title">
      title  
    </div>
    <div className="createPost_editor">
        editor
    </div>
    <div className="createPost_footer">
        footer
    </div>
   
  </div>
  );
};

export default CreatePost;