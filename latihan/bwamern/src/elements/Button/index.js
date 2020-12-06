import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'



export default function Button(props){
    return <div></div>;
    
}
Button.prototype = {
    type : propTypes.oneOf(["button","link"]),
    onclick : propTypes.func,
    target : propTypes.string,
    className : propTypes.string,
    isDisabled :propTypes.bool,
    isSmall : propTypes.bool,
    isLarge : propTypes.bool,
    isBlock : propTypes.bool,
    hasShadow : propTypes.bool,
}