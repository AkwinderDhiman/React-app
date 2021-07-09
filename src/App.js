import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'mani', age: 22 },
      { name: 'akko', age: 26 },
    ],
    showPersons:false
  }

  personsStateHandler = (newName) => {
    //  console.log('was clicked!')
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: 'akko', age: 26 },
      ]
    })
  }


  changeHandler = (event) => {
    //  console.log('was clicked!')
    this.setState({
      persons: [
        { name: event.target.value, age: 22 },
        { name: 'akko', age: 26 },
      ]

    })
  }

 

  togglerPersonHandler=()=>{
  const showP = this.state.showPersons; 
  this.setState({showPersons : !showP });
  }
  render() {
    const buttonStyle = {
      backgroundColor:'green',
      border:'1px solid transparent',
      font:'inherit',
      color:'white',
      borderRadius:'9px',
      padding:'9px',
      margin:'14px auto'
    }
    let persons= null;
    if (this.state.showPersons){
      persons = (
      <div>
        {this.state.persons.map(per => {
          return <Person name={per.name} age={per.age}/>
        })}
   
     </div>
     );
   }
    return (
      <div className="App">
        <button style={buttonStyle} onClick={this.togglerPersonHandler}>Switch Name</button>
          { persons }
            </div>
    );
    // return React.createElement( "div", {className:"App"}, React.createElement("h1", null, "akwinder kaur"));
  }
}

export default App;
