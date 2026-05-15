import React from "react";

function Search({search, setSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
