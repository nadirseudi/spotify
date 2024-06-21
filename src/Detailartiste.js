import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detailartiste() {
    const [artist, setArtist] = useState();
    const params = useParams();

  useEffect(() => {
    function Afficherliste() {
      const url = 'http://localhost:8000/artists/' + params.id;
      fetch(url)
      .then(async reponse => setArtist(await reponse.json()));
    }

    Afficherliste();
  }, [params.id]);

  console.log(artist);

  return <div className = 'black'>
      {artist ? <div>
        {
          <div className = 'green'>
            <div>
              <div className = 'center top'>
                <img src = {artist.photo} alt = {artist.id} width={400}/>
              </div>
              <p className = 'center gap'> {artist.name} </p>
            </div>
              <div>
                <p className = 'title'> Description </p>
                <p className = 'description'> {artist.description} </p>
              </div>
              <div>
                <p className = 'title'> Biographie </p>
                <p className = 'bio'> {artist.bio} </p>
              </div>
            </div>
        }</div> : <div> Loading... </div>}
  </div>
}