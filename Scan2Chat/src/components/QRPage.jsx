import React, { useState } from 'react';
import QRCodeGenerator from './QrCodeGenerator';
import { GrFormPreviousLink } from "react-icons/gr";
import './QRPage.css';

const QRPage = ({ handleGoBack }) => {
  const [phone, setPhone] = useState('');
  const [url, setUrl] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [qrColor, setQrColor] = useState('#000000');

  const handleGenerateQR = () => {
    setUrl(`https://wa.me/${phone}?text=${encodeURIComponent(customMessage)}`);
  };


  return (
    <div className="App">
      <GrFormPreviousLink onClick={handleGoBack} />
      <div className="container">
        <h1 className='header'>Generate Your WhatsApp QR Code</h1>
        <div className="both">
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter custom message"
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
          />

          <button onClick={handleGenerateQR}>Generate QR Code</button>
        </div>
        <QRCodeGenerator url={url} color={qrColor} />
      </div>
    </div>
  );
};

export default QRPage;
