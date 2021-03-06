import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
    })
    let assignedClasses = []; //red bold
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>These are people</p>
        <button className={btnClass}
          onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);