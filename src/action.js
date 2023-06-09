const setMarkdownText = (markdownText) => {
    return {
      type: 'SET_MARKDOWN_TEXT',
      payload: markdownText,
    };
  };

const togglePreviewVisibility = () => {
  return {
    type: 'TOGGLE_PREVIEW_VISIBILITY'
  };
};

const toggleEditorVisibility = () => {
  return {
    type: 'TOGGLE_EDITOR_VISIBILITY'
  }
}
  
export { setMarkdownText, togglePreviewVisibility, toggleEditorVisibility };