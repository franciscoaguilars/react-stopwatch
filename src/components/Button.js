import React from 'react';

export default function Button(props){
    return(
        <button onClick={props.onClick} type ="button" value={props.value}>{props.value}</button>
    )
}