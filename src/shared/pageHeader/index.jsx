/* ----------------------------------------- */
/*                 DEPENDENCIES              */
/* ----------------------------------------- */
// Packages

// UI Local Components
import Menu from '../constants'; 

// Styles
import './index.css';

/* ----------------------------------------- */
/*                 PAGE HEADER               */
/* ----------------------------------------- */
function PageHeader() {
  /* ************** RENDERING ************** */
  return (
    <div className="header text-center">
        <h1>pomodoro</h1>
        <div className="menu flex">
          <Menu />
        </div>
    </div>
  );
}

export default PageHeader;