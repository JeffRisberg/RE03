/* eslint no-console: off */

const levels = {
    TRACE: 10,
    DEBUG: 20,
    INFO: 30,
    WARN: 40,
    ERROR: 50,
    FATAL: 60,
    OFF: 70,
};

let minLevel = levels.TRACE;

const consoleMethod = method => (...args) => {

    const level = levels[method.toUpperCase()];

    if (minLevel > level) {
        return;
    }

    const call = console[method] ? console[method] : console.log;

    const props = args
        .filter(arg => typeof arg === 'object')
        .reduce((prev, curr) => ({ ...prev, ...curr }), {});

    const message = args
        .filter(arg => typeof arg === 'string')
        .reduce((prev, curr) => `${prev ? prev + ', ' : ''}${curr}`, '');

    const noProps = Object.keys(props).length === 0;
    const noMessage = message.length === 0;

    if (noProps) {
        call(message);
    } else if (noMessage) {
        call(props);
    } else {
        call(message, props);
    }
}

const methods = {
    trace: consoleMethod('trace'),
    debug: consoleMethod('debug'),
    info: consoleMethod('info'),
    warn: consoleMethod('warn'),
    error: consoleMethod('error'),
    fatal: consoleMethod('error'),
};

const logger = {
    ...levels,
    ...methods,
    level: nextMinLevel => /^[1-7]0$/.test(nextMinLevel) ? minLevel = nextMinLevel : minLevel,
};

export const createLogger = options => Object.keys(methods)
    .map(method => ({ [method]: logger[method].bind(this, options) }))
    .reduce((logger, method) => ({ ...logger, ...method }), {});

export default logger;
