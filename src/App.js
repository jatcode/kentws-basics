import React, { Component } from 'react';

import Base from './Base'
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div>

      <Base />
      <TodoList />

      </div>
    );
  }
}

export default App;
