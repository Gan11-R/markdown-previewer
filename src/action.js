const setMarkdownText = (markdownText) => {
    return {
      type: 'SET_MARKDOWN_TEXT',
      payload: markdownText,
    };
  };
  
export default setMarkdownText