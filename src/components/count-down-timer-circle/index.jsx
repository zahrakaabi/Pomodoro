/* ----------------------------------------- */
/*                 DEPENDENCIES              */
/* ----------------------------------------- */
// Packages
import { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

// Styles
import './index.css';

/* ----------------------------------------- */
/*                 POMODORO APP              */
/* ----------------------------------------- */
function UrgeWithPleasureComponent() {
    // STATES
    const [isPlaying, setIsPlaying] = useState(true);

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
            duration={60}
            colors='#f87273'
            strokeWidth={6}
            isPlaying={isPlaying}
        >
            {children}
        </CountdownCircleTimer>
    </div>
  );
}

export default UrgeWithPleasureComponent;