import React, {Fragment,useEffect,useState} from 'react';
import axios from 'axios';

function CitySearch() {
  
  const [input, setInput] = useState("");
  const [city,setCity] = useState("");
  const [cityData,setCityData] = useState([]);
  const [display,setDisplay] = useState(false);

  
  const handleClick = () => {
    setCity(input.toUpperCase());
    console.log(city)
    getCity();
  }

const getCity = async () => {

        try {
            const response = await axios.get(`http://ctp-zip-api.herokuapp.com/city/${city}`)
            if(response.status !== 404){
            setCityData(response.data)}
        } catch (error) {
            console.error(error.message)
        }


}

  
  
  return <Fragment>
<div>
    <input type="text" onChange={e => setInput(e.target.value)}/>
    <button onClick={handleClick}>Search City</button>
</div>

<div>

    {cityData.map(data => {
        return(
            <ul>
                <li>ZipCode: {data}</li>
            </ul>
        )
    })}        


</div>




  </Fragment>;
}

export default CitySearch;
