import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './streams/streamList';
import StreamCreate from './streams/streamCreate';
import StreamEdit from './streams/streamEdit';
import StreamDelete from './streams/streamDelete';
import StreamShow from './streams/streamShow';
import Header from './header';
import history from '../history';

class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <Router history={history}>
          <div>
            <Header />
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' component={StreamCreate} />
            <Route path='/streams/edit/:id' component={StreamEdit} />
            <Route path='/streams/delete/:id' component={StreamDelete} />
            <Route path='/streams/show' component={StreamShow} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;