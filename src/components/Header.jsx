export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo" aria-hidden="true">BS</span>
        <div>
          <h1 className="header__title">Book Shelf</h1>
          <p className="header__subtitle">Особиста бібліотека читача</p>
        </div>
      </div>
      <nav className="header__nav" aria-label="Вкладки бібліотеки">
        <button className="chip chip--active" type="button">Мої книги</button>
      </nav>
      <button className="header__cta" type="button" aria-label="Додати нову книгу">
        + Додати книгу
      </button>
    </header>
  );
}
