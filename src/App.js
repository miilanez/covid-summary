import React,{useState, useEffect} from "react";
import './App.css';
import Header from './components/Header';
import Global from './components/Global';
import Cardlist from './components/Cardlist';
import Footer from './components/Footer';

function App() {
  const [globalData, setGlobalData] = useState({})
  const [countriesData, setCountriesData] = useState([])

  const getCovidData = async () => {
      try {
          const res = await fetch('https://api.covid19api.com/summary');
          const actualData = await res.json();
          console.log(actualData);
          setGlobalData(actualData.Global);
          setCountriesData(actualData.Countries);

          console.log(actualData.Global);
          console.log("==>", globalData);
          
      } catch (err) {
          console.log(err);
      }
  }

  useEffect(() => {
      getCovidData()
  }, []);

  return (
    <div className="App">
      <Header />
      <Global dados={globalData}/>
      <Cardlist dados={countriesData}/>
      <Footer />
    </div>
  );
}

export default App;
