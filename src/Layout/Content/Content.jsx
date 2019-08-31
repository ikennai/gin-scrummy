import React, { Component } from 'react';

// Styles
import './Content.scss';
import ScrummyCard from '../../Components/ScrummyCard/ScrummyCard';

export default class Content extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="content-container">
                {this.props.children}
            </div>
        );
    }
}
