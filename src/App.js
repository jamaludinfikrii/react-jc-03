import React from 'react';
import Button from './buttonComponent'

var nama = 'fikri'

function App (){
  return(
    <div>
      <h1>Hello {nama.repeat(5)}</h1>
      <p> lorem ipsum dolor sit amet </p>
      <Button />
    </div>
  )
}

export default App