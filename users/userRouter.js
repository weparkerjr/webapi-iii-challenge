const express = require('express');
const Users = require('../users/userDb.js');

const router = express.Router();


// router.post('/', validateUser, (req, res) => {
//     const userName = req.body;
//     console.log(userName)

//     Users.insert(userName)
//     .then(name => {
//             res.status(201).json(name)
//     })
//     .catch (err => { 
//             res.status(500).json({ errorMessage: 'There was an error while adding the new user!' });
//     });
// });

// router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
//     const id = req.user.id;
//     const text = req.body.text;
//     console.log(text, id);

//     Users.insert({text, user_id:id})
//     .then(newPost => {
//         res.status(201).json(newPost)
//     })
//     .catch (err => {
//         res.status(500).json({ errorMessage: 'There was an error while saving the post to the database.' });
//     });
// });

router.get('/', (req, res) => {
    Users.get()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({ error: 'The users information could not be retrieved.' });
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

	Users.getById(id)
		.then(user => {
			res.status(200).json(user);
		})
		.catch(err => {
			res.status(500).json({ error: 'The users information could not be retrieved.' });
		});

});

// router.get('/:id/posts', (req, res) => {
//     const userId = req.params.id;

// 	Users.getUserPosts(userId)
// 		.then(data => {
// 			res.status(200).json(data);
// 		})
// 		.catch(err => {
// 			res.status(500).json({ error: 'The users posts could not be retrieved.' });
// 		});

// });

// router.delete('/:id', (req, res) => {
//     const id = req.params.id;
// 	Users.remove(id)
// 		.then(data => {
// 			res.status(200).json({ message: 'You have successfully deleted this user.' });
// 		})
// 		.catch(err => {
// 			res.status(500).json({ error: 'This user could not be deleted' });
// 		});

// });

// router.put('/:id', (req, res) => {
//     const { id } = req.params;
// 	const changes = req.body;

// 	Users.update(id, changes)
// 		.then(data => {
// 			res.status(200).json(changes);
// 		})
// 		.catch(err => {
// 			res.status(500).json({ error: 'The post information could not be modified.' });
// 		});

// });

//custom middleware

// function validateUserId(req, res, next) {
//     if (req.users.id) {
// 		const id = req.users;
// 	} else {
// 		res.status(400).json({ message: 'invalid user id' });
// 	}
// };


// function validateUser(req, res, next) {
//     if (req.body) {
// 	} else if (!req.body) {
// 		res.status(400).json({ message: 'missing user data' });
// 	} else if (!req.body.name) {
// 		res.status({ message: 'missing name field' });
// 	}
// };


// function validatePost(req, res, next) {
//     if (req.body) {
// 	} else if (!req.body) {
// 		res.status(400).json({ message: 'missing post data' });
// 	} else if (!req.body.text) {
// 		res.status(400).json({ message: 'missing required text field' });
// 	}
// };


module.exports = router;
