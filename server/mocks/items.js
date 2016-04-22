module.exports = function (app) {
    var express = require('express');
    var itemsRouter = express.Router();

    // Use the body-parser library in this service
    var bodyParser = require('body-parser');
    itemsRouter.use(bodyParser.json());

    var itemsDB = app.itemsDB;

    itemsRouter.get('/', function (req, res) {
        delete req.query["_"];
        itemsDB.find(req.query).exec(function (error, items) {
            res.send({
                'status': 'ok',
                'data': items
            })
        })
    });

    itemsRouter.post('/', function (req, res) {
        // Look for the most recently created record
        itemsDB.find({}).sort({id: -1}).limit(1).exec(function (err, items) {

            if (items.length != 0)
                req.body.item.id = items[0].id + 1;
            else
                req.body.item.id = 1;

            // Insert the new record
            itemsDB.insert(req.body.item, function (err, newItem) {
                res.status(201);
                res.send({'status': 'ok', 'data': [newItem]});
            })
        });
    });

    itemsRouter.get('/:id', function (req, res) {
        itemsDB.find({id: req.params.id}).exec(function (error, items) {
            if (items.length > 0)
                res.send({
                    'status': 'ok',
                    'data': items
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
        var item = req.body.item;

        itemsDB.update({id: req.params.id}, item, {}, function (err, count) {
            res.send({'status': 'ok', 'data': [item]});
        });
    });

    itemsRouter.delete('/:id', function (req, res) {
        res.status(204).end();
    });

    app.use('/api/items', itemsRouter);
};
