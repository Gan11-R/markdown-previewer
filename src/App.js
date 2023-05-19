import './App.css';
import store from './store';
import setMarkdownText from './action';
import Editor from './component/editor';
import Preview from './component/preview';

const App = () => {
  const handleChange = (event) => {
    store.dispatch(setMarkdownText(event.target.value));
  };

  return (
    <div className="container">
      <Editor markdownText={store.getState().markdownText} handleChange={handleChange} />
      <Preview markdownText={store.getState().markdownText} />
    </div>
  );
};

export default App;
