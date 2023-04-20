
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import profilePic from "../../../public/assets/p1.jpg";
import instaHandle from "../../../public/assets/instagram.png";
import twitterHandle from "../../../public/assets/twitter.png";

const UserWidget =({_id, picturePath}) => {
    const [user, setUser] = useState();
    console.log(user);
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.user);
    
    const getUser = async() => {
        const response = await fetch(`http://localhost:3001/users/${_id}`, {
            method: "GET"
            
        });
        const data = await response.json();
        setUser(data);

    };

    useEffect(()=> {
        getUser();
    }, []);

    if(!user){
        return null;
    }

    const {
        firstName,
        lastName,
        friends
    } = user;

    return (
        <section className="col-4 userWidgetContainer">
            <div className="mb-4 ">
                <img className = "profilePic" src={profilePic}/>
            </div>
            <div className="mb-4">
                <h4>Google User</h4>
            </div>
            <div  className="mb-4">
            <h5><span className="glyphicon glyphicon-map-marker"></span> San Jose, CA </h5>
            </div>
            <hr />
            <div className="mb-4 connect">
                <img className = "insta" src={instaHandle}/>
                <img className = "twitter" src={twitterHandle}/>
            </div>
            
        </section>
    )
}

export default UserWidget;