import { useState } from 'react';
import BookCard from './BookCard.jsx';

export default function BookList() {
  const [favoriteIds, setFavoriteIds] = useState(() => new Set());

  const handleToggleFavorite = (bookId) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      if (next.has(bookId)) {
        next.delete(bookId);
      } else {
        next.add(bookId);
      }
      return next;
    });
  };

  const books = [
    {
      id: 1,
      title: 'Гаррі Поттер і філософський камінь',
      author: 'J. K. Rowling',
      genre: 'Фентезі',
      year: 1997,
      rating: 4.9,
      cover: 'slate',
      status: 'Хочу прочитати',
    },
    {
      id: 2,
      title: 'Відьмак: Останнє бажання',
      author: 'Andrzej Sapkowski',
      genre: 'Фентезі',
      year: 1993,
      rating: 4.7,
      cover: 'amber',
      status: 'Читаю',
    },
    {
      id: 3,
      title: 'Data Structures and Algorithms for Game Developers',
      author: 'Jon Skeet',
      genre: 'Програмування',
      year: 2019,
      rating: 4.8,
      cover: 'teal',
      status: 'Хочу прочитати',
    },
    {
      id: 4,
      title: 'Пригоди Шерлока Холмса',
      author: 'Arthur Conan Doyle',
      genre: 'Детектив',
      year: 1892,
      rating: 4.5,
      cover: 'plum',
      status: 'Прочитано',
    },
  ];

  return (
    <div className="book-list" role="list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFavorite={favoriteIds.has(book.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </div>
  );
}
