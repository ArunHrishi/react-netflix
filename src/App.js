import './App.css';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="">
      <h1>Netflix</h1>
      <Row title={'Netflix Originals'} fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
