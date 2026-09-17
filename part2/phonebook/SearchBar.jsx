function SearchBar({ handleSearch }) {
  return (
    <div>
      <label htmlFor="search">filter shown with</label>
      <input type="text" onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;
