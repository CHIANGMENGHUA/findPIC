import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div className="search">
      <input
        className="input"
        onChange={inputHandler}
        onKeyDown={handleKeyDown}
        type="text"
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
