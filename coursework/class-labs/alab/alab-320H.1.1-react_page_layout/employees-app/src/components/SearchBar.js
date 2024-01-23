function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
}

export default SearchBar;
