import React from 'react'
import Button from '../components/Button'
import Header from '../components/Header'



class LatihanState extends React.Component{
    state = {
        nama : "",
        text : ""
    }

    onClickBtn = () => {
        var inputValue = this.refs.nama.value
        // ambil value dari input

        this.setState({nama : inputValue})
        // value dari input masukan ke state nama
    }

    onChangeRandomText = () => {
        var inputValue = this.refs.text.value
        this.setState({text : inputValue})
    }
    
    render(){
        // if(this.state.nama === ''){
        //     return(
        //         <div>
        //         Latihan State 3

        //             <p>Aplikasi Sapa</p>
        //             <input type='text' ref='nama' placeholder='enter your name' /> 
        //             <input type='button' value='click' onClick={this.onClickBtn} />

        //             <p>{this.state.text}</p>
        //             <input type='text' ref='text' placeholder='enter random text' onChange={this.onChangeRandomText} /> 

    
                    
        //         </div>
        //     )
        // }
        return(
            <div>
                Latihan State 4

              { this.state.nama === '' ? <p>Aplikasi Sapa</p> : <p>Hello {this.state.nama}</p> }
                <input type='text' ref='nama' placeholder='enter your name' /> 
                <input type='button' value='click' onClick={this.onClickBtn} />

                <p>{this.state.text}</p>
                <input type='text' ref='text' placeholder='enter random text' onChange={this.onChangeRandomText} /> 

                <h3>Props</h3>
                <Button title='button 1 yeayy' color='yellow' borderColor='red'/>

                <p>Parent And Child</p>
                <Button title='button 2' color='red'/>

                <Header color='red'> Title Content</Header> 

                <Header color='lightblue'>Ini Isi</Header>          


            </div>
        )
    }
}

export default LatihanState


// button ==> State3
// child ==> parent