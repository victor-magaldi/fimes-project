import "./style.css";

import { useParams } from "react-router-dom";

export default function Filme() {
  const { id } = useParams();

  return (
    <div>
      <h2>filme{id}</h2>
    </div>
  );
}
