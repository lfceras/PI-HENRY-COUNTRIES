import './App.css';
import { Route } from 'react-router-dom'
import LandingPage from './components/landingPage/LandingPage';
import Home from './components/home/Home';
import CountryDetail from './components/countryDetail/CountryDetail';
import CreateActivity from './components/createActivity/CreateActivity';



function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={LandingPage} />
      <Route exact path={'/home'} component={Home} />
      <Route exact path={'/create'} component={CreateActivity}/>
      <Route exact path={'/country/:id'} component={CountryDetail} />
    
    </div>
  );
}
export default App;
