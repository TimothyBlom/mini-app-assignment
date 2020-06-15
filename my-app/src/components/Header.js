import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Header extends Component {

    render(){
        return (
            <div>

                <Link to='/'>Home</Link>
                <br />
                <Link to='/Countdown'>Countdown</Link>
                <br />
                <Link to='/Uploader'>Uploader</Link>
                               
            </div>
        )
    }
};