import React from "react";

const FilmModal = ({films}) => {
    console.log("the films areeeee", films)
  return (
    <>
      {
        films.length ? <div>
          {films.map((item, index) => (
            <ul>{item.title}</ul>
          ))}
        </div>: "getting"
      }
    </>
  );
};

export default FilmModal;
