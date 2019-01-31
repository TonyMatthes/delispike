const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const adminOnly = require('../modules/adminOnly');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// GET all orders
router.get('/', rejectUnauthenticated, adminOnly, (req, res) => {
    console.log('get all cards');
    pool.query(`
    SELECT * FROM "orders"`)
        .then((results) => {
            res.send(results.rows)
        }).catch((error) => {
            console.log('orders GET error: ', error);
            res.sendStatus(500);
        })
});
router.get('/:id', rejectUnauthenticated, adminOnly, (req, res) => {
    console.log('get card');
    pool.query(`
    SELECT * FROM "orders"
    WHERE "id" = $1`, [req.params.id])
        .then((results) => {
            res.send(results.rows[0])
        }).catch((error) => {
            console.log('Error GET /card', error);
            res.sendStatus(500);
        })
});


// POST for adding a new question to the card table in the database
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.user)
    pool.query(`INSERT INTO "orders"("customer_id", "order_items", "notes") VALUES($1, $2, $3)`,
        [req.user.id,
        req.body.orderItems,
        req.body.notes])
        .then((results) => {
            res.sendStatus(200)
        }).catch((error) => {
            console.log('Card POST error:', error);
            res.sendStatus(500);
        })
});


// DELETE question from card database
router.delete('/:id', rejectUnauthenticated, adminOnly, (req, res) => {
    pool.query(`DELETE FROM "orders"
                WHERE "id"=$1;`,
        [req.params.id])
        .then((results) => {
            res.sendStatus(200)
        }).catch((error) => {
            console.log('Card DELETE error:', error);
            res.sendStatus(500);
        })
});

// PUT to mark an order as complete
router.put('/', rejectUnauthenticated, adminOnly, (req, res) => {
    pool.query(`UPDATE card
    SET "time_fulfilled" = now()
    WHERE "id" = $1`,
        [req.body.id])
        .then((results) => {
            res.send(200)
        }).catch((error) => {
            console.log('Card PUT error: ', error);
            res.send(500);
        })
})

module.exports = router;