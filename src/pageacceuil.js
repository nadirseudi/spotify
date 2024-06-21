import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './style.css';

export default function Album() {
   const [randAlbum, setRandAlbum] = useState({})

   useEffect(() => {
      fetchAlbums();
   }, []);

   function fetchAlbums() {
      fetch('http://localhost:8000/albums')
         .then(response => response.json())
         .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomAlbum = data[randomIndex];
            setRandAlbum(randomAlbum);
         })
         .catch(error => console.error('Erreur lors de la récupération des albums:', error));
   }

   return (
      <div>
         <nav className="navbar">
            <h2>Album aléatoire :</h2>
            <Link to={`/album/${randAlbum.id}`}> voir l'Album aléatoire</Link>
         </nav>
      </div>
   )
}



