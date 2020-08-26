import React, { Component } from 'react'
import Axios from 'axios'

const linkApi = 'https://cat-fact.herokuapp.com/facts'

class CatFacts extends Component {
    state = {
        data : null
    }

    componentDidMount(){
        this.onGetDataCat()
    }

    onGetDataCat = () => {
        Axios.get(linkApi)
        .then((res) => {
            this.setState({data : res.data.all})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    mapDataCat = () => {
        return this.state.data.map((val,index) => {
            return(
                <div key={index} style={{marginBottom:'10px'}}>
                    <div style={{fontWeight:'bold'}}>
                        {val.text || 'null'}
                    </div>

                    <span style={{fontSize:'10px'}}> 
                        " {val.user ? val.user.name.first + ' ' + val.user.name.last : 'unknown'} "
                    </span>
                    <button disabled>{val.upvotes ? val.upvotes + " upvotes"  : 'none'}</button>
                </div>
            )
        })
    }
    
    render() {
        if(this.state.data === null){
            return (
                <div>
                    <h1>Loading ....</h1>
                </div>
            )
        }
        console.log(this.state.data)
        return(
            <div>
                <h1>Facts Data</h1>
                {
                    this.mapDataCat()
                }
            </div>
        )
    }
}

export default CatFacts
