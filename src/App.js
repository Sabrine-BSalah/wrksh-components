import './App.css';
import Navbar from './components/navbar'
import Users from './components/users'

function App() {

  return (
    <div className="App">
      {/* Navbar part */}
      <Navbar />
      {/* users part */}
      <Users />
    </div>
  );
}

export default App;
