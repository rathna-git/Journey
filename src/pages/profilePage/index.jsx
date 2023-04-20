import React, { useState } from "react";
import PostInput from '../widgets/postInput.jsx';
import Post from '../widgets/post.jsx';

const ProfilePage = () => {
    return (
    <div className="postContainer col-lg-4">
    

  <section className="row justify-content-center inputContainer">
  
   <PostInput/>

  </section>

  <section className="row justify-content-center postMainSection">
  
  <Post/>

 </section>
  
</div>

    )
}


export default ProfilePage;