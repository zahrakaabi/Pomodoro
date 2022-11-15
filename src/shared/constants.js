/* ------------------------------------------ */
/*                 DEPENDENCIES               */        
/* ------------------------------------------ */
// Packages
import { useContext } from 'react';

// Context
import { ButtonContext } from '../context/Context'; 

/* ------------------------------------------ */
/*               MENU BUTTONS TAB             */        
/* ------------------------------------------ */
const MENU_BUTTONS = [
    {
        id: 0,
        buttonName: 'pomodoro',
    },
    {
        id: 1,
        buttonName: 'short break',
    },
    {
        id: 2,
        buttonName: 'long break',
    }
];

/* ------------------------------------------ */
/*                    MENU                    */        
/* ------------------------------------------ */
function Menu() {
    const {selectedMenuButton, setSelectedMenuButton} = useContext(ButtonContext);

    /* ************* RENDERING ************** */
    return (
        MENU_BUTTONS.map((button) => (
            <button 
              className={button.buttonName === selectedMenuButton ? 'active' : ''} 
              key={button.id} 
              type="submit"
              onClick={() => setSelectedMenuButton(button.buttonName)}
            >
                {button.buttonName}
            </button>
        ))
    )
}

export default Menu;