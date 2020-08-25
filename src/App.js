import React from 'react';
import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
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
         
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <h1>Welcome</h1>
            </Route>
  
            <Route path='/state-2'>
              <State2/>
            </Route>
            <Route path='/state-3'>
              <State3 />
            </Route>
            <Route path='/state-4' component={State4} />
            <Route path='*' component={PageNotFound} />

          </Switch>



        </div>
      </BrowserRouter>
    )
  }
}

export default App