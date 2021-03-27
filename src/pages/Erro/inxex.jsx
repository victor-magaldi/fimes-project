import { Link } from "react-router-dom";

export default function Erro() {
  return (
    <div>
      <h1>404</h1>
      <h2>Não conseguimos encontrar esta Página, Favor verificar a URL!</h2>
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}
