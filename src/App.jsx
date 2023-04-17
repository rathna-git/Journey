import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';

import Main from './components/main';

const App = props => {
    
        return(
        // <div className='router'>
        //     <main>
        //     <Routes>
        //         <Route 
        //             exact 
        //             path='/' 
        //             component={Main}
        //         />
         
        //     </Routes>     
        //     </main>
            
        // </div>
        <Main />
        )
    
}

export default App;