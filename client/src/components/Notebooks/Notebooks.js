import React from 'react';

import Note from '../Note/Note';

export default function Notebooks() {
  const notebooksArray = [
    { id: 1, title: 'Список покупок', text: 'хлеб, колбаса, сыр, кефир' },
    { id: 2, title: 'Мысли', text: 'Почему земля круглая?' },
    { id: 3, title: 'Задачи на сегодня', text: '1. Включить компьютер...' },
  ];

  return (
    <>
      <h2>NOTEBOOKS</h2>
      {notebooksArray.map((note) => (
        <Note
          key={note.id}
          note={note}
        />
      ))}
    </>
  );
}
