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

      if (!response.data.length) {
        // tentou acessar um Id que não exite
        history.replace("/");
        return;
      }
      setfilme(response.data);
      setloading(false);
    }
    loadFilmes();
  }, [id, history]);

  if (!loading) {
    return (
      <div className="detalhes">
        <h3>{filme.nome}</h3>
        <img src={filme.foto} alt={filme.nome} />
        <p>{filme.sinopse}</p>
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
