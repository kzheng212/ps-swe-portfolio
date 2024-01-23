function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
