import BookCard from './BookCard.jsx';

export default function BookList({ books }) {
  return (
    <div className="book-list" role="list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFavorite={book.isFavorite}
        />
      ))}
    </div>
  );
}
