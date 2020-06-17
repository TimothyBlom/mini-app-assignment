import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div id='header'>

            <Link className='routingButtons' to='/'>Home</Link>
            <Link className='routingButtons' to='/Countdown'>Countdown</Link>
            <Link className='routingButtons' to='/Uploader'>Uploader</Link>
                               
        </div>
    )
};

export default Header;