const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "customer_info"`)
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('customer info GET error: ', error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {

    const queryText = `INSERT INTO "customer_info"
                    ("person_id",
                    "first_name",
                    "last_name",
                    "phone_number_primary",
                    "phone number_secondary",
                    "address_number",
                    "unit_number",
                    "street",
                    "city",
                    "state",
                    "zip_code",
                    "email_address")
                    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);`;
    pool.query(queryText, [
        req.user.id,
        req.body.firstName,
        req.body.lastName,
        req.body.phoneNumberPrimary,
        req.body.phoneNumberSecondary,
        req.body.addressNumber,
        req.body.unitNumber,
        req.body.street,
        req.body.city,
        req.body.state,
        req.body.zipCode,
        req.body.email])
        .then(() => { res.sendStatus(201); })
        .catch((error) => {
            console.log('customer info post error: ', error);
            res.sendStatus(500);
        })
});

module.exports = router;