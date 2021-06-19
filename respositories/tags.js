const { Tag } = require('../models')
const tag = require('../models/tag')
const { unsubscribe } = require('../routes')

module.exports = {

    async getAllTags() {
        return await Tag.findAll()
    },
    // méthodes à implémenter
    getTags(offset = 0, limit = 10) {
        return Tag.findAll({
            offset: offset,
            limit: limit
        })
    },
    getTag(id) {
        return Tag.findAll({
            where: {
                id: id
            }
        })

    },
    async addTag(tag) {
        await Tag.create(tag).catch(err => err)
    },
    async updateTag(id, tag) {
        await Tag.update(tag, {
            where: {
                id: id
            }
        })
    },
    async deleteTag(id) {
        return await Tag.destroy({
            where: {
                id: id
            }
        })
    },
}