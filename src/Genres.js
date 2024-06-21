import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './style.css';

export default function Genres()
{
  const [genres, setGenres] = useState();

  useEffect(() =>
  {
    function AfficherListe()
    {
      const url = "http://localhost:8000/genres";
      fetch(url)
      .then(async reponse => setGenres(await reponse.json()));
    }

    AfficherListe();
  });
  return (
    <div className = "center">
      {genres ? (genres.map((element) => 
      {return <Link to = {"/genres/" + element.id} key = {element.id}> 
      <p className = "element">{element.name}</p>
      </Link>})) : <div className = "element center"> Loading ... </div>}
    </div>
  );
}