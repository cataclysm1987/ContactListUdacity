import React from 'react';
import logo from './logo.svg';

class ContactList extends React.Component {
  render(){
    const people = [
      {name: 'Tyler'},
      {name: 'Karen'},
      {name: 'Richard'}
    ]

    return <ol>
    {people.map((person) => (
      <li key={person.name}>{person.name}</li>
    ))}
    </ol>
  }
}

function App() {
  return (
    <div className="App">
      <ContactList />
    </div>
  );
}

export default App;
