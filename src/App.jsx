import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmModal from "./FilmModal";

const App = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [films, setFilms] = useState([]);
  //const [isFetchingFilms, setIsFetchingFilms] = useState(true);
  try {
    useEffect(() => {
      const PeopleData = async () => {
        const data = await axios.get("https://swapi.dev/api/people/");
        console.log(data);
        setPeople(data.data.results);
        setIsLoading(false);
      };
      PeopleData();
    }, []);
  } catch (error) {
    console.log(error);
  }

  const handleGetFilms = (filmsArr) => {
    
    filmsArr.forEach(async (element, index) => {
      try {
        const data = await axios.get(element);
        setFilms([...films, data?.data]);
        //setIsFetchingFilms(false);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <>
      <h1 className="text-7xl text-center">star wars </h1>
      <h2 className="text-5xl">people of star wars</h2>

      <div>
        <input type="text" className="bg-stone-400" />
        <button>search</button>
      </div>

      {!isLoading ? (
        <section>
          {JSON.stringify(people)}
          {people.map((item, val) => (
            <div>
              {item.name}

              <button onClick={() => handleGetFilms(item.films)}>films</button>
            </div>
          ))}
        </section>
      ) : (
        "loading"
      )}
     {/* {!isFetchingFilms && <FilmModal films={films} />} */}
     <FilmModal films={films} />
    </>
  );
};

export default App;
