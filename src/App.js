/* ----------------------------------------- */
/*                 DEPENDENCIES              */
/* ----------------------------------------- */
// Packages
import { useState } from 'react';

// Context
import { ButtonContext, InputContext } from './context/Context';

// UI Local Components
import { PageHeader, UrgeWithPleasureComponent, Settings } from './components';

// Styles
import './shared/styles/global.css';
import './shared/styles/variables.css';

/* ----------------------------------------- */
/*                 POMODORO APP              */
/* ----------------------------------------- */
function App() {
  const [selectedMenuButton, setSelectedMenuButton] = useState('pomodoro');
  const [formInput, setFormInput] = useState({
    pomodoro: '',
    shortBreak: '',
    longBreak: ''
  })

  /* ************** RENDERING ************** */
  return (
    <div className="App flex flex-column justify-around items-center">
      <ButtonContext.Provider value={{ selectedMenuButton, setSelectedMenuButton }}>
        <PageHeader />
        <InputContext.Provider value={{ formInput, setFormInput }}>
          <UrgeWithPleasureComponent />
          <Settings />
        </InputContext.Provider>
      </ButtonContext.Provider>
    </div>
  );
}

export default App;
