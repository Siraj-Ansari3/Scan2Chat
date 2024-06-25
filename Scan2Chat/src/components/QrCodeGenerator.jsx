import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import './QRCodeGenerator.css'
const QRCodeGenerator = ({ url }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && url) {
        // this line creates the QRCode
      QRCode.toCanvas(canvasRef.current, url, (error) => {
        if (error) console.error(error);
      });
    }
  }, [url]);


  
  const handleDownload = () => {
    if (canvasRef.current) {
        canvasRef.current.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'qrcode.png';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        });
      }
  };

  return (
    <div className='qrcont'>
      <h2>Scan to Chat on WhatsApp</h2>

      {/* this line changes canvasRef.current to [current: <canvas>] */}
      {/* ref is the property of useRef hook */}
      <canvas className='canvas' ref={canvasRef}></canvas>
      {url && <button onClick={handleDownload}>Download QR Code</button>}

    </div>
    
  );
};

export default QRCodeGenerator;
