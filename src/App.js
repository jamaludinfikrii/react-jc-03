import React from 'react';
import Button from './components/Button.jsx'
import Input from './components/Input.jsx';


class App extends React.Component{
  state = {
    nama : 'kosong'
  }

  ubahNama = () => {
    this.setState({nama : "Fikri"})
  }

  render(){
    return(
      <div>
        <h1>Hello World</h1>
        <Input/>
        <Button />
        <hr/>


        <h1>States</h1>
        <p>{this.state.nama}</p>
        <input type='button' value='ubah nama' onClick={this.ubahNama} />

      </div>
    )
  }
}

export default App