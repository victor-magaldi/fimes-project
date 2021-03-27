import "./style.css";

import { useParams, useHistory } from "react-router-dom";
import api from "../../services/app";
import { useEffect, useState } from "react";

export default function Filme() {
  const { id } = useParams();
  const history = useHistory();

  const [filme, setfilme] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get(`/r-api/?api=filmes/${id}`);

      if (response.data.length === 0) {
        // tentou acessar um Id que não exite , retorna pra home
        history.replace("/");
        return;
      }
      setfilme(response.data);
      setloading(false);
    }
    loadFilmes();

    // a funcao return do useEffect  é executaada quando o componente é demontado
    // return () => {
    //   console.log("demontando componente");
    // };
  }, [id, history]);

  function saveMovie() {
    const myList = localStorage.getItem("movies");

    let movieSaveds = JSON.parse(myList) || [];

    // ignorar filme repetido
    const hasMovie = movieSaveds.some(
      (movieSaved) => movieSaved.id === filme.id
    );
    if (hasMovie) {
      alert("Já possui o filme");
      return;
    }
    movieSaveds.push(filme);
    localStorage.setItem("movies", JSON.stringify(movieSaveds));
    alert("Filme salvo com sucesso");
  }

  if (!loading) {
    return (
      <div className="movie-info">
        <h3>{filme.nome}</h3>
        <img src={filme.foto} alt={filme.nome} />
        <p>{filme.sinopse}</p>

        <div className="botoes">
          <button onClick={saveMovie}>Salvar</button>
          <a
            target="blank"
            href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}
          >
            Trailer
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading">
        Carregando seu filme <span className="loading__spin"></span>
      </div>
    );
  }
}
