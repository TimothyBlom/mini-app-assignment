import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Header extends Component {

    render(){
        return (
            <div id='header'>

                <Link className='routingButtons' to='/'>Home</Link>
                <Link className='routingButtons' to='/Countdown'>Countdown</Link>
                <Link className='routingButtons' to='/Uploader'>Uploader</Link>
                               
            </div>
        )
    }
};