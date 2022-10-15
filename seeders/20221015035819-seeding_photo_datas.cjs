"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Photos",
      [
        {
          title: "Foto Pertama",
          caption: "Ini adalah foto pertama yang saya buat",
          image_url: "pertama.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Foto Kedua",
          caption: "Ini adalah foto kedua yang saya buat",
          image_url: "kedua.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Foto Ketiga",
          caption: "Ini adalah foto ketiga yang saya buat",
          image_url: "ketiga.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
