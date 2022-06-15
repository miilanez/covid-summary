import './App.css';
import Header from './components/Header';
import Global from './components/Global';
import Cardlist from './components/Cardlist';
import Footer from './components/Footer';
import Covid from './components/Covid';

function App() {
  return (
    <div className="App">
      <Header />
      <Global />
      <Cardlist />
      <Footer />
      <Covid />
    </div>
  );
}

export default App;
