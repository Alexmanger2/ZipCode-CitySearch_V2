import {Fragment} from 'react'
import './App.css';
import ZipCodeSearch from './components/ZipCodeSearch';
import CitySearch from './components/CitySearch';
import DisplayChoice from './components/DisplayChoice';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Fragment>
<BrowserRouter>
      <Routes>

        <Route exact path="/" element={<DisplayChoice/>}/>
        <Route exact path="/zip" element={<ZipCodeSearch/>}/>
        <Route exact path="/city" element={<CitySearch/> }/>
      
      </Routes>
  </BrowserRouter>
    </Fragment>
  );
}

export default App;
