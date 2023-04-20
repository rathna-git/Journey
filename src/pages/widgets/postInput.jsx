import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const PostInput  =() => {
   

    return (
        <section className="row justify-content-center postInput">
           <div class="form-group">
            <div className="mb-4">
            <label htmlFor="postInput" className="form-label"></label>
            <input type="text" className="form-control form-control-lg" id="postInputArea"/>
            </div>
            <div className="mb-4 submitArea">
            <button className=" btn btn-link" role="button"><span className="glyphicon glyphicon-picture"></span></button>
            <button className=" btn btn-link" role="button"><span className="glyphicon glyphicon-trash"></span></button>
            <button className=" btn btn-link" role="button"><span className="glyphicon glyphicon-star"></span></button>
            <button className="btn btn-xl btn-primary" role="button" type="submit">POST</button>
            </div>
           </div> 
        </section>
    )
}

export default PostInput;