# MovieStack

A simple movie application created with the React framework. Movie data is obtained from The Movie Database API and local storage is used to save ratings and favorited movies.

To install and run the project locally, clone the repo and in the terminal run:
```
npm install
```
Then:
```
npm start
```

## Home
<p>The initial home page displays the most popular movies. Users can switch between the Popular, Top Rated, Upcoming, and Now Playing tabs. Doing so will make a call to the proper API endpoint and display the movies for each respective category.</p>
<p align="center">
  <img src="./demos/moviestack-home.gif" alt="MovieStack Home">
</p>

## Discover
<p>The discover page allows you to discover movies and set filters for a year and genres. You can set a single year and set one or multiple genre filters. You can also sort the results by the rating, release date, and title.</p>
<p align="center">
  <img src="./demos/moviestack-discover.gif" alt="MovieStack Discover">
</p>

## Favourites
<p>You may favourite movies by choosing a movie and clicking the heart icon in the individual movie page. The movie will be saved to local storage and you can view all your favourited movies in the My Favourites page.</p>
<p align="center">
  <img src="./demos/moviestack-favourites.gif" alt="MovieStack Favourite">
</p>

## Ratings
<p>You may rate movies by choosing a movie and selecting a rating from 1 to 5 in the drop down menu. The movie and the rating you gave it will be saved to local storage and you can view all your rated movies in the My Ratings page.</p>
<p align="center">
  <img src="./demos/moviestack-ratings.gif" alt="MovieStack Ratings">
</p>
