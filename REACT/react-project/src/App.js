import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List drink="Coffee"/>
        <List drink="Tee"/>
        <List drink="Bear"/>
        
      </header>
    </div>
  );
}


export default App;
