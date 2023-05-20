import defaultMarkdownText from "./default-mardown-text";

const initialState = {
    markdownText: defaultMarkdownText,
};
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MARKDOWN_TEXT':
            return { ...state, markdownText: action.payload };
        default:
            return state;
    }
};
  
export default reducer;