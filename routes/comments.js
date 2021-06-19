var express = require('express');
const comment = require('../models/comment');
var router = express.Router();
const commentsRepo = require('../repositories/comments')

/* GET comments listing. */
router.get('/', function (req, res, next) {
    commentsRepo.getAllComments().then(function (result) {
        res.send(result)
    }).catch(err => console.log(err))
}).post('/', (req, res) => {
    const datareq = req.body;
    const data = {
        content: datareq.content,
        createdAt: new Date(),
        updatedAt: new Date(),
        ArticleId: datareq.ArticleId
    }

    commentsRepo.addComment(data)
        .catch(err => console.log(err))

    res.send('comment added')
}).put('/', function (req, res) {
    const datareq = req.body;
    const data = {
        content: datareq.content,
        updatedAt: new Date(),
        ArticleId: datareq.ArticleId
    }

    commentsRepo.updateComment(datareq.id, data)
        .catch(err => console.log(err))

    res.send('comment updated')
})

router.route('/:id').get((req, res) => {
    commentsRepo.getComment(req.params.id).then(function (result) {
        res.send(result)
    }).catch(err => console.log(err))
})
router.route('/:id').delete((req, res) => {
    commentsRepo.deleteComment(req.body.id)
    res.send('comment supprimé')
})

module.exports = router;