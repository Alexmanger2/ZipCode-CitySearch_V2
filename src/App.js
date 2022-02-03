import {Fragment} from 'react'
import './App.css';
import ZipCodeSearch from './components/ZipCodeSearch';
import CitySearch from './components/CitySearch';

function App() {
  return (
    <Fragment>
                {/* <ZipCodeSearch/> */}
                <CitySearch/>
    </Fragment>
  );
}

export default App;
