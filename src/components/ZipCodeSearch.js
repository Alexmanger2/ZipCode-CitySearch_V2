import React, {Fragment,useEffect,useState} from 'react';
import axios from 'axios';

function ZipCodeSearch() {
  
  const [input,setInput] = useState("");
  const [zipcode,setZipcode] = useState([]);
  const [display,setDisplay] = useState(true);

  
 const clickHandler = async (event) => {
    try {
        event.preventDefault();
        const response  = await axios.get(`http://ctp-zip-api.herokuapp.com/zip/${input}`)
        if(response.status !== 404){
            setZipcode(response.data)
            setDisplay(true)  
    }
    } catch (error) {
        setDisplay(false)
        console.error(error.message)
    }
}


  return <Fragment>

        <div>
                 <h3>ZipCode Search</h3> 
     <div>
            <input className="inputField" type="text" onChange={(e)=>{setInput(e.target.value)}}   />
            <button type="button" className="btn btn-outline-dark button" onClick={clickHandler}>Search</button>
    </div>
    </div>    

<br/><br/><br/><br/><br/>

        <div>
                      
                {display === true ? zipcode.map(e=> {
                    return(
                  
                        <div className='card' key={e.RecordNumber}>
                        <div className='card-header'>{e.LocationText}</div>
                            <ul className="ul">
                              <li>State: {e.State}</li>
                              <li>Location: ({e.Lat}, {e.Long})</li>
                              <li>Population (estimated): {e.EstimatedPopulation}</li>
                              <li>Total Wages: {e.TotalWages}</li>
                            </ul>
                      </div>
                     
                    ) 
                }):<h1>Results Not Found</h1>} 

        </div>


  </Fragment>;
}

export default ZipCodeSearch;
