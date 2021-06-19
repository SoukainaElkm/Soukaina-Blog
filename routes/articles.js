var express = require('express');
const article = require('../models/article');
var router = express.Router();
const articlesRepo = require('../repositories/articles')
const commentsRepo = require('../repositories/comments')

/* GET articles listing. */
router.get('/', function (req, res, next) {
    articlesRepo.getAllArticles().then(function (result) {
        res.send(result)
    }).catch(err => console.log(err))
}).post('/', (req, res) => {
    const datareq = req.body;
    const data = {
        title: datareq.title,
        content: datareq.content,
        published: datareq.published,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: datareq.UserId
    }

    articlesRepo.addArticle(data)
        .catch(err => console.log(err))

    res.send('article added')
}).put('/', function (req, res) {
    const datareq = req.body;
    const data = {
        title: datareq.title,
        content: datareq.content,
        published: datareq.published,
        updatedAt: new Date(),
        UserId: datareq.UserId
    }

    articlesRepo.updateArticle(datareq.id, data)
        .catch(err => console.log(err))

    res.send('article updated')
})

router.route('/:id').get((req, res) => {
    articlesRepo.getArticle(req.params.id).then(function (result) {
        res.send(result)
    }).catch(err => console.log(err))
})
router.route('/:id').delete((req, res) => {
    articlesRepo.deleteArticle(req.body.id)
    res.send('article supprimé')
})
router.route('/:id/comments').get((req, res) => {
    commentsRepo.getArticleComments(req.params.id).then(function (result) {
        res.send(result)
    }).catch(err => console.log(err))
})

module.exports = router;