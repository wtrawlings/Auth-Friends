import React from 'react';
import LoginForm from './component/LoginForm';
import { Route, Switch } from 'react-router-dom';

//import NewFriendForm from './component/NewFriendForm';
//import PrivateRoute from './component/PrivateRoute';
import FriendList from './component/FriendList';

function App() {
  return (
    <div>
      <h1>FRIENDS DATA</h1>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/friendList" component={FriendList} />

      </Switch>
    </div>
  );
}

export default App;
