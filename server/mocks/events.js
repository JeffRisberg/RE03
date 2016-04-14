module.exports = function (app) {
    var express = require('express');
    var eventsRouter = express.Router();

    // Use the body-parser library in this service
    var bodyParser = require('body-parser');
    eventsRouter.use(bodyParser.json());

    var eventsDB = app.eventsDB;

    eventsRouter.get('/', function (req, res) {
        delete req.query["_"];
        eventsDB.find(req.query).exec(function (error, events) {
            res.send({
                'events': events
            })
        })
    });

    eventsRouter.post('/', function (req, res) {
        // Look for the most recently created record
        eventsDB.find({}).sort({id: -1}).limit(1).exec(function (err, events) {

            console.log(req.body.event);
            if (events.length != 0)
                req.body.event.id = events[0].id + 1;
            else
                req.body.event.id = 1;

            // Insert the new record
            eventsDB.insert(req.body.event, function (err, newEvent) {
                res.status(201);
                res.send(JSON.stringify({event: newEvent}));
            })
        });
    });

    eventsRouter.get('/:id', function (req, res) {
        eventsDB.find({id: req.params.id}).exec(function (error, events) {
            if (events.length > 0)
                res.send({
                    'data': events[0],
                });
            else {
                res.status(404);
                res.send({
                    'data': null
                });
            }
        });
    });

    // No changes from here on down
    eventsRouter.post('/', function (req, res) {
        res.status(201).end();
    });

    eventsRouter.put('/:id', function (req, res) {
        res.send({
            'events': {
                id: req.params.id
            }
        });
    });

    eventsRouter.delete('/:id', function (req, res) {
        res.status(204).end();
    });

    app.use('/api/events', eventsRouter);
};
