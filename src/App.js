import React from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/searchbox/searchbox';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({
      monsters: users
    }));
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // console.log(filteredMonsters);
    return (
      <div className='App'>
        <h1>Monster School</h1>
        <SearchBox handleChange={e => this.setState({searchField: e.target.value})} placeholder='search monsters'/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
