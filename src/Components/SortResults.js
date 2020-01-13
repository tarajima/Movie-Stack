import React from 'react';

const SortResults = (props) => {
  return (
    <form>
      <select name="sort"
              id="sort"
              onChange={props.sortHandler}>
        <option value="vote_average.desc">Rating (descending)</option>
        <option value="vote_average.asc">Rating (ascending)</option>
        <option value="release_date.desc">Release Date (descending)</option>
        <option value="release_date.asc">Release Date (ascending)</option>
        <option value="original_title.asc">Title (A to Z)</option>
        <option value="original_title.desc">Title (Z to A)</option>
      </select>
    </form>
  );
}

export default SortResults;