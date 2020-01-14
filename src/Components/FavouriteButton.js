import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

const FavouriteButton = (props) => {
  return (
      <FontAwesomeIcon icon={props.favourited ? fasHeart : farHeart}
                       size="2x"
                       onClick={props.favouriteHandler}
                       className="favourite-icon" />
  );
}

export default FavouriteButton;