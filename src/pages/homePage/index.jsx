import React from "react";
import NavBar from "../navbar/index.jsx";
import UserWidget from "../widgets/userWidget.jsx";
import ProfilePage from "../profilePage/index.jsx";

const HomePage = () => {
    return (
   
           <>
           <NavBar />
           <div className="homeContainer">
            <UserWidget />
            <ProfilePage />
          </div>
          </>
           
    )
}

export default HomePage;