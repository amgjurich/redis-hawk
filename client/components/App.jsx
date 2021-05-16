import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FilterNav from './navbars/FilterNav.jsx';
import PageNav from './navbars/PageNav.jsx';
import DatabaseNav from './navbars/DatabaseNav.jsx';
import KeyspaceComponent from './keyspace/KeyspaceComponent.jsx';
import GraphComponent from './graphs/GraphComponent.jsx';
import EventComponent from './events/EventComponent.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello world!
        <FilterNav />
        <PageNav />
        <DatabaseNav />
        {/* create a react router to switch between the main area of divs */}
        <BrowserRouter>
          <Switch>
            <Route path='/main' render={() => <KeyspaceComponent />} />
            <Route path='/events' render={() => <EventComponent />} />
            <Route path='/graphs' render={() => <GraphComponent />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
