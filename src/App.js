import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import ValidatioComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

/* Eu realmente nao preciso de alterar o state! */
class App extends Component {
  state = {
    userName: "Tiago",
    text: '',
    sizeOfText: 0,
  }

  /* This changes the Event but you will have issues with immutability of state */
  nameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  /* This event handler will update the text as well as calculating the number of letters */
  textsize = (event) => {
    const inputText = event.target.value;
    const lenght = inputText.length
    this.setState({
      ...this.state,
      text: inputText,
      sizeOfText: lenght,
    })
  }

  deleteHandler = (index) => {
    
  }

  render() {

    const { userName, text, sizeOfText } = this.state;
    const style = {
      boxShadow: '0 2px 3px #ccc',
      padding: '8px',
      backgroundColor: '#eee'
    }

    let charOfText = null;
    if (text) {
      const newText = text.split('');
      charOfText = (
        <div>
          {newText.map((char, index) => {
            return <CharComponent
              key={index}
              char={char}
              del={(event) => this.deleteHandler(event, index)} />
          })}
        </div>
      )
      console.log(newText);

    }


    return (
      <div className="App">
        <h1 style={style}>This is my first task from this UDEMY course</h1>
        <UserInput
          userName={userName}
          changeName={this.nameChangeHandler} />
        <UserOutput userName={userName} />
        <br></br>
        <hr />
        <h1 style={style}>This is my second task from this UDEMY course</h1>
        <input
          type="text"
          onChange={this.textsize}
          value={this.text}
        />
        <p>The above text as {sizeOfText} letters!!! </p>
        <ValidatioComponent sizeOfText={sizeOfText} />
        <br></br>
        {charOfText}
      </div>
    );
  }
}

export default App;
