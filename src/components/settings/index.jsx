/* ----------------------------------------- */
/*                 DEPENDENCIES              */
/* ----------------------------------------- */
// Packages

// Images
import SETTINGS_ICON from '../../images/settings.png';

// Styles
import './index.css';

/* ----------------------------------------- */
/*                 POMODORO APP              */
/* ----------------------------------------- */
function Settings() {
  /* ************** RENDERING ************** */
  return (
    <div className="settings">
        <div className="setting-icon">
            <img src={SETTINGS_ICON} alt="setings_icon" />
        </div>
    </div>
  );
}

export default Settings;