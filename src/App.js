import React from 'react';
import Button from './components/Button.jsx'
import Input from './components/Input.jsx';
import State2 from './State2'
import State3 from './State3'
import State4 from './State4'
import {BrowserRouter, Switch,Route,Link} from 'react-router-dom'



class App extends React.Component{
  state = {
    nama : 'kosong'
  }

  ubahNama = () => {
    this.setState({nama : "Fikri"})
  }

  render(){
    return(
      <BrowserRouter>
        <div>
          <h1>Welcome</h1>
          <div>
            <Link to='state-2'>state 2</Link>
            <Link to='state-3'>state 3</Link>
            <Link to='state-4'>state 4</Link>
          </div>
          <br/>
          <br/>
          <br/>

          <Switch>
            <Route path='/state-2'>
              <State2/>
            </Route>
            <Route path='/state-3'>
              <State3 />
            </Route>
            <Route path='/state-4' component={State4} />
          </Switch>


        </div>
      </BrowserRouter>
    )
  }
}

export default App