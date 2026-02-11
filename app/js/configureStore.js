import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducer as formReducer } from 'redux-form';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import reducers from './reducers';
import { loggingMiddleware } from 'logger';

const configureStore = ({ initialState = {} }) => {

  const reducer = combineReducers({
    app: reducers,
    form: formReducer,
  });

  const logger = createLogger();

  const middlewares = [
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
