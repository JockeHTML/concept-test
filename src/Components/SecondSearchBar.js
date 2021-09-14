import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { data } from "./SearchBar";
import { Button } from "@material-ui/core";

const SecondSearchBar = () => {
  const [searchWord, setSearchWord] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [uniqueValues, setUniqueValues] = useState([]);

  //to get unique country for every object in my data and save it back to an array
  useEffect(() => {
    const unique = [
      ...new Set(
        data.map((value, index) => {
          return value.country;
        })
      ),
    ];
    setUniqueValues(unique);
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchWord(searchTerm);
    const newFilteredSearch = data.filter((search, index) => {
      return search.title.toLowerCase().includes(searchTerm);
    });
    if (searchTerm === "") {
      return setFilteredSearch([]);
    } else {
      setFilteredSearch(newFilteredSearch);
    }
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
      <ul style={{ display: "flex", flexDirection: "column" }}>
        <li>{uniqueValues}</li>
      </ul>
    </div>
  );
};

export default SecondSearchBar;
