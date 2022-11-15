/* ----------------------------------------- */
/*                 DEPENDENCIES              */
/* ----------------------------------------- */
// Packages
import { useState, useContext } from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Context
import { InputContext } from '../../../context/Context';

// Images
import CLOSE_ICON from '../../../images/close.png';

// Styles
import './index.css';

/* ----------------------------------------- */
/*                 POMODORO APP              */
/* ----------------------------------------- */
function SettingsBox({ setIsOpen }) {
    // Context
    const {formInput, setFormInput} = useContext(InputContext);

  /* ************** RENDERING ************** */
  return (
    <div className="settings-box">
        {/* SETTINGS */}
        <div className='flex justify-between items-center p-r'>
            <h1 className='title'>Settings</h1>
            <div className="close-icon" onClick={() => setIsOpen(false)}>
                <img src={CLOSE_ICON} alt="close_icon" />
            </div>
        </div>
        <hr />
        {/* TIME (MINUTES) */}
        <div className="Time p-r">
            <h2>TIME (MINUTES)</h2>
            <form className="form flex justify-between">
                <div className="group-form">
                    <label>pomodoro</label>
                    <input 
                    type="number" 
                    placeholder="0"
                    name="pomodoro"
                    value={formInput.pomodoro}
                    onChange={(e) => setFormInput({...formInput, pomodoro: e.target.value})} />
                </div>
                <div className="group-form">
                    <label>short break</label>
                    <input 
                    type="number" 
                    placeholder="0"
                    name="shortBreak"
                    value={formInput.shortBreak}
                    onChange={(e) => setFormInput({...formInput, shortBreak: e.target.value})} />
                </div>
                <div className="group-form">
                    <label>long break</label>
                    <input 
                    type="number" 
                    placeholder="0"
                    name="longBreak"
                    value={formInput.longBreak}
                    onChange={(e) => setFormInput({...formInput, longBreak: e.target.value})} />
                </div>
                <button type="submit" 
                className="form-submit flex justify-center items-center"
                onClick={() => setIsOpen(false)}>
                    Apply
                </button>
            </form>
        </div>
        {/* FONTS */}
        <div className="fonts-conainer flex justify-between p-r">
            <h3>FONTS</h3>
            <div className="fonts flex">
                <div className="font font-1 flex items-center justify-center">Aa</div>
                <div className="font font-2 flex items-center justify-center">Aa</div>
                <div className="font font-3 flex items-center justify-center">Aa</div>
            </div>
        </div>
        {/* COLORS */}
        <div className="coolors-conainer flex justify-between p-r">
            <h3>COLORS</h3>
            <div className="colors flex">
                <div className="color color-1" />
                <div className="color color-2" />
                <div className="color color-3" />
            </div>
        </div>
    </div>
  );
}

SettingsBox.propTypes = {
    setIsOpen: PropTypes.func.isRequired
}

export default SettingsBox;