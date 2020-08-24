import React from 'react'


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
        if(this.state.nama === ''){
            return(
                <div>
                Latihan State 3

                    <p>Aplikasi Sapa</p>
                    <input type='text' ref='nama' placeholder='enter your name' /> 
                    <input type='button' value='click' onClick={this.onClickBtn} />

                    <p>{this.state.text}</p>
                    <input type='text' ref='text' placeholder='enter random text' onChange={this.onChangeRandomText} /> 

    
                    
                </div>
            )
        }
        return(
            <div>
                Latihan State 3

                <p>Hello {this.state.nama}</p>
                <input type='text' ref='nama' placeholder='enter your name' /> 
                <input type='button' value='click' onClick={this.onClickBtn} />

                <p>{this.state.text}</p>
                <input type='text' ref='text' placeholder='enter random text' onChange={this.onChangeRandomText} /> 

 
                
            </div>
        )
    }
}

export default LatihanState