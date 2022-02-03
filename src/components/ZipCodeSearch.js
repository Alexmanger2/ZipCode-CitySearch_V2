import React, {Fragment,useEffect,useState} from 'react';
import axios from 'axios';

function ZipCodeSearch() {
  
  const [input,setInput] = useState("");
  const [zipcode,setZipcode] = useState([]);
  const [display,setDisplay] = useState(false)
  const [toggle,setToggle] = useState(0);

 const clickHandler = async (event) => {
    try {
        event.preventDefault();
        const response  = await axios.get(`http://ctp-zip-api.herokuapp.com/zip/${input}`)
        // setZipcode(response.data)
        if(response.status !== 404){
            setZipcode(response.data)
            setDisplay(true)  
    }
    } catch (error) {
        setDisplay(false)
        console.error(error.message)
    }
}
if(toggle === 0 && zipcode.length > 0){  //prevent initial render so we don't see no results first
    setToggle(1);
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
                }): toggle > 0 ?<h1>Results Not Found</h1>:null} 

        </div>


  </Fragment>;
}

export default ZipCodeSearch;
