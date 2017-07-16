import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import reducers from './reducers';

const configureStore = ({initialState = {}, history}) => {
    const middleware = [
        routerMiddleware(history),
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
