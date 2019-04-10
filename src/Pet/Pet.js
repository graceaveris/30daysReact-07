import React from 'react';

const pet = ( props ) => {

  const outputstyle = {
  textAlign: 'center',
  fontSize: '20px',
  color: 'black'
  };

  const divstyle = {
  textAlign: 'center',
  fontSize: '20px',
  backgroundColor: 'white',
  minWidth: '100px',
  padding: '20px',
  margin: '10px',
  display: 'inline-block'
  };

 return (

<div
  style={divstyle}>
    <ul>
      
      <li style={outputstyle}>Animal: {props.animal}</li>
      <li style={outputstyle}>Name: {props.animalname}</li>
      <li style={outputstyle}>Owner: {props.owner}</li>
      <li style={outputstyle}>Illness: {props.illness}</li>
      <li style={outputstyle}>Date: {props.date}</li>
      
    </ul>
  </div>

  );
};

export default pet;






















