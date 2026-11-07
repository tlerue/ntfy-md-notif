function SearchBar({ searchTerm, setSearchTerm, onClear }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Rechercher par ingrédient, plat..."
        className="search-input"
      />
      {searchTerm && (
        <button onClick={onClear} className="clear-btn" aria-label="Effacer la recherche">
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar
