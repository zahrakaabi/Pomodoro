/* ----------------------------------------- */
/*                 DEPENDENCIES              */
/* ----------------------------------------- */
// Packages

// UI Local Components
import { PageHeader } from './components';

// Styles
import './shared/styles/global.css';
import './shared/styles/variables.css';

/* ----------------------------------------- */
/*                 POMODORO APP              */
/* ----------------------------------------- */
function App() {
  /* ************** RENDERING ************** */
  return (
    <div className="App flex items-center justify-center flex-column">
      <PageHeader />
    </div>
  );
}

export default App;
