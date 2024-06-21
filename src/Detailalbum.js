import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detailalbum() {
    const [list, setList] = useState();
    const params = useParams();

  useEffect(() => {
    function Afficherliste() {
      const url = 'http://localhost:8000/albums/' + params.id;
      fetch(url)
      .then(async reponse => setList(await reponse.json()));
    }

    Afficherliste();

  }, [params.id]);

  console.log(list);

    return <div>
        {list ? <div>{
            <div>
              <div className = 'center black top'>
                  <img src={list.album.cover} alt = {list.album.cover}/>
                </div>
                <div className = 'center element black'> <strong>{list.album.name}</strong> </div>
                {list.tracks.map((track) => {
                    return (<div className = 'block element'>
                    <p>{track.name}</p>
                    <audio controls key={track.id}>
                        <source src={track.mp3} />
                    </audio>
                    </div>

                    )
                })}

            </div>
            }</div> : <div className = 'element center'> Loading ... </div>}
      </div>
}