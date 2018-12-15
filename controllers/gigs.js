const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', (req, res) => 
	db.gigs.findAll()
	.then(gigs => {
		console.log(gigs)
		res.sendStatus(200);
	})
	.catch(err => console.log(err)));

module.exports = router;