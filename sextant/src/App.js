import './App.css';
import Address from './Components/Address';
import Banner from './Components/Banner';
import Connector from './Components/Connector';
import Exhibit from './Components/Exhibit';

function App() {
  return (
    <div className="App">
      <Banner bannerText ="Sextant"/>
      <Exhibit name="Public IPv4 Address">
        <Address url='https://api.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name="Public IPv6 Address">
        <Address url='https://api64.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name="Pylon Packet Latency">
        <Connector />
      </Exhibit>
    </div>
  );
}

export default App;
