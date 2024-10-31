import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Hero from './components/Hero';
import TimelineList from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Hero />
      <TimelineList limit={10}/>
    </div>
  );
}

export default App;
