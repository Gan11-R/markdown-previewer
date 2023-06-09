import defaultMarkdownText from "./default-mardown-text";

const initialState = {
    markdownText: defaultMarkdownText,
    isPreviewVisible: true,
    isEditorVisible: true
};
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MARKDOWN_TEXT':
            return { ...state, markdownText: action.payload };
        case 'TOGGLE_PREVIEW_VISIBILITY':
            return { ...state, isPreviewVisible: !state.isPreviewVisible}
        case 'TOGGLE_EDITOR_VISIBILITY':
            return { ...state, isEditorVisible: !state.isEditorVisible}
        default:
            return state;
    }
};
  
export default reducer;