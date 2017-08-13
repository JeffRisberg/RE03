import 'isomorphic-fetch';
import get from 'lodash.get';

const defaultOptions = {
    url: 'http://localhost:3000/log',
};

// eslint-disable-next-line no-unused-vars
const loggingMiddleware = options => store => next => action => {
    const log = get(action, 'payload.meta.log');
    options = { ...defaultOptions, ...options };
    if (log) {
        fetch(options.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ actionType: action.type, ...log }),
        });
    }
    return next(action);
};

export default loggingMiddleware;
