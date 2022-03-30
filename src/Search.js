import React from "react";
import "./search.css";

export default function Search() {
  return (
    <form class="search-box">
      <input
        type="text"
        placeholder="Enter a city"
        class="search-input"
        id="search-input"
        autocomplete="off"
        autofocus="on"
      />
      <input type="submit" value="Search" class="button" />
      <button class="button" id="button">
        Current location
      </button>
    </form>
  );
}
