/* ------------------------------------------ */
/*                 MENU BUTTONS               */        
/* ------------------------------------------ */
// Packages
import { useState } from 'react';

/* ------------------------------------------ */
/*                 MENU BUTTONS               */        
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

function Menu() {
    const [active, setActive] = useState(0);

    /* ************* RENDERING ************** */
    return (
        MENU_BUTTONS.map((button) => (
            <button 
              className={button.id === active && 'active'} 
              key={button.id} 
              type="submit"
              onClick={() => setActive(button.id)}
            >
                {button.buttonName}
            </button>
        ))
    )
}

export default Menu;