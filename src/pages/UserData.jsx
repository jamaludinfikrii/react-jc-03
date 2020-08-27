import React, { Component } from 'react'
import Axios from 'axios'


const apiUrl = 'http://localhost:2000/users'
class UserData extends Component {
    state = {
        data : null
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        Axios.get(apiUrl)
        .then((res) => {
            this.setState({data : res.data})
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    mapData = () => {
        return this.state.data.map((val) => {
            return(
                <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                    <td><input type='button' value='delete' className='btn btn-danger'/></td>
                    <td><input type='button' value='edit' className='btn btn-info'/></td>
                </tr>
            )
        })
    }


    render() {
        if(this.state.data === null){
            return(
                <h1>Loading ...</h1>
            )
        }
        return (
            <div>
                <h1>My User Data</h1>
                <div className="container">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.mapData()
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UserData
