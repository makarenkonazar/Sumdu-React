import FilterBar from './FilterBar.jsx';
import BookList from './BookList.jsx';

export default function Main() {
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
            <span className="stat__value">12</span>
          </div>
          <div className="stat" role="listitem">
            <span className="stat__label">Жанри</span>
            <span className="stat__value">6</span>
          </div>
          <div className="stat" role="listitem">
            <span className="stat__label">Улюблені</span>
            <span className="stat__value">4</span>
          </div>
        </div>
      </section>
      <section className="panel">
        <h2 className="panel__title">Каталог бібліотеки</h2>
        <FilterBar />
        <BookList />
      </section>
    </main>
  );
}
