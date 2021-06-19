const { Article } = require('../models')
const article = require('../models/article')
const { unsubscribe } = require('../routes')

module.exports = {

    async getAllArticles() {
        return await Article.findAll()
    },

    getArticles(offset = 0, limit = 10) {
        return Article.findAll({
            offset: offset,
            limit: limit
        })
    },
    getArticle(id) {
        return Article.findAll({
            where: {
                id: id
            }
        })

    },
    getUserArticles(id) {
        return Article.findAll({
            where: {
                UserId: id
            }
        })

    },
    async addArticle(article) {
        await Article.create(article).catch(err => err)
    },
    async updateArticle(id, article) {
        await Article.update(article, {
            where: {
                id: id
            }
        })
    },
    async deleteArticle(id) {
        return await Article.destroy({
            where: {
                id: id
            }
        })
    },
}
