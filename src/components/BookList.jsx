import BookCard from './BookCard.jsx';

export default function BookList({ books, onToggleFavorite }) {
  if (books.length === 0) {
    return (
      <div className="empty-state" role="status">
        У цьому режимі немає книг.
      </div>
    );
  }

  return (
    <div className="book-list" role="list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFavorite={book.isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
