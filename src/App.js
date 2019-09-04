import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import AppInfo from './components/AppList'
import store from './redux/store'
import AppList from './components/AppList';
import PostList from './components/PostList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <h1>Test</h1>
        <AppList/>
        <PostList/>
      </div>
    </Provider>

  );
}

export default App;
