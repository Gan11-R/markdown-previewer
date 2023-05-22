import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { marked } from 'marked';

const Preview = () => {

  const markdownText = useSelector((state) => state.markdownText);
  const isPreviewVisible = useSelector((state) => state.isPreviewVisible);

  useEffect(() => {
    if (isPreviewVisible) {
      const previewElement = document.getElementById('preview');
      previewElement.innerHTML = marked(markdownText);
    }
  }, [isPreviewVisible, markdownText]);

  const [iconOpacity, setIconOpacity] = useState(1);
  
  const containerStyle = {
    margin: '80px auto 0 auto',
    width: '60%'
  }

  const headPreviewStyle = {
    backgroundColor: '#009FBD',
    color: 'white',
    padding: '5px',
    display: 'flex',
    justifyContent: 'space-between'
  }

  const previewStyle = {
    width: '100%',
    backgroundColor: '#F9E2AF',
    padding: '10px'
  }

  const h3Style = {
    marginBottom: '0'
  }

  const iconStyle = {
    display: 'flex',
    alignItems: 'center',
    transform: 'opacity 0.1s ease',
    opacity: iconOpacity
  }

  const handleIconMouseEnter = () => {
    setIconOpacity(0.5);
  }

  const handleIconMouseLeave = () => {
    setIconOpacity(1);
  }

  if (!isPreviewVisible) {
    return null; // Return null if preview is not visible
  }

  return (
      <div id="container" style={containerStyle}>
        <div id="head-preview" style={headPreviewStyle}>
          <h3 style={h3Style}>Preview</h3>
          <i 
            class="fa fa-arrows-alt" 
            style={iconStyle}
            onMouseEnter={handleIconMouseEnter}
            onMouseLeave={handleIconMouseLeave}></i>
        </div>
        {isPreviewVisible && (
        <div id="preview" style={previewStyle} dangerouslySetInnerHTML={{ __html: marked(markdownText) }}></div>
      )}
      </div>
    );
  };

export default Preview;
