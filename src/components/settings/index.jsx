/* ----------------------------------------- */
/*                 DEPENDENCIES              */
/* ----------------------------------------- */
// Packages
import { useState } from 'react';

// UI Local Component
import SettingsBox from './settings-box';

// Images
import SETTINGS_ICON from '../../images/settings.png';

// Styles
import './index.css';

/* ----------------------------------------- */
/*                 POMODORO APP              */
/* ----------------------------------------- */
function Settings() {
  // CONSTANTS
  const [isOpen, setIsOpen] = useState(false);

  /* ************** RENDERING ************** */
  return (
    <>
      {isOpen && <SettingsBox setIsOpen={setIsOpen} />}
      <div className="settings">
          <div 
            className="setting-icon"
            onClick={() => setIsOpen(!isOpen)}
          >
              <img src={SETTINGS_ICON} alt="setings_icon" />
          </div>
      </div>
    </>
  );
}

export default Settings;