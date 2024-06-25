import React, { useState } from 'react';
import QRPage from './components/QRPage';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleCLick = () => {
    setIsClicked(true);
  }

  const handleGoBack = () => {
    setIsClicked(false);
  }


  return (
    <div>
      { !isClicked && <div>
        <h1>WELCOME! To Our Home Page</h1>
        <button onClick={handleCLick}>Whatsapp QR code</button>
      </div>}
      {isClicked && <QRPage handleGoBack = {handleGoBack} />}
    </div>
  );
}

export default App;
