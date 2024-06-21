
import './App.css';
import AppRouter from './AppRouter';
import { BrowserRouter as Router, Link } from 'react-router-dom';



function MyNavbar() {
  return (
    <ul className='navbar'>
      <li><Link to='/acceuil' className = 'element'>Accueil</Link></li>
      <li><Link to='/recherche' className = 'element'>Recherche</Link></li>
      <li><Link to='/album' className = 'element'>Album</Link></li>
      <li><Link to='/genres' className = 'element'>Genres</Link></li>
      <li><Link to='/artiste' className = 'element'>Artiste</Link></li>
    </ul>
    );
  }

export default function MyApp() {
  

  return (
    <Router>
      <MyNavbar/>

      
      
      <AppRouter />
    </Router>
    
  );
}
