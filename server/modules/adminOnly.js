const pool = require('./pool');

const adminOnly = (req, res, next) => {
    pool.query(`SELECT "is_admin" FROM "person" WHERE "id"=$1;`, [req.user.id])
    .then(results => {
        if(results.rows[0] && results.rows[0].is_admin){
            next()
        }
        else {
            res.sendStatus(403);
        }
    })
    .catch(err => {
        console.log('Error checking admin status', err);
    })

};
  
module.exports =  adminOnly ;