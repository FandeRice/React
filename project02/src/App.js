import logo from './logo.svg';
import './App.css';

function ShowTitle(VariableCualquiera) {
  return (
    <h1>
      {VariableCualquiera}
    </h1>
  );
}


function App() {
  const Title = "Fin";

  return (
    <div >
      {ShowTitle("Inside of my mind")}
      {ShowTitle(Title)}
    </div >
  );
}

export default App;
