
import React, { useState } from "react";
import Form from './form.jsx';


const LoginPage = () => {
    return (
    <div className="container masthead">
        
        <nav className="navbar navbar-fixed-top loginnav">          
                <div className="navbar-header ">
                    <h1>Journey</h1>
                </div>          
        </nav>

  <section className="row justify-content-center loginContainer">
  <h4 className='mb-10'>Welcome to Journey, the social media for Travelers!</h4>
   <Form />
   
  </section>

</div>
    )
}

export default LoginPage;