var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var store = require('configureStore').configure();
var App = require('App')
//import Sagas from 'sagas';
//import  { sagaMiddleware } from 'configureStore';


store.subscribe(() => {
  var state = store.getState();

});



// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')


ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component = {App}>
    </Route>
  </Router>,


  document.getElementById('app')
);
