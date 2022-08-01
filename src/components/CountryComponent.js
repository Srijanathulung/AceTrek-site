import React from 'react';
import {useParams} from 'react-router-dom';


const CountryComponent = () => {
  const {id}=useParams()
  return (
    <div className='container'>This is country component{id}</div>
  )
}

export default CountryComponent;