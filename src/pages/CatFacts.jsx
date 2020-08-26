import React, { Component } from 'react'
import Axios from 'axios'

const linkApi = 'https://cat-fact.herokuapp.com/facts'

class CatFacts extends Component {
    state = {
        data : null
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
    
    render() {
        if(this.state.data === null){
            return (
                <div>
                    <h1>Cat Facts</h1>
                    <input type='button' value='get data cats' onClick={this.onGetDataCat} />
                </div>
            )
        }
        console.log(this.state.data)
        return(
            <div>
                <h1>Facts Data</h1>
                {
                    this.state.data.map((val) => {
                        return(
                            <div style={{marginBottom:'10px'}}>
                                <div style={{fontWeight:'bold'}}>
                                    {val.text || 'null'}
                                </div>

                                <span style={{fontSize:'10px'}}> 
                                    " {val.user ? val.user.name.first + ' ' + val.user.name.last : 'unknown'} "
                                </span>
                                <button disabled>{val.upvotes + 'upvotes' || '0' + 'upvotes'}</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default CatFacts
