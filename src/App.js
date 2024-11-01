import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Hero from './components/Hero';
import Media from './components/Media';
import DailyCommunion from './components/DailyCommunion';
import TimelineList from './components/Main';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Hero />
      <DailyCommunion />
      {/* <UpcomingEvents limit={10}/> */}
      {/* <Media limit={10}/> */}
    </div>
  );
}

export default App;
