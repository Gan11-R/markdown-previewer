import React from 'react';
import showdown from 'showdown';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const converter = new showdown.Converter();

const Preview = () => {

  const markdownText = useSelector((state) => state.markdownText);

  useEffect(() => {
    // Update the preview whenever markdownText changes
    const previewElement = document.getElementById('preview');
    previewElement.innerHTML = converter.makeHtml(markdownText);
  }, [markdownText]);  
  
  return (
      <div>
        <h3>Preview</h3>
        <div id="preview" />
      </div>
    );
  };
  
  export default Preview;
