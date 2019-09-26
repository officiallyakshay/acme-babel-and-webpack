import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouterDOM from 'react-router-dom';
import axios from 'axios';

const { HashRouter, Link, NavLink, Route, Switch } = ReactRouterDOM;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
      places: [],
      things: []
    };
  }
  async componentDidMount() {
    const urls = [
      '/api/people',
      '/api/places',
      '/api/things',
    ];
    const [people, places, things] = await Promise.all(
      urls.map(url => axios.get(url).then(response => response.data))
    );
    this.setState({ people, places, things });
  }
  render() {
    return (
      <div>
        <Route render={() => <Nav {...this.state} />} />
        <div className='container'>
          <h1>Acme Nouns</h1>
          <Route path='/people' render={() => <People {...this.state} />} />
          <Route path='/places' render={() => <Places {...this.state} />} />
          <Route path='/things' render={() => <Things {...this.state} />} />
        </div>
      </div>
    );
  }
}
export default App;
