import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop className="background-video">
        <source src="/vecteezy_geometric-animated-background-light-color_7420874.mp4" type="video/mp4" />
      </video>
      <Form />
    </div>
  );
}

export default App;
