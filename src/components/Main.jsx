import FilterBar from './FilterBar.jsx';
import BookList from './BookList.jsx';

export default function Main({ books, onToggleFavorite }) {
  const totalBooks = books.length;
  const totalGenres = new Set(books.map((book) => book.genre)).size;
  const totalFavorites = books.filter((book) => book.isFavorite).length;

  return (
    <main className="main">
      <section className="hero" aria-label="Огляд бібліотеки">
        <div>
          <h2 className="hero__title">Ваша книжкова полиця</h2>
          <p className="hero__text">
            Зберігайте улюблені книги, жанри та статус читання в одному місці.
          </p>
        </div>
        <div className="hero__stats" role="list">
          <div className="stat" role="listitem">
            <span className="stat__label">Книги</span>
            <span className="stat__value">{totalBooks}</span>
          </div>
          <div className="stat" role="listitem">
            <span className="stat__label">Жанри</span>
            <span className="stat__value">{totalGenres}</span>
          </div>
          <div className="stat" role="listitem">
            <span className="stat__label">Улюблені</span>
            <span className="stat__value">{totalFavorites}</span>
          </div>
        </div>
      </section>
      <section className="panel">
        <h2 className="panel__title">Каталог бібліотеки</h2>
        <FilterBar />
        <BookList books={books} onToggleFavorite={onToggleFavorite} />
      </section>
    </main>
  );
}
