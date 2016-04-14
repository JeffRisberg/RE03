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
                'items': items
            })
        })
    });

    itemsRouter.post('/', function (req, res) {
        // Look for the most recently created record
        itemsDB.find({}).sort({id: -1}).limit(1).exec(function (err, items) {

            console.log(req.body.item);
            if (items.length != 0)
                req.body.item.id = items[0].id + 1;
            else
                req.body.item.id = 1;

            // Insert the new record
            itemsDB.insert(req.body.item, function (err, newItem) {
                res.status(201);
                res.send(JSON.stringify({item: newItem}));
            })
        });
    });

    itemsRouter.get('/:id', function (req, res) {
        itemsDB.find({id: req.params.id}).exec(function (error, items) {
            if (items.length > 0)
                res.send({
                    'data': items[0],
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
    itemsRouter.post('/', function (req, res) {
        res.status(201).end();
    });

    itemsRouter.put('/:id', function (req, res) {
        res.send({
            'items': {
                id: req.params.id
            }
        });
    });

    itemsRouter.delete('/:id', function (req, res) {
        res.status(204).end();
    });

    app.use('/api/items', itemsRouter);
};
