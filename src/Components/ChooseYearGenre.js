import React from 'react';

const ChooseYearGenre = (props) => {
  const years = [];
  for(let i = 2020; i > 1919; i--) {
    years.push(i);
  }

  return (
    <form onSubmit={props.submit}>
      <label htmlFor="year">Year</label>
      <select name="year"
              id="year"
              onChange={props.yearHandler}>
        {years.map(year => {
          return <option value={year.toString()} key={'year' + year}>{year}</option>;
        })}
      </select>
      <label htmlFor="genre">Genre</label>
      <select name="genre"
              id="genre" 
              multiple size="8" 
              onChange={props.genreHandler}>
        {props.genres.map((genreObject) => {
          return <option value={genreObject.id} key={genreObject.id}>{genreObject.name}</option>;
        })}
      </select>
      <input type="submit" value="Discover" />
    </form>
  );
}

export default ChooseYearGenre;