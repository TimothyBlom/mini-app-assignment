import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div id='header'>

<div className='routingButtonsContainer button'>
            <Link className='routingButtons' to='/Countdown'>Countdown</Link>
            </div>
            <div className='routingButtonsContainer button'>
            <Link className='routingButtons' to='/Uploader'>Upload Afbeelding</Link>
            </div>
                               
        </div>
    )
};

export default Header;