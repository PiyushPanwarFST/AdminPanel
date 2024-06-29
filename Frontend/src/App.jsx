import React from 'react';
import './App.css'; // Import global CSS styles
import MenuBar from './components/MenuBar'; // Import MenuBar component
import Detail from './components/Detail'; // Import Detail component

const App = () => {
  return (
    <>
      {/* Main container for the app sections */}
      <div className='section'>
        {/* Render the MenuBar component */}
        <MenuBar />
        {/* Render the Detail component */}
        <Detail />
      </div>
    </>
  );
}

export default App;
