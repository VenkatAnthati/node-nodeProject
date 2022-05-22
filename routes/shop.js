const express = require('express');
const router = express.Router();


router.get("/", (req, res, next) => {
    console.log('In another middleware!');
    res.send('Hello from Express!');
});

module.exports = router;