import logo from './logo.svg';
import './App.css';

function App() {
  const a = [1, 2, 3];
  
  return (
    <div className="App">
      <div className="wrapper">
          <div className="card">
          {a.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
          </div>
      </div>  
    </div>
  );
}

export default App;
