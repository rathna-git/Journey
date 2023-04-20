import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import monument from "../../../public/assets/monumentValley.jpg";
import italy from "../../../public/assets/italy.jpg";
import rome from "../../../public/assets/rome.jpg";
import savannah from "../../../public/assets/savannah.jpg";

const Post  =() => {
   

    return (
        <section className="row justify-content-center postArea">
           <div class="mb-6 individualPost">
            <div>
            <h2>Epic day at Monument Valley</h2>
            </div>
            <div className="imgdiv">
            <img className="postImg" src={monument}/>
            </div>
           <div>
           <h3 className=""><span className="glyphicon glyphicon-map-marker"></span> Monument Valley, Utah</h3>
           </div>
           <div>
            <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae perspiciatis illum, 
                distinctio a, ratione alias consequuntur, labore nam assumenda enim commodi necessitatibus vitae laudantium sit fugiat quibusdam perferendis officiis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sapiente, libero praesentium aliquid dolores 
                rem tempore distinctio pariatur molestias maxime nisi quia reiciendis sequi, eum voluptate similique debitis id rerum?
            </article>
           </div>
           </div> 

           <hr />

           <div class="mb-6 individualPost">
            <div>
            <h2>Italian riviera town: The prettiest spot on Italy's Ligurian coast</h2>
            </div>
            <div className="imgdiv">
            <img className="postImg" src={italy}/>
            </div>
           <div>
           <h3 className=""><span className="glyphicon glyphicon-map-marker"></span> Cinque Terre, Italy</h3>
           </div>
           <div>
            <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae perspiciatis illum, 
                distinctio a, ratione alias consequuntur, labore nam assumenda enim commodi necessitatibus vitae laudantium sit fugiat quibusdam perferendis officiis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sapiente, libero praesentium aliquid dolores 
                rem tempore distinctio pariatur molestias maxime nisi quia reiciendis sequi, eum voluptate similique debitis id rerum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, necessitatibus sit. Ipsa accusantium accusamus error quae reprehenderit ut, possimus fugiat, vitae tempora temporibus eius quibusdam totam alias molestias iure debitis.
            </article>
           </div>

           </div> 

           <hr />

           <div class="mb-6 individualPost">
            <div>
            <h2>Visiting the Colosseum in Rome</h2>
            </div>
            <div className="imgdiv">
            <img className="postImg" src={rome}/>
            </div>
           <div>
           <h3 className=""><span className="glyphicon glyphicon-map-marker"></span> Roma RM, Italy </h3>
           </div>
           <div>
            <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae perspiciatis illum, 
                distinctio a, ratione alias consequuntur, labore nam assumenda enim commodi necessitatibus vitae laudantium sit fugiat quibusdam perferendis officiis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sapiente, libero praesentium aliquid dolores 
                rem tempore distinctio pariatur molestias maxime nisi quia reiciendis sequi, eum voluptate similique debitis id rerum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, necessitatibus sit. Ipsa accusantium accusamus error quae reprehenderit ut, possimus fugiat, vitae tempora temporibus eius quibusdam totam alias molestias iure debitis.
            </article>
           </div>

           </div> 


           <hr />

           <div class="mb-6 individualPost">
            <div>
            <h2>On a sunny summer day in Savannah</h2>
            </div>
            <div className="imgdiv">
            <img className="postImg" src={savannah}/>
            </div>
           <div>
           <h3 className=""><span className="glyphicon glyphicon-map-marker"></span> Savannah, Georgia</h3>
           </div>
           <div>
            <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae perspiciatis illum, 
                distinctio a, ratione alias consequuntur, labore nam assumenda enim commodi necessitatibus vitae laudantium sit fugiat quibusdam perferendis officiis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sapiente, libero praesentium aliquid dolores 
                rem tempore distinctio pariatur molestias maxime nisi quia reiciendis sequi, eum voluptate similique debitis id rerum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, necessitatibus sit. Ipsa accusantium accusamus error quae reprehenderit ut, possimus fugiat, vitae tempora temporibus eius quibusdam totam alias molestias iure debitis.
            </article>
           </div>

           </div> 
        </section>
    )
}

export default Post;