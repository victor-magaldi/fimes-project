import React, { useEffect, useState } from "react";
import api from "../../services/app";
import { Link } from "react-router-dom";

import "./style.css";

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/r-api/?api=filmes");
      // console.log(response.data);
      setFilmes(response.data);
    }
    loadFilmes();
  }, []);
  return (
    <div className="container--home">
      <div className="list-movies">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <h3>{filme.nome}</h3>
              <img src={filme.foto} alt={filme.id} />
              <Link to="/">Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
