import React from "react";
import { FaTimes } from "react-icons/fa";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, image, age } = person;
        return (
          <article className="people" key={id}>
            <div className="img-holder">
              <img src={image} alt={name} />
            </div>
            <div className="details">
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
