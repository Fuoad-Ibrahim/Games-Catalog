import Favorites from "../pages/Favorites";
import {useState, createContext, useContext} from "react"


const FavoritesContext = createContext();

export const useFavoritesContext = () => useContext(FavoritesContext)

function FavoritesProvider({children}) {

    const [favorites, setFavorites] = useState([]);

    function addFavorite(game) {
    setFavorites((prevFavorites) => {
        const newFavorites = [...prevFavorites, game];
        return newFavorites
    });
    }

    function removeFavorite(gameId) {
        setFavorites((prevFavorites) => (prevFavorites.filter(game => game.id !== gameId)))
    }


    const isFavorite = (gameId) => {
        return favorites.some(game => game.id === gameId)
    }

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }

    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>

}

export default FavoritesProvider