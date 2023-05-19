import React from 'react';

const Editor = ({ markdownText, handleChange }) => {
    return (
      <div>
        <h3>Markdown Editor</h3>
        <textarea value={markdownText} onChange={handleChange} />
      </div>
    );
  };
  
export default Editor;