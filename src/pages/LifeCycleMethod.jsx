import React, { Component } from 'react'

class LifeCycleMethod extends Component {
    state = {
        name : ''
    }
    // jalan setelah render pertama
    componentDidMount(){
        console.log('did mount jalan')
    }

    componentDidUpdate(){
        console.log('did update jalan')
    }

    componentWillUnmount(){
        console.log('will unmount jalan')
    }

    onH1Click = () => {
        this.setState({name : 'isi'})
    }



    // mounting => comdidmount // get data dari api
    // updating => compdidupdate // kalau ada perubahan state
    // unmounting => componentWillUnmount // ketika komponent gak muncul di layar / mati / destroy

    
    render() {
        console.log('render jalan')
        return (
            <div>
                <h1 onClick={this.onH1Click}>Lifecycle Method</h1>
                <p>{this.state.name}</p>
                <p>Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
                The three phases are: Mounting, Updating, and Unmounting.</p>
            </div>
        )
    }

   
}

export default LifeCycleMethod
