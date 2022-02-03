import React, {Fragment,useState} from 'react';
import { Navigate, useNavigate } from "react-router-dom";

function DisplayChoice() {
    const navigate = useNavigate();
  
  const cityClick = () => {
    let path = `/city`; 
    navigate(path);
  }
  
  const zipClick = () => {
    let path = `/zip`; 
    navigate(path);
  }
  
  
  
  return <Fragment>

<h1 className="searchTag">How would you like to search?</h1>
<button type="button" className="btn btn-primary cityButton" onClick={cityClick}>By City</button>
<h4 className="orTag">OR</h4>
<button type="button" className="btn btn-success zipButton" onClick={zipClick}>By ZipCode</button>
  </Fragment>;
}

export default DisplayChoice;
