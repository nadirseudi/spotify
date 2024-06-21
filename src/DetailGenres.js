import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailGenres() 
{
  const [musiques, setMusiques] = useState();
  const params = useParams();

  useEffect(() => 
  {
    async function AfficherListe() 
    {
      const url = await fetch("http://localhost:8000/genres/" + params.id);
      const genres = await url.json();
      const url2 = await fetch("http://localhost:8000/albums");
      const albums = await url2.json();
      const filter = albums.filter(album => genres.albums.includes(album.id));
      setMusiques({ genre: genres.genre, albums: filter });
    }

    AfficherListe();
  }, [params.id]);

  return (
    <div>
      {musiques ? (
        <div className = 'black'>
          <div>
            <p className = 'center'><strong>{musiques.genre.name}</strong></p>
          </div>
          <div className = 'grid'>
          {musiques.albums.map((album) => {
            return <div className = 'title element'> <p key = {album.id}> {album.name} </p> {<img src = {album.cover} alt = {album.cover}/>} </div>
          })}
          </div>
        </div>
      ) : (
        <div className = 'element center'> Loading ... </div>
      )}
    </div>
  );
}