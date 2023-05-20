import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import setMarkdownText from '../action';

const Editor = () => {
  
  const markdownText = useSelector((state) => state.markdownText);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setMarkdownText(event.target.value));
  };  
  
  return (
      <div>
        <h3>Markdown Editor</h3>
        <textarea 
          value={markdownText} 
          onChange={handleChange} />
      </div>
    );
  };
  
export default Editor;