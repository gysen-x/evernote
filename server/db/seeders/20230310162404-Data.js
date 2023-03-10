/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: '123',
        password: '$2b$10$jI0Rz1MloMqfqgcgipzqmepIYLegOsvm1SpNg19I04rBgoTM/mC/u',
        email: '123@123.ru',
        avatar: 'https://www.clipartmax.com/png/full/267-2671061_y%C3%BCkle-youssefdibeyoussefdibe-profile-picture-user-male.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('Notebooks', [
      {
        title: 'First notebook',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Second notebook',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Third notebook',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('Notes', [
      {
        title: 'Список покупок',
        text: '1.Хлеб 2.Колбаса',
        notebook_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Записи',
        text: 'Парам-пам-пам',
        notebook_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Пароль',
        text: 'qerty1',
        notebook_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Говно',
        text: 'Моча',
        notebook_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Блокнот',
        text: 'Заметка про собаку',
        notebook_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Хозмаг',
        text: 'Купить лампочку',
        notebook_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Заметки',
        text: 'Зачем играть в компьютерные игры если их можно создавать?',
        notebook_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Блокнот',
        text: 'Как избавиться от трупа?',
        notebook_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Хозмаг',
        text: 'Купить веревку и мыло',
        notebook_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('Labels', [
      {
        title: 'магазин',
        color: 'red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'дела',
        color: 'green',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'работа',
        color: 'yellow',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'учеба',
        color: 'blue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'спорт',
        color: 'orange',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('Note_Labels', [
      {
        label_id: 1,
        note_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label_id: 2,
        note_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label_id: 3,
        note_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label_id: 4,
        note_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label_id: 5,
        note_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label_id: 1,
        note_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label_id: 2,
        note_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
