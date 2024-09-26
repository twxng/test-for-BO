import './App.css';
import Content from './Components/Content';
import Front from './Components/Front';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Profile />
      </div>
      <Header />
      <Front />
    </div>
  );
}

export default App;