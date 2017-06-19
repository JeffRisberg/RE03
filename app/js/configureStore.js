import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import reducers from './reducers';

const configureStore = (initialState = {}) => {
    const middleware = [
        routerMiddleware(browserHistory),
        thunk,
    ];

    const reducer = combineReducers({
        routing: routerReducer,
        app: reducers,
        form: formReducer,
    });

    const store = createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware)),
    );

    return store;
};

export default configureStore;
