const { Comment } = require('../models')
const comment = require('../models/comment')
const { unsubscribe } = require('../routes')

module.exports = {

    async getAllComments() {
        return await Comment.findAll()
    },
    // méthodes à implémenter
    getComments(offset = 0, limit = 10) {
        return Comment.findAll({
            offset: offset,
            limit: limit
        })
    },
    getComment(id) {
        return Comment.findAll({
            where: {
                id: id
            }
        })

    },
    getArticleComments(id) {
        return Comment.findAll({
            where: {
                ArticleId: id
            }
        })
    },
    async addComment(comment) {
        await Comment.create(comment).catch(err => err)
    },
    async updateComment(id, comment) {
        await Comment.update(comment, {
            where: {
                id: id
            }
        })
    },
    async deleteComment(id) {
        return await Comment.destroy({
            where: {
                id: id
            }
        })
    },
}