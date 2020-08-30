import React from 'react';
import Radium from 'radium';
import styled from 'styled-components';

import classes from'./Persons.css';

const person = (props) => {
  

    return ( 
    // <div className="Persons" style={style}>
    <div className={classes.Persons}>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}



export default person;