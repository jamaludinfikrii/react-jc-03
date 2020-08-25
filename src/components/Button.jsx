import React from 'react'
// react hooks

function Button (props){
    return(
        <input style={{backgroundColor:props.color,borderColor:props.borderColor}} type='button' 
        value={props.title}/>
    )
}

export default Button
