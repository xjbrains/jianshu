import React from 'react';
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'
import { GlobalStyle } from './style'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '@/pages/home'
import Detail from '@/pages/detail/loadable'
import Login from '@/pages/login'
import Write from '@/pages/write'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <HashRouter>
          <Header></Header>
          <Switch>
            <Redirect exact from="/" to="/home"></Redirect>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/detail/:id" >
              <Detail></Detail>
            </Route>
            <Route path="/login" >
              <Login></Login>
            </Route>
            <Route path="/write" >
              <Write></Write>
            </Route>
          </Switch>
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
