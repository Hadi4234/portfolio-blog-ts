"use client"
import React from 'react'
import { Button } from './ui/button';

function DownloadButton() {
  const onButtonClick = () => {
    const pdfUrl = "abdullahalhadi.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "abdullahalhadi.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>

      <Button onClick={onButtonClick}>
        Download CV
      </Button>

    </>
  );
}

export default DownloadButton