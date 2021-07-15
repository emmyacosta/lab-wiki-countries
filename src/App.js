import './App.css';
import { Route } from 'react-router-dom'
import CountriesList from './components/CountriesList.jsx';
import CountryDetail from './components/CountryDetail';


function App() {


  return (
    <>
      WikiCountries

      <div className="container">
        <div className="row">
          <CountriesList />
          <Route path={'/countries/:code'} component={CountryDetail} />
        </div>
      </div>
  
    </>

  );
}
export default App;
