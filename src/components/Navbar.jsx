import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='state-2'>state 2</Link>
            <Link to='state-3'>state 3</Link>
            <Link to='state-4'>state 4</Link>
            <Link to='fetch-data'>Fetch Data</Link>
            <Link to='cat'>Cat Facts</Link>
            <Link to='lifecycle'>Lifecycle</Link>
            <Link to='user'>User Data</Link>
        </div>
    )
}

export default Navbar