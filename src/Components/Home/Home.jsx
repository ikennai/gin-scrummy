import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const Home = props => {
    console.log('>>> HOME');
    console.log(props);

    props.history.push('/standard');

    return (
        <div>
            <h1>Welcome to<br />Gin Scrummy</h1>
        </div>
    );
}

export default Home;
