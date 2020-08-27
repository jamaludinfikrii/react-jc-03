import React, { Component } from 'react'
import Axios from 'axios'


const apiUrl = 'http://localhost:2000/users'
class UserData extends Component {
    state = {
        data : null,
        showForm : false,
        selectedId : null
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
            if(this.state.selectedId === val.id){
                return(
                    <tr key={val.id}>
                        <td>{val.id}</td>
                        <td><input type="text" className='form-control' ref='usernameEdit' defaultValue={val.username}/></td>
                        <td><input type="text" className='form-control' ref='emailEdit' defaultValue={val.email}/></td>
                        <td><input type='button' value='cancel' onClick={() => this.setState({selectedId : null})} className='btn btn-danger'/></td>
                        <td><input type='button' value='save' onClick={this.onSaveBtnClick} className='btn btn-success'/></td>
                    </tr>
                )
            }
            return(
                <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                    <td><input type='button' value='delete' className='btn btn-danger'/></td>
                    <td><input type='button' value='edit' onClick={() => this.setState({selectedId : val.id})} className='btn btn-info'/></td>
                </tr>
                
               
            )
        })
    }

    onSubmitClick = () => {
        // pertama ambil semua value dari inputs
        var username = this.refs.username.value
        var email = this.refs.email.value
        var passwordInput = this.refs.password.value

        // cek ada yang kosong atau enggak
        if(username && email && passwordInput){
            // kirim ke api
            Axios.post(apiUrl, {username,email,password : passwordInput})
            .then((res) => {
                console.log(res)
                if(res.status === 201){
                    alert('Add Data Success')
                    this.refs.username.value = ''
                    this.refs.email.value = ''
                    this.refs.password.value = ''
                    this.getData()
                }
            })
            .catch((err) => {
                console.log(err)
            })
            
        }else{
            alert('Form Harus diisi Semuanya')
        }

        
    }

    

    onSaveBtnClick = () => {
        // get value from inputs
        var usernameEdit = this.refs.usernameEdit.value
        var emailEdit = this.refs.emailEdit.value

        // check empty value
        if(usernameEdit && emailEdit){
            Axios.patch(apiUrl + '/' +  this.state.selectedId , {username : usernameEdit , email : emailEdit})
            .then((res) => {
                console.log(res)
                if(res.status === 200){
                    alert('Edit Data Success')
                    this.setState({selectedId : null})
                    this.getData()
                }
            })
            .catch((err) => {
                console.log(err)
            })
            // send to api
        }else{
            alert('Form Gak boleh kosong')
        }
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
                                        <input type="text" placeholder='Enter Username' ref='username' className='form-control'/>
                                        <input type="text" placeholder='Enter Email' ref='email' className='form-control my-3'/>
                                        <input type="password" placeholder='Enter Your Password' ref='password' className='form-control'/>
                                        <input type="button" value="Submit" onClick={this.onSubmitClick} className='btn btn-info mt-4'/>
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
