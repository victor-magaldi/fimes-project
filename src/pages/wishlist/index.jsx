import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function WishList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const mylists = localStorage.getItem("movies");
    setMovies(JSON.parse(mylists) || []);
  }, []);

  function handleDelete(id) {
    let filterMovies = movies.filter((item) => {
      return item.id !== id;
    });
    setMovies(filterMovies);
    localStorage.setItem("movies", JSON.stringify(filterMovies));
  }
  return (
    <div className="myMovies">
      <h2>Filmes Favoritos </h2>
      <ul>
        {movies.map((item) => {
          console.log(item);
          return (
            <li key={item.id}>
              <span>{item.nome}</span>

              <div className="buttonsContainer">
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => handleDelete(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
