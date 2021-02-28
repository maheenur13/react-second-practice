import React from 'react';
import "./Country.css";
const Country = (props) => {
    // console.log(props)
    const {name,population,flag,region,capital}=props.name;
    return (
        <div className="country-box">
           <div className="image-box">
               <img src={flag} alt=""/>
           </div>
           <div className="common-things">
                <h3 style={{backgroundColor:'rgba(116, 116, 116, 0.692)',padding:'10px'}}>Name</h3>
                <h6 style={{backgroundColor:'rgba(116, 116, 116, 0.692)',padding:'10px'}}> {name}</h6>
           </div>
           <div className="common-things">
                <h3 style={{backgroundColor:'rgba(116, 116, 116, 0.692)',padding:'10px'}}>population</h3>
                <h6 style={{backgroundColor:'rgba(116, 116, 116, 0.692)',padding:'10px'}}>{population}</h6>
           </div>
           <div className="common-things">
                <h3 style={{backgroundColor:'rgba(116, 116, 116, 0.692)',padding:'10px'}}>Capital</h3>
                <h6 style={{backgroundColor:'rgba(116, 116, 116, 0.692)',padding:'10px'}}>{capital}</h6>
           </div>
        </div>
    );
};

export default Country;