import './App.css';
import Banner from './Components/Banner';
import Exhibit from './Components/Exhibit';

function App() {
  return (
    <div className="App">
      <Banner bannerText ="Sextant"/>
      <Exhibit name="child 1"/>
      <Exhibit name="child 2"/>
      <Exhibit name="child 3"/>
    </div>
  );
}

export default App;
