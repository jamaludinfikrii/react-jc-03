import React from 'react'

class Header extends React.Component{
    render(){
        return(
        <h1 style={{fontFamily:'arial',fontWeight:'bolder',color : this.props.color}}>{this.props.children}</h1>
        )
    }
}

export default Header