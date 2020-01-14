import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

const UserRating = (props) => {
  const fiveArray = [1,2,3,4,5];
  const rateSelector = (
    <form>
      <label htmlFor="rate">What's your rating?</label> <br />
      <select name="rate" id="rate" onChange={props.ratingHandler}>
        <option value="none">Select...</option>
        {fiveArray.map(number => {
          return <option value={number.toString()} key={'rating' + number}>{number}</option>;
        })}
      </select>
    </form>
  );

  var ratedStars = null;
  const stars = [];
  if (props.userRating !== -1) {
    for (let i = 1; i <= props.userRating; i++) {
      stars.push('solid');
    }
    for (let i = 1; i <= (5 - props.userRating); i++) {
      stars.push('empty;')
    }
    ratedStars = stars.map((starType, index) => {
      if (starType === 'solid') {
        return <FontAwesomeIcon icon={fasStar} size="2x" key={starType + index} />
      } else {
        return <FontAwesomeIcon icon={farStar} size="2x" key={starType + index} />
      }
    })
  }

   return (
     <div className="UserRating">
       {props.userRating === -1 ? rateSelector : ratedStars}
     </div>
   );
}

export default UserRating;