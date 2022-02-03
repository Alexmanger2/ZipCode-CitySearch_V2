import React, {Fragment,useEffect,useState} from 'react';
import axios from 'axios';

function CitySearch() {
  
  const [city,setCity] = useState("");
  const [cityData,setCityData] = useState([]);
  const [display,setDisplay] = useState(true);


const getCity = async () => {
        try {
            const response = await axios.get(`http://ctp-zip-api.herokuapp.com/city/${city}`)
            if(response.status !== 404)
            {
            setCityData(response.data)
            setDisplay(true)
            }
        } catch (error) {
            setDisplay(false)
            console.error(error.message)
        }


}

  
  return <Fragment>

<div>
    <h3>City Search</h3>
    <input className="inputField" type="text" onChange={e => setCity(e.target.value.toUpperCase())}/>
    <button type="button" className="btn btn-outline-dark button" onClick={getCity}>Search City</button>
</div>
<br/><br/><br/>
<div>
    {display === true ? cityData.map(data => {
        return(
        
            <ul className="ul-city" key={data}>
                <li >ZipCode: {data}</li>
            </ul>
        
        )
    }): <h2>No Results Found</h2>}        
</div>


  </Fragment>;
}

export default CitySearch;
