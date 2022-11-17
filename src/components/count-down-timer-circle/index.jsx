/* ----------------------------------------- */
/*                 DEPENDENCIES              */
/* ----------------------------------------- */
// Packages
import { useState, useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

// PropType
import PropTypes from 'prop-types';

// Context
import { ButtonContext, InputContext } from '../../context/Context';

// Styles
import './index.css';

/* ----------------------------------------- */
/*                 POMODORO APP              */
/* ----------------------------------------- */
function UrgeWithPleasureComponent({  duration }) {
    // STATES
    const [isPlaying, setIsPlaying] = useState(true);

    // CONTEXT
    const {selectedMenuButton} = useContext(ButtonContext);
    const {formInput} = useContext(InputContext);

    // CONSTANTS
    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
        return (
            <div className="flex flex-column text-center">
              <h1 className='timer'>{minutes}:{seconds}</h1>
              <button className="player" type="submit" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'PAUSE' : 'PLAY'}
              </button>
            </div>
        )
    }

  /* ************** RENDERING ************** */
  return (
    <div className="count-down-timer-container">
        <CountdownCircleTimer
            size={210}
            duration={duration}
            colors='var(--secondary-color)'
            strokeWidth={6}
            isPlaying={isPlaying}
        >
            {children}
        </CountdownCircleTimer>
    </div>
  );
}

UrgeWithPleasureComponent.propTypes = {
  duration: PropTypes.number.isRequired
}

export default UrgeWithPleasureComponent;