import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    
    // console.log(props.country)
    const {name,capital,flag} = props.country;
    const history = useHistory();
    const handleClick = (name)=>{
        history.push(`/country/${name}`);
    }
    return (
        <div className="col-md-6 col-lg-4 my-3 text-center">
            <div className="country">
                <img className="img-fluid" src={flag} alt=""/>
                <h4 className="my-3"><Link className="link" to = {`/country/${name}`}>Name : {name}</Link></h4>
                <h6 className ="my-3">Capital: {capital} </h6>
                <Link className ="my-5"><button  onClick ={() => handleClick(name)} className ="btn btn-primary btn-custom">Show Details</button></Link>
            </div>
        </div>
    );
};

export default Country;