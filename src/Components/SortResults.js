import React from 'react';

const SortResults = (props) => {
  return (
    <form>
      <select name="sort"
              id="sort"
              onChange={props.sortHandler}>
        <option value="vote_average.desc">Rating (highest to lowest)</option>
        <option value="vote_average.asc">Rating (lowest to highest)</option>
        <option value="release_date.desc">Release Date (newest first)</option>
        <option value="release_date.asc">Release Date (oldest first)</option>
        <option value="original_title.asc">Title (A to Z)</option>
        <option value="original_title.desc">Title (Z to A)</option>
      </select>
    </form>
  );
}

export default SortResults;