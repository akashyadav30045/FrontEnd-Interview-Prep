import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

export default function StarRating({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      <div className="main">
      <h1 className="heading">STAR-RATING COMPONENT</h1>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar className="star"
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
      </div>
    </div>
  );
}