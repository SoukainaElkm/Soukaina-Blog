const { User } = require('../models')
const user = require('../models/user')
const { unsubscribe } = require('../routes')

module.exports = {

    async getAllUsers() {
        return await User.findAll()
    },
    // méthodes à implémenter
    getUsers(offset = 0, limit = 10) {
        return User.findAll({
            offset: offset,
            limit: limit
        })
    },
    getAdmins() {
        return this.getUsersByRole('admin')
    },
    getAuthors() {
        return this.getUsersByRole('author')
    },
    getGuests() {
        return this.getUsersByRole('guest')
    },
    getUser(id) {
        return User.findAll({
            where: {
                id: id
            }
        })

    },
    getUserByEmail(email) {
        return User.find(email)
    },
    async addUser(user) {
        await User.create(user).catch(err => err)
    },
    async updateUser(id, user) {
        await User.update(user, {
            where: {
                id: id
            }
        })
    },
    async deleteUser(id) {
        return await User.destroy({
            where: {
                id: id
            }
        })
    },

    // D'autres méthodes jugées utiles
    async getUsersByRole(role) {
        return await User.findAll({
            where: {
                role: role
            }
        })
    }
}