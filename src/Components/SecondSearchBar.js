import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { data } from "./SearchBar";
import { Button, Typography } from "@material-ui/core";

const SecondSearchBar = () => {
  const [searchWord, setSearchWord] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchWord(searchTerm);
    const newFilteredSearch = data.filter((search, index) => {
      return search.title.toLowerCase().includes(searchTerm);
    });
    setFilteredSearch(newFilteredSearch);
  };

  const handleClose = () => {
    setSearchWord("");
    setFilteredSearch([]);
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <Button variant="contained" color="primary">
          HEJSAN
        </Button>
        <input
          onChange={handleSearch}
          value={searchWord}
          type="text"
          placeholder="search"
        />
        <div className="searchIcon">
          {searchWord.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon style={{ cursor: "pointer" }} onClick={handleClose} />
          )}
        </div>
      </div>

      {filteredSearch.length !== 0 ? (
        <div className="dataResult">
          {filteredSearch.map((value, index) => {
            return (
              <a key={index} className="dataItem" href={value.link}>
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SecondSearchBar;
