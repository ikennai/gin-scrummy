// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Content from './Layout/Content/Content';
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Error404 from './Components/Error404/Error404';
import Standard from './Components/Standard/Standard';
import Fibonacci from './Components/Fibonacci/Fibonacci';

const AppRoutes = (props) => (
    <Content>
        <Switch>
            <Route path="/about" component={About} exact />
            <Route path="/fibonacci" component={Fibonacci} exact />
            <Route path="/standard" component={Standard} exact />
            <Route path="/" component={Home} exact />
            <Route component={Error404} />
        </Switch>
    </Content>
);

export default AppRoutes;
