import React, { Component } from 'react'
import Axios from 'axios'


const apiUrl = 'http://localhost:2000/users'
class UserData extends Component {
    state = {
        data : null,
        showForm : true
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
                
                <div className="container">
                    <h1>My User Data</h1>   
                    <input type="button" className='btn btn-primary mb-5' onClick={() => this.setState({showForm : true})} value="add new data"/>

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
                    {
                        this.state.showForm ? 
                        <div className="row mt-5 justify-content-center fixed-bottom mb-5">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <input type="text" placeholder='Enter Username' className='form-control'/>
                                        <input type="text" placeholder='Enter Email' className='form-control my-3'/>
                                        <input type="password" placeholder='Enter Your Password' className='form-control'/>
                                        <input type="button" value="Submit" className='btn btn-info mt-4'/>
                                        <input type="button" onClick={ () => this.setState({showForm : false})} value="Close Form" className='btn btn-danger mt-4'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}

export default UserData
