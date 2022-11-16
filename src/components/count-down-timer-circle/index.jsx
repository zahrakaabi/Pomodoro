/* ----------------------------------------- */
/*                 DEPENDENCIES              */
/* ----------------------------------------- */
// Packages
import { useState, useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

// Context
import { ButtonContext, InputContext } from '../../context/Context';

// Styles
import './index.css';

/* ----------------------------------------- */
/*                 POMODORO APP              */
/* ----------------------------------------- */
function UrgeWithPleasureComponent() {
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
            duration={(selectedMenuButton === 'pomodoro' ? formInput.pomodoro : 0) ||
                      (selectedMenuButton === 'short break' ? formInput.shortBreak : 0) || 
                      (selectedMenuButton === 'long break' ? formInput.longBreak : 0)}
            colors='var(--secondary-color)'
            strokeWidth={6}
            isPlaying={isPlaying}
        >
            {children}
        </CountdownCircleTimer>
    </div>
  );
}

export default UrgeWithPleasureComponent;