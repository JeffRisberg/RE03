import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { loggingMiddleware } from 'logger';

const configureStore = ({ initialState = {}, history }) => {

  const reducer = combineReducers({
    routing: routerReducer,
    app: reducers,
    form: formReducer,
  });

  const logger = createLogger();

  const middlewares = [
    routerMiddleware(history),
    loggingMiddleware(),
    thunk,
    logger
  ];

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  return store;
};

export default configureStore;
