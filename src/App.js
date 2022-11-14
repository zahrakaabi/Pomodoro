/* ----------------------------------------- */
/*                 DEPENDENCIES              */
/* ----------------------------------------- */
// Packages

// UI Local Components
import { PageHeader, UrgeWithPleasureComponent, Settings } from './components';

// Styles
import './shared/styles/global.css';
import './shared/styles/variables.css';

/* ----------------------------------------- */
/*                 POMODORO APP              */
/* ----------------------------------------- */
function App() {
  /* ************** RENDERING ************** */
  return (
    <div className="App flex flex-column justify-around items-center">
      <PageHeader />
      <UrgeWithPleasureComponent />
      <Settings />
    </div>
  );
}

export default App;
