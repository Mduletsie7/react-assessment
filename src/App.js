import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Hero from './components/Hero';
import DailyCommunion from './components/DailyCommunion';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Hero />
      <DailyCommunion />
      <About />
      <Footer />
    </div>
  );
}

export default App;
