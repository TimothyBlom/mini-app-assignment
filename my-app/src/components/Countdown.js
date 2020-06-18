import React, {useState, useEffect} from 'react';

const Countdown = () => {
    const [countdownTime, setCountdownTime] = useState(0);
    const [countdownActive, setCountdownActive] = useState(false);
  
    const toggle = () => {
        setCountdownActive(!countdownActive);
    }
  
    const reset = () => {
        setCountdownTime(0);
        setCountdownActive(false);
    }
  
    useEffect(() => {
      let interval = null;
      if (countdownActive) {
        interval = setInterval(() => {
            setCountdownTime(countdownTime => countdownTime - 1);
        }, 1000);
      } else if (!countdownActive && countdownTime !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [countdownActive, countdownTime]);
  
    return (
      <div className='countdownContainer'>

        <h1>CountDown</h1>

        <div className="counter">
          {countdownTime}s
        </div>

        <input className='counterInput' type='number' placeholder='Seconden' />

        <div className="row">

          <button className={`button button-primary button-primary-${countdownActive ? 'active' : 'inactive'}`} onClick={toggle}>
            {countdownActive ? 'Pauze' : 'Start'}
          </button>

          <button className="countdownButtons" onClick={reset}> Reset </button>

        </div>

      </div>
    );
  };

export default Countdown;