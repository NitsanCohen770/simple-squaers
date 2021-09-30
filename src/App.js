import logo from './logo.svg';
import './App.css';
import Squares from './components/Squares';

function App() {
  const letters = [
    ['A', 'B'],
    ['C', 'D'],
  ];
  return (
    <>
      <Squares letters={letters[0]} /> <Squares letters={letters[1]} />
    </>
  );
}

export default App;
