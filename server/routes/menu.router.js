const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const adminOnly = require('../modules/adminOnly');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "dining_menu"
                ORDER BY "id"`)
        .then((results) => {
            res.send(results.rows)
        }).catch((error) => {
            console.log('Menu GET error: ', error);
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, adminOnly, (req, res) => {
    pool.query(`INSERT INTO "dining_menu"("item", "description", "category", "price") 
                VALUES($1, $2, $3, $4)`,
        [req.body.item, req.body.description, req.body.category, req.body.price])
        .then((results) => {
            res.sendStatus(200)
        }).catch((error) => {
            console.log('menu POST error:', error);
            res.sendStatus(500);
        })
});

router.put('/', rejectUnauthenticated, adminOnly, (req, res) => {
    console.log (req.params)
    pool.query(`UPDATE "dining_menu"
    SET "item"=$1, "description"=$2, "category"=$3, "price"=$4
    WHERE "id" = $5`,
        [req.body.item, req.body.description, req.body.category, req.body.price, req.body.id])
        .then((results) => {
            res.sendStatus(200)
        }).catch((error) => {
            console.log('Card PUT error: ', error);
            res.sendStatus(500);
        })
})

router.delete('/:id', rejectUnauthenticated, adminOnly, (req, res) => {
    pool.query(`DELETE FROM "dining_menu"
                WHERE "id"=$1;`,
        [req.params.id])
        .then((results) => {
            res.sendStatus(200)
        }).catch((error) => {
            console.log('menu DELETE error:', error);
            res.sendStatus(500);
        })
});

module.exports = router;