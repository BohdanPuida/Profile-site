var redux = require('redux');



//export const sagaMiddleware = createSagaMiddleware();

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({

  });

  var store = redux.createStore(reducer, initialState,
   redux.compose (
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));




  return store;
};
