import Album from "./Album";
import Genres from "./Genres";
import Artiste from "./Artiste";
import Recherche from "./Recherche";
import Detailalbum from "./Detailalbum";
import DetailGenres from "./DetailGenres";
import Detailartiste from "./Detailartiste";
import Navbar from "./pageacceuil";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => 
{
    return (
        <Routes>
            <Route path = "/acceuil" element = {<Navbar />} />
            <Route path = "/recherche" element = {<Recherche />} />
            <Route path = "/album" element = {<Album />} />
            <Route path = "/genres" element = {<Genres />} />
            <Route path = "/artiste" element = {<Artiste />} />
            <Route path = "/album/:id" element = {<Detailalbum />} />
            <Route path = "/genres/:id" element = {<DetailGenres />} />
            <Route path = "/artists/:id" element ={<Detailartiste />} />
        </Routes>
    );
};


export default AppRouter;