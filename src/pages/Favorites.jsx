import GameCard from "../components/GameCard"
import { useFavoritesContext } from "../contexts/favoritesContext"
import "../css/favorites.css";

function Favorites() {
    const { favorites } = useFavoritesContext();
    if (favorites.length > 0) {

    return (
    <div className="container" >
        <h1 className="fav-heading">Favorites</h1>
        <div className="row">
            {favorites.map((game) => (
            <div className="col-lg-3 col-sm-6 game-card-container d-flex justify-content-center" key={game.title}>
                <GameCard 
                game={game}
                key={game.id}
                />
            </div>
            ))}
        </div>
    </div>
    )
    }

    return (
        <div className="no-favorites" >
            <h2>No favorite games yet</h2>
            <p>Add favorites and they will appear here!</p>
        </div>
    )
}

export default Favorites