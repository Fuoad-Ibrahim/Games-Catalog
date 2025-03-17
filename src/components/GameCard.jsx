import "bootstrap/dist/css/bootstrap.min.css";
import "../css/GameCard.css";
import LikeButton from "./LikeButton";

function GameCard({ game }) {

  // Handle the card click to open a new tab
  function handleCardClick() {
    window.open(`https://www.igdb.com/games/${game.slug}`, "_blank");
  }

  return (
    <div className="card game-card shadow-lg border-0 rounded-3 overflow-hidden">
      {/* Card Image Area */}
      <div className="position-relative img-container" onClick={handleCardClick}>
        <img className="card-img-top" src={game.imgUrl} alt={game.title} />
        
        {/* Dark overlay on hover */}
        <div className="overlay"></div>
        
        {/* Like Button Component */}
        <LikeButton game={game}/>
      </div>

      {/* Card Body Area */}
      <div className="card-body" onClick={handleCardClick}>
        <p className="card-title">{game.title}</p>
        <p className="card-text">{game.releaseDate}</p>
      </div>
    </div>
  );
}

export default GameCard;
