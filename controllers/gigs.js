const express = require('express');
const router = express.Router();
const db = require('../models');

// Get gig list
router.get('/', (req, res) => 
	db.gigs.findAll()
	.then(gigs => {
		console.log(gigs)
		res.sendStatus(200);
	})
	.catch(err => console.log(err)));

// Add a gig
router.get('/add', (req, res) => {
	const data = {
		title: 'Looking for a React developer',
		technologies: 'react, javascript, html, css',
		budget: '$3000',
		description: 'Lorem Ipsum is simply dummyare like Aldus PageMaker including versions of Lorem Ipsum.',
		contact: 'user1@gmail.com'

	}
	let { title, technologies, budget, description, contact} = data

	// Insert into table
	db.gigs.create({
		title,
		technologies,
		budget,
		contact,
		description
	})
		.then(gig => res.redirect('/gigs'))
		.catch(err => console.log(err))
});

module.exports = router;