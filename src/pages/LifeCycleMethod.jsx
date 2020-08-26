import React, { Component } from 'react'

class LifeCycleMethod extends Component {

    componentDidMount(){
        alert('CompDidMount')
    }

    // mounting => comdidmount // get data dari api
    // updating => compdidupdate // kalau ada perubahan state
    // unmounting => componentWillUnmount // ketika komponent gak muncul di layar / mati / destroy

    
    render() {
        alert('render')
        return (
            <div>
                <h1>Lifecycle Method</h1>
                <p>Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
                The three phases are: Mounting, Updating, and Unmounting.</p>
            </div>
        )
    }

   
}

export default LifeCycleMethod
