import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Album() {
    const [list, setList] = useState();

  useEffect(() => {
    function Afficherliste() {
      const url = 'http://localhost:8000/artists';

      fetch(url)
      .then(async reponse => setList(await reponse.json()));
    }

    Afficherliste();
  }, []);

  return <div className = 'black'>
    <div className = 'grid'>
    {list ? (list.map((element) => {return <Link to={"/artists/" + element.id} key = {element.id} className = 'element'> <p className = 'title'>{element.name}</p> {<img src={element.photo} alt = {element.photo} width = {400}/>} </Link>})) : <div className = 'element center'> Loading ... </div>}
    </div>
  </div>
}