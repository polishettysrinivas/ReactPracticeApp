import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Srinivas Polishetty', age: 33 },
      { id: 2,  name: 'Swetha Rani', age: 29 },
      { id: 3,  name: 'Sreeyansh Polishetty', age: 5 }
    ],
    showPersons: false
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }

 deletePersonHandler = (personIndex) => {
   const persons = [...this.state.persons];
   persons.splice(personIndex, 1);
   this.setState({persons : persons})
 }
 nameChangeHandeler = (event, id) =>{
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id
  });
  const person = {...this.state.persons[personIndex]}
  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({persons: persons})
 }
  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '16px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person key={person.id}
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            changed={(event) => this.nameChangeHandeler(event, person.id)}  />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi! I am a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersons}>Toggle Persons
         </button>
        {persons}
      </div>
    );
  }
}

export default App;
