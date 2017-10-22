const express = require('express');

const itemsRouter = express.Router();

const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  itemsRouter.use(bodyParser.json());

  const itemsDB = app.itemsDB;

  itemsRouter.get('/', function (req, res) {
    delete req.query["_"];
    itemsDB.find(req.query).exec(function (error, items) {
      setTimeout(
        () => res.send({
          'status': 'ok',
          'data': items
        }),
        2000);
    })
  });

  itemsRouter.post('/', function (req, res) {
    // Look for the most recently created record
    itemsDB.find({}).sort({ id: -1 }).limit(1).exec(function (err, items) {

      if (items.length != 0)
        req.body.item.id = items[0].id + 1;
      else
        req.body.item.id = 1;

      // Insert the new record
      itemsDB.insert(req.body.item, function (err, newItem) {
        res.status(201);
        res.send({ 'status': 'ok', 'data': [newItem] });
      })
    });
  });

  itemsRouter.get('/:id', function (req, res) {
    itemsDB.find({ id: req.params.id }).exec(function (error, items) {
      if (items.length > 0)
        res.send({
          'status': 'ok',
          'data': items[0]
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

  itemsRouter.put('/:id', function (req, res) {
    const item = req.body.item;

    itemsDB.update({ id: req.params.id }, item, {}, function () {
      res.send({ 'status': 'ok', 'data': [item] });
    });
  });

  itemsRouter.delete('/:id', function (req, res) {
    itemsDB.remove({ id: req.params.id }, {}, function () {
      res.status(204).end();
    });
  });

  app.use('/api/items', itemsRouter);
};
