/* ----------------------------------------- */
/*                 DEPENDENCIES              */
/* ----------------------------------------- */
// Packages
import { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import addNotification from 'react-push-notification';

// PropType
import PropTypes from 'prop-types';

// Styles
import './index.css';

/* ----------------------------------------- */
/*                 POMODORO APP              */
/* ----------------------------------------- */
function UrgeWithPleasureComponent({  duration }) {
    // STATES
    const [isPlaying, setIsPlaying] = useState(true);

    // PUSH NOTIFICATIONS
    const PushNotification = () => {
      addNotification({
          title: 'POMODORO ZK',
          message: 'This is a notification to tell you that your time ended',
          theme: 'darkblue',
          native: true
      });
    };

    // CONSTANTS
    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        // push notif if time ended
        if (minutes === 0 && seconds === 0) {
          PushNotification();
        }
        /* ------ RENDERING ------*/
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