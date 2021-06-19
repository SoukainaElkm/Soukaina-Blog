var express = require('express');
const tag = require('../models/tag');
var router = express.Router();
const tagsRepo = require('../repositories/tags')

/* GET tags listing. */
router.get('/', function (req, res, next) {
    tagsRepo.getAllTags().then(function (result) {
        res.send(result)
    }).catch(err => console.log(err))
}).post('/', (req, res) => {
    const datareq = req.body;
    const data = {
        name: datareq.name,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    tagsRepo.addTag(data)
        .catch(err => console.log(err))

    res.send('tag added')
}).put('/', function (req, res) {
    const datareq = req.body;
    const data = {
        name: datareq.name,
        updatedAt: new Date()
    }

    tagsRepo.updateTag(datareq.id, data)
        .catch(err => console.log(err))

    res.send('tag updated')
})

router.route('/:id').get((req, res) => {
    tagsRepo.getTag(req.params.id).then(function (result) {
        res.send(result)
    }).catch(err => console.log(err))
})
router.route('/:id').delete((req, res) => {
    tagsRepo.deleteTag(req.body.id)
    res.send('tag supprimé')
})

module.exports = router;