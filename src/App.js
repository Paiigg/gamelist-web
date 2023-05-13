import './App.css';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import GameList from './components/GameList';
import Genres from './components/Genres';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import Testi from './components/Testi';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Genres/>
      <GameList/>
      <Popular/>
      <ComingSoon/>
      <Testi/>
      <Footer/>
    </div>
  );
}

export default App;
