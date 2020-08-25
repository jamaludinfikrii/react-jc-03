import React from 'react'

class LatihanState extends React.Component {
    state = {
        count : 0
    }

    onTambahSatu = () => {
        var count = this.state.count
        count ++
        this.setState({count : count})
    }

    onKurangSatu = () => {
        this.setState({count : this.state.count -1})
    }

    render(){
        console.log('render')
        return(
            <div>
                <div>
                    Latihan State 2
                </div>
                <p>{this.state.count}</p>
                <input type='button' value='tambah 1' onClick={this.onTambahSatu}/>
                <input type='button' value='kurang 1' onClick={this.onKurangSatu}/>

            </div>
        )
    }
}

export default LatihanState;