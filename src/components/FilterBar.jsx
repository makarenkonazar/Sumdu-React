export default function FilterBar({
  viewMode,
  onChangeViewMode,
  onlyFavorites,
  onToggleOnlyFavorites,
}) {
  return (
    <div className="filter-bar" role="group" aria-label="Фільтри бібліотеки">
      <div className="filter-bar__modes" role="tablist" aria-label="Режим показу">
        <button
          className={`filter-bar__mode${
            viewMode === 'all' ? ' filter-bar__mode--active' : ''
          }`}
          type="button"
          onClick={() => onChangeViewMode('all')}
        >
          Усі
        </button>
        <button
          className={`filter-bar__mode${
            viewMode === 'reading' ? ' filter-bar__mode--active' : ''
          }`}
          type="button"
          onClick={() => onChangeViewMode('reading')}
        >
          Читаю
        </button>
        <button
          className={`filter-bar__mode${
            viewMode === 'want' ? ' filter-bar__mode--active' : ''
          }`}
          type="button"
          onClick={() => onChangeViewMode('want')}
        >
          Хочу прочитати
        </button>
        <button
          className={`filter-bar__mode${
            viewMode === 'read' ? ' filter-bar__mode--active' : ''
          }`}
          type="button"
          onClick={() => onChangeViewMode('read')}
        >
          Прочитані
        </button>
      </div>
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
        <input
          type="checkbox"
          checked={onlyFavorites}
          onChange={onToggleOnlyFavorites}
        />
        Лише улюблені
      </label>
      <button className="filter-bar__button" type="button">
        Сортувати: Рейтинг
      </button>
    </div>
  );
}
