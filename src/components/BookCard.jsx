export default function BookCard({ book, isFavorite }) {
  return (
    <article className="book-card" role="listitem">
      <div className={`book-card__cover book-card__cover--${book.cover}`}>
        <span className="book-card__badge">{book.status}</span>
        <div className="book-card__title-mark">
          {book.title.split(' ').slice(0, 2).join(' ')}
        </div>
      </div>
      <div className="book-card__body">
        <div className="book-card__meta">
          <p className="book-card__genre">{book.genre}</p>
          <p className="book-card__year">{book.year}</p>
        </div>
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">Автор: {book.author}</p>
        <div className="book-card__footer">
          <span className="rating">
            <span className="rating__label">Рейтинг</span>
            <span className="rating__value">{book.rating}</span>
          </span>
          <button
            className="book-card__action"
            type="button"
          >
            {isFavorite ? 'В улюбленому' : 'Додати до улюбленого'}
          </button>
        </div>
      </div>
    </article>
  );
}
