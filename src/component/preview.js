import React from 'react';
import showdown from 'showdown';

const converter = new showdown.Converter();

const Preview = ({ markdownText }) => {
    return (
      <div>
        <h3>Preview</h3>
        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(markdownText) }} />
      </div>
    );
  };
  
  export default Preview;
