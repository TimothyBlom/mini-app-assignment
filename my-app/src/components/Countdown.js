import React from 'react';


const Countdown = () => {
    


    return (
        <div>
            <h1>Countdown</h1>

            <div>
                <div className='counter'></div>
                <input className='counterInput' type='number' placeholder='Seconden' />
                <div className='counterButtons'>
                    <button className='button start' id='start' value='1' onclick='check(this)'>Start</button>
                    <button className='button start' id='verder' value='1' onclick='check(this)'>verder</button>
                    <button className='button stop' id='stop' value='0' onclick='check(this)'>pauze</button>
                    <button className='button start' id='submit' onclick='submit()'>submit</button>
                </div>
            </div>

        </div>
    )
};

export default Countdown;