/* ----------------------------------------- */
/*                 DEPENDENCIES              */
/* ----------------------------------------- */
// Packages
import { useContext, useState } from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Context
import { InputContext } from '../../../context/Context';

// CONTEXTS
import { FONTS_TAB, COLORS_TAB } from './constants';

// Images
import CLOSE_ICON from '../../../images/close.png';

// Styles
import './index.css';

/* ----------------------------------------- */
/*                 POMODORO APP              */
/* ----------------------------------------- */
function SettingsBox({ setIsOpen }) {
    // CONSTANTS
    const INDEX_FONT = localStorage.getItem('indexFont') ? localStorage.getItem('indexFont') : 0;
    const INDEX_THEME = localStorage.getItem('indexTheme') ? localStorage.getItem('indexTheme') : 0;

    // STATES
    const [activeFont, setActiveFont] = useState(INDEX_FONT);
    const [activeTheme, setActiveTheme] = useState(INDEX_THEME);

    // CONTEXT
    const {formInput, setFormInput} = useContext(InputContext);

    // SWITCH FONTS
    const SwitchFont = (font, index) => {
        document.documentElement.setAttribute('data-font', font);
        localStorage.setItem('font', font);
        localStorage.setItem('indexFont', index);
        setActiveFont(index);
    }

    // SWITCH THEMES
    const SwitchTheme = (theme, index) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        localStorage.setItem('indexTheme', index);
        setActiveTheme(index);
    }
    
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
                {FONTS_TAB?.map((font) => <div 
                    key={font.id} 
                    className={`font font-${font.id} ${font.id === parseInt(INDEX_FONT) ? 'active-font' : ''} flex items-center justify-center`}
                    onClick={() => SwitchFont(font.font, font.id)}>
                        Aa
                    </div>
                )}
            </div>
        </div>
        {/* COLORS */}
        <div className="coolors-conainer flex justify-between p-r">
            <h3>COLORS</h3>
            <div className="colors flex">
                {COLORS_TAB?.map((color) => <div 
                     className={`color color-${color.id} ${color.id === parseInt(INDEX_THEME) ? 'active-theme' : ''} `} 
                     key={color.id} 
                     onClick={() => SwitchTheme(color.color, color.id)} />
                )}
            </div>
        </div>
    </div>
  );
}

SettingsBox.propTypes = {
    setIsOpen: PropTypes.func.isRequired
}

export default SettingsBox;