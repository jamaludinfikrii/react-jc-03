import React from 'react'


class State4 extends React.Component{
    state = {
        countWord : 0
    }

    onChangeHandler = (event) => {
        var inputValue = event.target.value
        // var count = 0
        // for(var i = 0 ; i< inputValue.length ; i ++){
        //     if(inputValue[i] === ' '){
        //         count ++
        //     }
        // }

        // console.log(count)

        var arrayInputValue = inputValue.split(' ')

        var newArrayInput = []
        for(var i = 0 ; i < arrayInputValue.length ; i ++){
            if(arrayInputValue[i] !== '') newArrayInput.push(arrayInputValue[i])
        }

        this.setState({countWord : newArrayInput.length})


    }

    render(){
        // destructor
        var {countWord} = this.state

       

        return(
            <div>
                <h1>State 4</h1>

                <input onChange={this.onChangeHandler} placeholder='enter your words' />
                
                <p>Count Word : {countWord}</p>
            </div>
        )
    }
}


export default State4;