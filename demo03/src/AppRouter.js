import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"

import Index from './Pages';
import List from './Pages/List';

// function Index(){
//     return <h2>Cyq.com</h2>
// }

// function List(){
//     return <h2>List-page</h2>
// }

function AppRouter(){
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/">列表</Link></li>
            </ul>
            <Routes>
            <Route path="/" exact component={Index} />
            <Route path="/list" component={List} />
            </Routes>
        </Router>
    );
}

export default AppRouter;