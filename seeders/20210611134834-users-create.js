'use strict';

var faker = require('faker');

const roles = ['admin', 'author', 'guest']

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (var i = 0; i < 20; i++) {
      await queryInterface.bulkInsert('users', [{
        username: faker.name.username(),
        email: faker.internet.email(),
        password: faker.internet.password(8),
        role: faker.name.jobTitle(),
        createdAt: new Date(),
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
