import { useState } from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import './styles/App.css';

export default function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Гаррі Поттер і філософський камінь',
      author: 'J. K. Rowling',
      genre: 'Фентезі',
      year: 1997,
      rating: 4.9,
      cover: 'slate',
      status: 'Хочу прочитати',
      isFavorite: true,
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
      isFavorite: false,
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
      isFavorite: false,
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
      isFavorite: true,
    },
  ]);

  const handleToggleFavorite = (bookId) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, isFavorite: !book.isFavorite } : book
      )
    );
  };

  return (
    <>
      <div className="app">
        <Header />
        <Main books={books} onToggleFavorite={handleToggleFavorite} />
        <Footer subtitle="Лабораторна робота №3" />
      </div>
    </>
  );
}
