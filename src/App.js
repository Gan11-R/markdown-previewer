import './App.css';
import store from './store'; 
import Editor from './component/editor';
import Preview from './component/preview';

const App = () => {

  return (
    <div className="container">
      <Editor />
      <Preview markdownText={store.getState().markdownText} />
    </div>
  );
};

export default App;
