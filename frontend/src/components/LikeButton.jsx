import { useState } from "react";
import { useFavoritesContext } from "../contexts/favoritesContext";
import "../css/LikeButton.css"; // Move styles here


function LikeButton({game}) {

  const { isFavorite, addFavorite, removeFavorite } = useFavoritesContext();

  const liked = isFavorite(game.id);

  // Handle favorite click
  function handleFavoriteClick(event) {
    event.stopPropagation(); // Prevent click from opening a new tab
    if (liked) removeFavorite(game.id);
    else addFavorite(game);
  }

  return (
    <button className={`like-button ${liked ? "liked" : ""}`} onClick={handleFavoriteClick}>
      {liked ? "❤️" : "🤍"}
    </button>
  );
}

export default LikeButton;
