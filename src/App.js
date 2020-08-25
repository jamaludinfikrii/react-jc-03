import React from 'react';
import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
import State2 from './pages/State2.jsx'
import State3 from './pages/State3.jsx'
import State4 from './pages/State4.jsx'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import LatihanFetchData from './pages/LatihanFetchData';



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
            <Route path='/fetch-data'>
              <LatihanFetchData />
            </Route>
            <Route path='*' component={PageNotFound} />

          </Switch>



        </div>
      </BrowserRouter>
    )
  }
}

export default App