var express = require('express');
const user = require('../models/user');
var router = express.Router();
const usersRepo = require('../repositories/users')
const articlesRepo = require('../repositories/articles')


/* GET users listing. */
router.get('/', function (req, res, next) {
  usersRepo.getAllUsers().then(function (result) {
    res.send(result)
  }).catch(err => console.log(err))
}).post('/', (req, res) => {
  const datareq = req.body;
  const data = {
    username: datareq.username,
    email: datareq.email,
    password: datareq.password,
    role: datareq.role,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  usersRepo.addUser(data)
    .catch(err => console.log(err))

  res.send('user added')
}).put('/', function (req, res) {
  const datareq = req.body;
  const data = {
    username: datareq.username,
    email: datareq.email,
    password: datareq.password,
    role: datareq.role,
    updatedAt: new Date()
  }

  usersRepo.updateUser(datareq.id, data)
    .catch(err => console.log(err))

  res.send('user updated')
})

router.route('/:id').get((req, res) => {
  usersRepo.getUser(req.params.id).then(function (result) {
    res.send(result)
  }).catch(err => console.log(err))
})

router.route('/:id').delete((req, res) => {
  usersRepo.deleteUser(req.body.id)
  res.send('Utilisateur supprimé')
})

router.get('/:id/admins', function (req, res, next) {
  usersRepo.getAdmins().then(function (result) {
    res.send(result)
  }).catch(err => console.log(err))
})

router.get('/:id/authors', function (req, res, next) {
  usersRepo.getAuthors().then(function (result) {
    res.send(result)
  }).catch(err => console.log(err))
})

router.get('/:id/guests', function (req, res, next) {
  usersRepo.getGuests().then(function (result) {
    res.send(result)
  }).catch(err => console.log(err))
})

router.route('/:id/articles').get((req, res) => {
  articlesRepo.getUserArticles(req.params.id).then(function (result) {
    res.send(result)
  }).catch(err => console.log(err))
})

module.exports = router;