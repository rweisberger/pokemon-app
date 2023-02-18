import './App.css';
import SearchBar from './components/SearchBar';
import Card from './components/CardDisplay';

function App() {
  return (

    <div className="App">
      <SearchBar />
      <button type="button" className="btn btn-primary">Primary</button>
      <h1>Pokemon</h1>
      <Card />
    </div>
  );
}

export default App;
