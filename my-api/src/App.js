import './App.css';
import FetchApiData from './component/FetchApiData';
import PostAPI from './component/PostAPI';

function App() {
  return (
    <div className="App">
      <h1 className='my-5'>Fetch API</h1>
      <FetchApiData />

      {/* post API */}
      {/* <PostAPI /> */}
    </div>
  );
}

export default App;
