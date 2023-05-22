import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMarkdownText, togglePreviewVisibility } from '../action';

//import './editor.css'

const Editor = () => {
  
  const markdownText = useSelector((state) => state.markdownText);
  const dispatch = useDispatch();
  const [iconOpacity, setIconOpacity] = useState(1);
  const [containerHeight, setcontainerHeight] = useState('200px');

  const handleChange = (event) => {
    dispatch(setMarkdownText(event.target.value));
  };  
  
  const containerStyle = {
    margin: '20px auto 0 auto',
    height: containerHeight,
    width: '50%'
    }

  const headEditorStyle = {
    backgroundColor: '#009FBD',
    color: 'white',
    padding: '5px',
    display: 'flex',
    justifyContent: 'space-between'
  }

  const editorStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#F9E2AF'
  }

  const h3Style = {
    marginBottom: '0'
  }

  const iconStyle = {
    display: 'flex',
    alignItems: 'center',
    transition: 'opacity 0.1s ease',
    opacity: iconOpacity
  }

  const handleIconMouseEnter = () => {
    setIconOpacity(0.5)
  }

  const handleIconMouseLeave = () => {
    setIconOpacity(1)
  }

  const handleIconClick = () => {
    if (containerHeight === '200px') {
      setcontainerHeight('100vh'); 
    }
    else {
      setcontainerHeight('200px');
    }

    dispatch(togglePreviewVisibility());
  }

  return (
      <div 
        id="container" 
        style={containerStyle}>
        <div 
          id="head-editor"
          style={headEditorStyle}>
          <h3 style={h3Style}>Editor</h3>
          <i 
            class={containerHeight === '200px' ? 'fa fa-arrows-alt' : 'fa fa-compress'}
            style={iconStyle}
            onMouseEnter={handleIconMouseEnter}
            onMouseLeave={handleIconMouseLeave}
            onClick={handleIconClick}></i>
        </div>
        <textarea 
          id="editor"
          style={editorStyle}
          value={markdownText} 
          onChange={handleChange} />
      </div>
    );
  };
  
export default Editor;