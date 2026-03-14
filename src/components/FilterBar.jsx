export default function FilterBar() {
  return (
    <div className="filter-bar" role="group" aria-label="Фільтри бібліотеки">
      <label className="filter-bar__label" htmlFor="search">
        Пошук
      </label>
      <input
        id="search"
        className="filter-bar__input"
        type="search"
        placeholder="Пошук за назвою або автором..."
      />
      <label className="filter-bar__label" htmlFor="genre">
        Жанр
      </label>
      <select id="genre" className="filter-bar__select" defaultValue="all">
        <option value="all">Усі жанри</option>
        <option value="fiction">Художня література</option>
        <option value="non-fiction">Наукова література</option>
        <option value="history">Історія</option>
        <option value="fantasy">Фентезі</option>
      </select>
      <label className="filter-bar__toggle">
        <input type="checkbox" />
        Лише улюблені
      </label>
      <button className="filter-bar__button" type="button">
        Сортувати: Рейтинг
      </button>
    </div>
  );
}
