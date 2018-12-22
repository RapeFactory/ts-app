import React, { Component, FormEvent, KeyboardEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import View from './components/View';

interface IState {
  username: string;
  avatar_url: string;
  html_url: string;
}
class App extends Component<any, IState> {
  state = {
    username: '',
    avatar_url: '',
    html_url: '',
  };

  async getUser(username: string) {
    const URL = `https://api.github.com/users/${username}`;
    await fetch(URL)
      .then(data => data.json())
      .then(({ avatar_url, html_url }) => this.setState({ avatar_url, html_url }))
      .catch(console.error);
  }

  onKey = (e: KeyboardEvent<HTMLInputElement>): void => {
    const { username } = this.state;
    if (e.key === 'Enter' && username) {
      this.getUser(username);
    }
  };

  onInput = (e: FormEvent<HTMLInputElement>): void => {
    if (e !== null) {
      this.setState({ username: e.currentTarget.value });
    }
  };

  render() {
    const { username, avatar_url, html_url } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={avatar_url || logo} className="App-logo" alt="logo" />
          <input type="text" placeholder="КЛИККЛАК" onInput={this.onInput} onKeyDown={this.onKey} />
          <a className="App-link" href={html_url || 'https://reactjs.org'} target="_blank" rel="noopener noreferrer">
            {html_url !== '' ? username : 'Learn React'}
          </a>
          <Counter>{props => <View {...props} />}</Counter>
        </header>
      </div>
    );
  }
}

export default App;
