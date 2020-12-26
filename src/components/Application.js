import React, { Component } from 'react';
import CreateList from './CreateList';
import ListsContainer from '../containers/ListsContainer';

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <div>{/* Users will go here! */}</div>
        <section>
          <CreateList />
          <ListsContainer />
        </section>
      </main>
    );
  }
}

export default Application;
