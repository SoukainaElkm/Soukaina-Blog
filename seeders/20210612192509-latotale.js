'use strict';

var faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (var a = 0; a < 20; a++) {
      await queryInterface.bulkInsert('users', [{
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: faker.helpers.randomize(['admin', 'guest', 'author']),
        CreatedAt: faker.date.between('2000-01-01', '2021-06-07'),
        updatedAt: new Date()
      }]);
    }

    for (var b = 0; b < 10; b++) {
      await queryInterface.bulkInsert('tags', [{
        name: faker.lorem.words(3),
        CreatedAt: new Date(),
        updatedAt: new Date()
      }]);
    }

    for (var c = 1; c <= 20; c++) {
      for (var j = 0; j < 2; j++) {
        await queryInterface.bulkInsert('articles', [{
          title: faker.name.firstName(),
          content: faker.lorem.text(),
          published: faker.datatype.boolean(),
          CreatedAt: new Date(),
          updatedAt: new Date(),
          UserId: c
        }]);
      }
    }


    for (let f = 1; f <= 40; f++) {
      let nbrComments = Math.floor(Math.random() * 10);
      for (var i = 0; i < nbrComments; i++) {
        await queryInterface.bulkInsert('comments', [{
          content: faker.lorem.text(),
          CreatedAt: new Date(),
          updatedAt: new Date(),
          ArticleId: f
        }]);
      }
    }

    for (var d = 1; d <= 40; d++) {
      for (var e = 0; e < 2; e++) {
        await queryInterface.bulkInsert('articletags', [{
          CreatedAt: new Date(),
          updatedAt: new Date(),
          ArticleId: d,
          TagId: faker.helpers.randomize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        }]);
      }
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
