'use strict';

var faker = require('faker');

const roles = ['admin', 'author', 'guest']

module.exports = {
  up: async (queryInterface, Sequelize) => {

    for (var i = 0; i < 20; i++) {
      await queryInterface.bulkInsert('users', [{
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: roles[Math.floor(Math.random() * roles.length)],
        CreatedAt: new Date(),
        updatedAt: new Date()
      }]);
    }

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};