const express = require('express');

const eventsRouter = express.Router();

const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  eventsRouter.use(bodyParser.json());

  const eventsDB = app.eventsDB;

  eventsRouter.get('/', function (req, res) {
    delete req.query["_"];
    eventsDB.find(req.query).exec(function (error, events) {
      setTimeout(
        () => res.send({
          'status': 'ok',
          'data': events
        }),
        2000);
    })
  });

  eventsRouter.post('/', function (req, res) {
    // Look for the most recently created record
    eventsDB.find({}).sort({ id: -1 }).limit(1).exec(function (err, events) {

      if (events.length != 0)
        req.body.event.id = events[0].id + 1;
      else
        req.body.event.id = 1;

      // Insert the new record
      eventsDB.insert(req.body.event, function (err, newEvent) {
        res.status(201);
        res.send({ 'status': 'ok', 'data': [newEvent] });
      })
    });
  });

  eventsRouter.get('/:id', function (req, res) {
    eventsDB.find({ id: req.params.id }).exec(function (error, events) {
      if (events.length > 0)
        res.send({
          'status': 'ok',
          'data': events[0]
        });
      else {
        res.status(404);
        res.send({
          'status': 'missing',
          'data': null
        });
      }
    });
  });

  eventsRouter.put('/:id', function (req, res) {
    const event = req.body.event;

    eventsDB.update({ id: req.params.id }, event, {}, function () {
      res.send({ 'status': 'ok', 'data': [event] });
    });
  });

  eventsRouter.delete('/:id', function (req, res) {
    eventsDB.remove({ id: req.params.id }, {}, function () {
      res.status(204).end();
    });
  });

  app.use('/api/events', eventsRouter);
};
